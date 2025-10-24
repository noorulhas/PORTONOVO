import React, { useState } from 'react';
import type { Person } from '../types';
import { Gender, EducationLevel, JobSector } from '../types';

interface AddPersonFormProps {
  addPerson: (person: Omit<Person, 'id' | 'registrationDate'>) => void;
  onClose: () => void;
}

const AddPersonForm: React.FC<AddPersonFormProps> = ({ addPerson, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<Gender>(Gender.Female);
  const [religion, setReligion] = useState('');
  const [education, setEducation] =useState<EducationLevel>(EducationLevel.Bachelors);
  const [job, setJob] = useState<JobSector>(JobSector.Technology);
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [muhalla, setMuhalla] = useState('');
  const [town, setTown] = useState('');
  
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !familyName || !age || !religion || !houseNumber || !street || !muhalla || !town) {
      setError('Please fill out all fields.');
      return;
    }
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum <= 0) {
      setError('Please enter a valid age.');
      return;
    }

    addPerson({ firstName, familyName, age: ageNum, gender, religion, education, job, houseNumber, street, muhalla, town });
    setFirstName('');
    setFamilyName('');
    setAge('');
    setGender(Gender.Female);
    setReligion('');
    setEducation(EducationLevel.Bachelors);
    setJob(JobSector.Technology);
    setHouseNumber('');
    setStreet('');
    setMuhalla('');
    setTown('');
    setError('');
    onClose();
  };

  const inputClasses = "w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white";
  const labelClasses = "block text-sm font-medium text-text-secondary";

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-text-primary">Add New Person</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelClasses}>First Name</label>
            <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClasses} placeholder="e.g., Jane" />
          </div>
          <div>
            <label htmlFor="familyName" className={labelClasses}>Family Name</label>
            <input id="familyName" type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)} className={inputClasses} placeholder="e.g., Doe" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="age" className={labelClasses}>Age</label>
            <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} className={inputClasses} placeholder="e.g., 30" />
          </div>
          <div>
            <label htmlFor="gender" className={labelClasses}>Gender</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value as Gender)} className={inputClasses}>
              {Object.values(Gender).map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>
         <div>
          <label htmlFor="religion" className={labelClasses}>Religion</label>
          <input id="religion" type="text" value={religion} onChange={(e) => setReligion(e.target.value)} className={inputClasses} placeholder="e.g., Atheist" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="education" className={labelClasses}>Education Level</label>
              <select id="education" value={education} onChange={(e) => setEducation(e.target.value as EducationLevel)} className={inputClasses}>
                {Object.values(EducationLevel).map(level => <option key={level} value={level}>{level}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="job" className={labelClasses}>Job Sector</label>
              <select id="job" value={job} onChange={(e) => setJob(e.target.value as JobSector)} className={inputClasses}>
                {Object.values(JobSector).map(sector => <option key={sector} value={sector}>{sector}</option>)}
              </select>
            </div>
        </div>

        <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium text-text-primary mb-2">Address Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="houseNumber" className={labelClasses}>House #</label>
                    <input id="houseNumber" type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} className={inputClasses} placeholder="e.g., 123B" />
                </div>
                <div>
                    <label htmlFor="street" className={labelClasses}>Street</label>
                    <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} className={inputClasses} placeholder="e.g., Main Street" />
                </div>
                <div>
                    <label htmlFor="muhalla" className={labelClasses}>Muhalla / Area</label>
                    <input id="muhalla" type="text" value={muhalla} onChange={(e) => setMuhalla(e.target.value)} className={inputClasses} placeholder="e.g., Downtown" />
                </div>
                <div>
                    <label htmlFor="town" className={labelClasses}>Town / City</label>
                    <input id="town" type="text" value={town} onChange={(e) => setTown(e.target.value)} className={inputClasses} placeholder="e.g., Portonovo" />
                </div>
            </div>
        </div>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="pt-4">
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 text-base">
            Add Person
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPersonForm;