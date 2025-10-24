import { supabase } from '../lib/supabase';
import type { Person } from '../types';

export const databaseService = {
  async getAllPeople(): Promise<Person[]> {
    const { data, error } = await supabase
      .from('people')
      .select('*')
      .order('registration_date', { ascending: false });

    if (error) {
      console.error('Error fetching people:', error);
      throw error;
    }

    return data.map(row => ({
      id: row.id,
      firstName: row.first_name,
      familyName: row.family_name,
      age: row.age,
      gender: row.gender as any,
      religion: row.religion,
      education: row.education as any,
      job: row.job as any,
      registrationDate: new Date(row.registration_date),
      houseNumber: row.house_number,
      street: row.street,
      muhalla: row.muhalla,
      town: row.town,
    }));
  },

  async addPerson(person: Omit<Person, 'id' | 'registrationDate'>): Promise<Person> {
    const { data, error } = await supabase
      .from('people')
      .insert({
        first_name: person.firstName,
        family_name: person.familyName,
        age: person.age,
        gender: person.gender,
        religion: person.religion,
        education: person.education,
        job: person.job,
        house_number: person.houseNumber,
        street: person.street,
        muhalla: person.muhalla,
        town: person.town,
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding person:', error);
      throw error;
    }

    return {
      id: data.id,
      firstName: data.first_name,
      familyName: data.family_name,
      age: data.age,
      gender: data.gender as any,
      religion: data.religion,
      education: data.education as any,
      job: data.job as any,
      registrationDate: new Date(data.registration_date),
      houseNumber: data.house_number,
      street: data.street,
      muhalla: data.muhalla,
      town: data.town,
    };
  },

  async updatePerson(id: number, updates: Partial<Omit<Person, 'id' | 'registrationDate'>>): Promise<Person> {
    const updateData: any = {};

    if (updates.firstName !== undefined) updateData.first_name = updates.firstName;
    if (updates.familyName !== undefined) updateData.family_name = updates.familyName;
    if (updates.age !== undefined) updateData.age = updates.age;
    if (updates.gender !== undefined) updateData.gender = updates.gender;
    if (updates.religion !== undefined) updateData.religion = updates.religion;
    if (updates.education !== undefined) updateData.education = updates.education;
    if (updates.job !== undefined) updateData.job = updates.job;
    if (updates.houseNumber !== undefined) updateData.house_number = updates.houseNumber;
    if (updates.street !== undefined) updateData.street = updates.street;
    if (updates.muhalla !== undefined) updateData.muhalla = updates.muhalla;
    if (updates.town !== undefined) updateData.town = updates.town;

    const { data, error } = await supabase
      .from('people')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating person:', error);
      throw error;
    }

    return {
      id: data.id,
      firstName: data.first_name,
      familyName: data.family_name,
      age: data.age,
      gender: data.gender as any,
      religion: data.religion,
      education: data.education as any,
      job: data.job as any,
      registrationDate: new Date(data.registration_date),
      houseNumber: data.house_number,
      street: data.street,
      muhalla: data.muhalla,
      town: data.town,
    };
  },

  async deletePerson(id: number): Promise<void> {
    const { error } = await supabase
      .from('people')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting person:', error);
      throw error;
    }
  },
};
