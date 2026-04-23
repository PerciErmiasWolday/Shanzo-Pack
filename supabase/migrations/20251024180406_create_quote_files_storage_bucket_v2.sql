/*
  # Create storage bucket for quote file attachments

  1. New Storage Bucket
    - Create 'quote-files' bucket for storing uploaded files
    - Set as public bucket for easy access
  
  2. Security
    - Add RLS policies for bucket access
    - Allow anyone to upload files (for quote submissions)
    - Files are publicly accessible via URL
*/

-- Create the storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'quote-files',
  'quote-files',
  true,
  10485760,
  ARRAY[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv',
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/plain'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv',
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/plain'
  ];

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;

-- Create policy to allow anyone to upload files
CREATE POLICY "Allow public uploads"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'quote-files');

-- Create policy to allow anyone to read files
CREATE POLICY "Allow public reads"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'quote-files');
