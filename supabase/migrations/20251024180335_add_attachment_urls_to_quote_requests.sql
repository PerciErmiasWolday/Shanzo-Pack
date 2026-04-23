/*
  # Add attachment support to quote requests

  1. Changes
    - Add `attachment_urls` column to `quote_requests` table to store file URLs
    - Column type is text array to support multiple file uploads
  
  2. Notes
    - Files will be stored in Supabase Storage bucket 'quote-files'
    - This column stores the public URLs of uploaded files
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quote_requests' AND column_name = 'attachment_urls'
  ) THEN
    ALTER TABLE quote_requests ADD COLUMN attachment_urls text[];
  END IF;
END $$;
