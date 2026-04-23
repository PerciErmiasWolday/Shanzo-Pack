/*
  # Create quote requests table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key) - Unique identifier for each quote request
      - `company_name` (text) - Name of the requesting company
      - `contact_name` (text) - Name of the contact person
      - `email` (text) - Email address for follow-up
      - `phone` (text, optional) - Phone number for contact
      - `packaging_type` (text) - Type of packaging needed
      - `quantity` (text) - Estimated quantity needed
      - `message` (text, optional) - Additional details or requirements
      - `created_at` (timestamptz) - Timestamp of request submission
      - `status` (text) - Status of the quote (new, contacted, quoted, closed)

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for anonymous users to insert their own quote requests
    - Add policy for authenticated admin users to view all quote requests
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  packaging_type text NOT NULL,
  quantity text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);