import { Person, Gender, EducationLevel, JobSector } from './types';

export const MOCK_PEOPLE: Person[] = [
  { id: 1, firstName: 'John', familyName: 'Doe', age: 34, gender: Gender.Male, religion: 'Christianity', education: EducationLevel.Bachelors, job: JobSector.Technology, registrationDate: new Date('2023-01-15T09:00:00Z'), houseNumber: '12', street: 'Oak Avenue', muhalla: 'Northwood', town: 'Portonovo' },
  { id: 2, firstName: 'Jane', familyName: 'Smith', age: 28, gender: Gender.Female, religion: 'Atheist', education: EducationLevel.Masters, job: JobSector.Healthcare, registrationDate: new Date('2023-02-20T14:30:00Z'), houseNumber: '45', street: 'Maple Drive', muhalla: 'West End', town: 'Portonovo' },
  { id: 3, firstName: 'Sam', familyName: 'Wilson', age: 45, gender: Gender.Male, religion: 'Christianity', education: EducationLevel.HighSchool, job: JobSector.Manufacturing, registrationDate: new Date('2023-03-10T11:45:00Z'), houseNumber: '7B', street: 'Pine Street', muhalla: 'Southside', town: 'Laketown' },
  { id: 4, firstName: 'Lisa', familyName: 'Ray', age: 52, gender: Gender.Female, religion: 'Hinduism', education: EducationLevel.PhD, job: JobSector.Education, registrationDate: new Date('2023-04-01T16:20:00Z'), houseNumber: '101', street: 'Elm Court', muhalla: 'University District', town: 'Portonovo' },
  { id: 5, firstName: 'Mike', familyName: 'Chen', age: 22, gender: Gender.Male, religion: 'Buddhism', education: EducationLevel.Bachelors, job: JobSector.Finance, registrationDate: new Date('2023-05-25T08:00:00Z'), houseNumber: '234', street: 'River Road', muhalla: 'Financial District', town: 'Metropolis' },
  { id: 6, firstName: 'Emily', familyName: 'White', age: 39, gender: Gender.Female, religion: 'Islam', education: EducationLevel.Masters, job: JobSector.Technology, registrationDate: new Date('2023-06-18T18:10:00Z'), houseNumber: '88', street: 'Birch Lane', muhalla: 'Tech Park', town: 'Portonovo' },
  { id: 7, firstName: 'David', familyName: 'Lee', age: 61, gender: Gender.Male, religion: 'Judaism', education: EducationLevel.HighSchool, job: JobSector.Retail, registrationDate: new Date('2023-07-02T13:00:00Z'), houseNumber: '321', street: 'Market Street', muhalla: 'Old Town', town: 'Laketown' },
  { id: 8, firstName: 'Sara', familyName: 'Khan', age: 31, gender: Gender.Female, religion: 'Islam', education: EducationLevel.Bachelors, job: JobSector.Healthcare, registrationDate: new Date('2023-08-30T10:05:00Z'), houseNumber: '56', street: 'Hospital Drive', muhalla: 'Medical Center', town: 'Metropolis' },
  { id: 9, firstName: 'Alex', familyName: 'Johnson', age: 25, gender: Gender.Other, religion: 'Agnostic', education: EducationLevel.Bachelors, job: JobSector.Technology, registrationDate: new Date('2023-09-12T20:00:00Z'), houseNumber: '999', street: 'Innovation Way', muhalla: 'Tech Park', town: 'Portonovo' },
  { id: 10, firstName: 'Maria', familyName: 'Garcia', age: 48, gender: Gender.Female, religion: 'Christianity', education: EducationLevel.Masters, job: JobSector.Education, registrationDate: new Date('2023-10-05T12:00:00Z'), houseNumber: '77', street: 'School Street', muhalla: 'University District', town: 'Portonovo' },
];

export const GENDER_COLORS = ['#3b82f6', '#ec4899', '#a855f7'];
export const EDUCATION_COLORS = ['#10b981', '#f59e0b', '#ef4444', '#6366f1', '#64748b'];
export const JOB_SECTOR_COLORS = ['#3b82f6', '#10b981', '#6366f1', '#f59e0b', '#ef4444', '#ec4899', '#64748b'];
export const AGE_CHART_COLOR = '#3b82f6';