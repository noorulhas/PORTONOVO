export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      people: {
        Row: {
          id: number
          first_name: string
          family_name: string
          age: number
          gender: string
          religion: string
          education: string
          job: string
          registration_date: string
          house_number: string
          street: string
          muhalla: string
          town: string
          created_at: string | null
        }
        Insert: {
          id?: never
          first_name: string
          family_name: string
          age: number
          gender: string
          religion: string
          education: string
          job: string
          registration_date?: string
          house_number: string
          street: string
          muhalla: string
          town: string
          created_at?: string
        }
        Update: {
          id?: never
          first_name?: string
          family_name?: string
          age?: number
          gender?: string
          religion?: string
          education?: string
          job?: string
          registration_date?: string
          house_number?: string
          street?: string
          muhalla?: string
          town?: string
          created_at?: string
        }
      }
    }
  }
}
