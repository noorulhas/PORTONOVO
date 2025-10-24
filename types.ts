export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum EducationLevel {
  HighSchool = 'High School',
  Bachelors = 'Bachelor\'s Degree',
  Masters = 'Master\'s Degree',
  PhD = 'PhD',
  Other = 'Other',
}

export enum JobSector {
  Technology = 'Technology',
  Healthcare = 'Healthcare',
  Education = 'Education',
  Finance = 'Finance',
  Retail = 'Retail',
  Manufacturing = 'Manufacturing',
  Other = 'Other',
}

export interface Person {
  id: number;
  firstName: string;
  familyName: string;
  age: number;
  gender: Gender;
  religion: string;
  education: EducationLevel;
  job: JobSector;
  registrationDate: Date;
  houseNumber: string;
  street: string;
  muhalla: string;
  town: string;
}