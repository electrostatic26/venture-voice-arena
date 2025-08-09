-- First, let's create the missing profile for the current user
INSERT INTO public.profiles (user_id, display_name) 
SELECT id, COALESCE(raw_user_meta_data ->> 'display_name', email) as display_name 
FROM auth.users 
WHERE id = '8c3ec523-9ed5-4cce-a7ef-7219a2742d6b'
AND NOT EXISTS (SELECT 1 FROM public.profiles WHERE user_id = '8c3ec523-9ed5-4cce-a7ef-7219a2742d6b');

-- Now let's fix the trigger to ensure it creates profiles for all future users
-- First drop the existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Recreate the function with better error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data ->> 'display_name', NEW.email, 'User')
  )
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Also create profiles for any existing users who don't have them
INSERT INTO public.profiles (user_id, display_name)
SELECT 
  au.id,
  COALESCE(au.raw_user_meta_data ->> 'display_name', au.email, 'User') as display_name
FROM auth.users au
LEFT JOIN public.profiles p ON au.id = p.user_id
WHERE p.user_id IS NULL;