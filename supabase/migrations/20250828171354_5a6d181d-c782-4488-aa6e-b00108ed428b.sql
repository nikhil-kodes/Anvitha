-- Fix the increment_argument_votes function search path issue
CREATE OR REPLACE FUNCTION public.increment_argument_votes(argument_id uuid)
RETURNS VOID AS $$
BEGIN
  UPDATE public.arguments 
  SET votes = votes + 1
  WHERE id = argument_id;
END;
$$ LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public;