/*
  # Create people table for Portonovo database

  1. New Tables
    - `people`
      - `id` (bigint, primary key, auto-increment) - Unique identifier for each person
      - `first_name` (text) - Person's first name
      - `family_name` (text) - Person's family/last name
      - `age` (integer) - Person's age
      - `gender` (text) - Gender (Male, Female, Other)
      - `religion` (text) - Person's religion
      - `education` (text) - Education level (High School, Bachelor's Degree, Master's Degree, PhD, Other)
      - `job` (text) - Job sector (Technology, Healthcare, Education, Finance, Retail, Manufacturing, Other)
      - `registration_date` (timestamptz) - Date when person was registered
      - `house_number` (text) - House number
      - `street` (text) - Street name
      - `muhalla` (text) - Muhalla/neighborhood
      - `town` (text) - Town/city name
      - `created_at` (timestamptz) - Timestamp when record was created

  2. Security
    - Enable RLS on `people` table
    - Add policy for public read access (anyone can view people data)
    - Add policy for public insert access (anyone can add new people)
    - Add policy for public update access (anyone can update people data)
    - Add policy for public delete access (anyone can delete people data)

  3. Notes
    - This is a public database for community records
    - All fields are required except created_at which has a default value
    - Registration date defaults to current timestamp for new entries
*/

-- Create people table
CREATE TABLE IF NOT EXISTS people (
  id bigserial PRIMARY KEY,
  first_name text NOT NULL,
  family_name text NOT NULL,
  age integer NOT NULL CHECK (age >= 0 AND age <= 150),
  gender text NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
  religion text NOT NULL,
  education text NOT NULL CHECK (education IN ('High School', 'Bachelor''s Degree', 'Master''s Degree', 'PhD', 'Other')),
  job text NOT NULL CHECK (job IN ('Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Other')),
  registration_date timestamptz NOT NULL DEFAULT now(),
  house_number text NOT NULL,
  street text NOT NULL,
  muhalla text NOT NULL,
  town text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE people ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (this is a community database)
CREATE POLICY "Anyone can view people data"
  ON people
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert people data"
  ON people
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update people data"
  ON people
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete people data"
  ON people
  FOR DELETE
  USING (true);

-- Create index on registration_date for better query performance
CREATE INDEX IF NOT EXISTS idx_people_registration_date ON people(registration_date DESC);

-- Create index on town for filtering
CREATE INDEX IF NOT EXISTS idx_people_town ON people(town);
