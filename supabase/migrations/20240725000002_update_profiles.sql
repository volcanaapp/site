-- Add cnpj and niche columns to the profiles table
ALTER TABLE public.profiles
ADD COLUMN cnpj TEXT,
ADD COLUMN niche TEXT;

-- Update the function that handles new user creation to accommodate the new fields.
-- This ensures that if these details are provided during sign-up, they are automatically added to the new profile.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, cnpj, niche)
  VALUES (
    new.id,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    new.raw_user_meta_data ->> 'cnpj',
    new.raw_user_meta_data ->> 'niche'
  );
  RETURN new;
END;
$$;