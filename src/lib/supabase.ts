
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jakxtsvmevillzinvodl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impha3h0c3ZtZXZpbGx6aW52b2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4Mjc2OTMsImV4cCI6MjA2MTQwMzY5M30.rP2SqpkSnSGoddGO1C4Y8ug8-Dsl-6eyBqLjGTJGOVA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Workflow {
  id: string
  workflow_name: string
  category: string
  use_case: string
  input: string
  output: string
  authentication: string
  created_at: string
}
