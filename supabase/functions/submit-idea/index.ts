import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface IdeaSubmission {
  name: string;
  email: string;
  ideaTitle: string;
  ideaDescription: string;
  category: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const ideaData: IdeaSubmission = await req.json();
    
    // Validate required fields
    if (!ideaData.name || !ideaData.email || !ideaData.ideaTitle || !ideaData.ideaDescription) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Save to database
    const { data: submission, error: dbError } = await supabase
      .from('idea_submissions')
      .insert({
        name: ideaData.name,
        email: ideaData.email,
        idea_title: ideaData.ideaTitle,
        idea_description: ideaData.ideaDescription,
        category: ideaData.category || null,
        status: 'pending'
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to submitter
    const confirmationEmailResponse = await resend.emails.send({
      from: "Anvitha ECE Club <noreply@anvithaclub.dev>",
      to: [ideaData.email],
      subject: "✅ Idea Submission Confirmation - Anvitha ECE Club",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; background: #0a0a0a; color: #80ff80; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; border: 2px solid #00ff41; border-radius: 10px; padding: 30px; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { color: #00ff41; font-size: 32px; font-weight: bold; text-shadow: 0 0 10px #00ff41; }
            .title { color: #80ff80; font-size: 24px; margin: 20px 0; }
            .content { line-height: 1.6; }
            .idea-box { background: #0d1a0d; border: 1px solid #00ff41; border-radius: 5px; padding: 20px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
            .circuit-line { height: 2px; background: linear-gradient(90deg, transparent, #00ff41, transparent); margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">⚡ ANVITHA ECE CLUB ⚡</div>
              <div class="circuit-line"></div>
            </div>
            
            <h1 class="title">Idea Submission Confirmed!</h1>
            
            <p>Hello <strong>${ideaData.name}</strong>,</p>
            
            <p>Thank you for submitting your innovative idea to Anvitha ECE Club! Your submission has been successfully received and will be reviewed by our technical committee.</p>
            
            <div class="idea-box">
              <h3 style="color: #00ff41; margin-top: 0;">📋 Your Submission Details:</h3>
              <p><strong>Idea Title:</strong> ${ideaData.ideaTitle}</p>
              <p><strong>Category:</strong> ${ideaData.category || 'General'}</p>
              <p><strong>Submitted on:</strong> ${new Date().toLocaleDateString()}</p>
              <p><strong>Submission ID:</strong> ${submission.id}</p>
            </div>
            
            <h3 style="color: #00ff41;">⚡ What happens next?</h3>
            <ul>
              <li>Our technical committee will review your idea within 7-10 days</li>
              <li>We'll evaluate feasibility, innovation potential, and alignment with club goals</li>
              <li>Selected ideas will be developed as club projects with your involvement</li>
              <li>You'll receive updates on the review status via email</li>
            </ul>
            
            <p style="margin-top: 30px;">Your creativity drives our innovation! We're excited to explore the possibilities of your idea.</p>
            
            <div class="circuit-line"></div>
            
            <div class="footer">
              <p>Best regards,<br>
              <strong>Anvitha ECE Club Technical Committee</strong></p>
              <p style="margin-top: 20px;">Innovation • Legacy • Technology</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (confirmationEmailResponse.error) {
      console.error("Email error:", confirmationEmailResponse.error);
      // Don't fail the request if email fails, but log it
    } else {
      console.log("Confirmation email sent successfully");
    }

    // Send notification email to club administrators
    const adminEmailResponse = await resend.emails.send({
      from: "Anvitha ECE Club <noreply@anvithaclub.dev>",
      to: ["admin@anvithaclub.dev"], // Replace with actual admin email
      subject: `🚀 New Idea Submission: ${ideaData.ideaTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; background: #0a0a0a; color: #80ff80; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; border: 2px solid #00ff41; border-radius: 10px; padding: 30px; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { color: #00ff41; font-size: 32px; font-weight: bold; text-shadow: 0 0 10px #00ff41; }
            .title { color: #80ff80; font-size: 24px; margin: 20px 0; }
            .idea-box { background: #0d1a0d; border: 1px solid #00ff41; border-radius: 5px; padding: 20px; margin: 20px 0; }
            .circuit-line { height: 2px; background: linear-gradient(90deg, transparent, #00ff41, transparent); margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">⚡ ANVITHA ECE CLUB ⚡</div>
              <div class="circuit-line"></div>
            </div>
            
            <h1 class="title">🚀 New Idea Submission</h1>
            
            <div class="idea-box">
              <h3 style="color: #00ff41; margin-top: 0;">Submission Details:</h3>
              <p><strong>Submitter:</strong> ${ideaData.name} (${ideaData.email})</p>
              <p><strong>Title:</strong> ${ideaData.ideaTitle}</p>
              <p><strong>Category:</strong> ${ideaData.category || 'General'}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>ID:</strong> ${submission.id}</p>
              
              <h4 style="color: #00ff41;">Description:</h4>
              <p style="white-space: pre-wrap;">${ideaData.ideaDescription}</p>
            </div>
            
            <p>Please review this submission in your admin dashboard and update the status accordingly.</p>
            
            <div class="circuit-line"></div>
          </div>
        </body>
        </html>
      `,
    });

    if (adminEmailResponse.error) {
      console.error("Admin notification email error:", adminEmailResponse.error);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Idea submitted successfully",
        submissionId: submission.id
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error) {
    console.error("Error in submit-idea function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);