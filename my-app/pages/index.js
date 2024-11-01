// pages/index.js
import { useEffect, useState } from 'react';
import TeacherCard from '../public/Components/TeacherCard'
import Header from '../public/Components/Header'

export default function Home() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const res = await fetch('/api/teachers'); 
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setTeachers(data);
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    }

    fetchTeachers();
  }, []);

  return (
    <div className="container">
  
      <Header />
   
    {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}
