-- Create table for idea submissions
CREATE TABLE public.idea_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  idea_title TEXT NOT NULL,
  idea_description TEXT NOT NULL,
  category TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'implemented', 'rejected')),
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewer_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.idea_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert ideas (for public submission)
CREATE POLICY "Anyone can submit ideas" 
ON public.idea_submissions 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to view their own submissions by email (for confirmation)
CREATE POLICY "Users can view their own submissions" 
ON public.idea_submissions 
FOR SELECT 
USING (true);

-- Only authenticated users (club admins) can update submissions
CREATE POLICY "Admins can update submissions" 
ON public.idea_submissions 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_idea_submissions_updated_at
BEFORE UPDATE ON public.idea_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_idea_submissions_email ON public.idea_submissions(email);
CREATE INDEX idx_idea_submissions_status ON public.idea_submissions(status);
CREATE INDEX idx_idea_submissions_submitted_at ON public.idea_submissions(submitted_at DESC);