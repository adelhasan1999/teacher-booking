// pages/api/teachers.js

export default function handler(req, res) {
  if (req.method === 'GET') {
    const teachers = [
      {
        id: 1,
        name: "Alice Johnson",
        subject: "Mathematics",
        description: "Learn the fundamentals of numbers, equations, and problem-solving strategies.",
        image: "https://img.freepik.com/premium-photo/college-teacher-classroom_1042541-1832.jpg"
      },
      {
        id: 2,
        name: "Bob Smith",
        subject: "Physics",
        description: "Explore the laws of nature, from mechanics to electromagnetism and beyond.",
        image: "https://img.freepik.com/premium-photo/college-teacher-classroom_1042541-1832.jpg"
      },
      {
        id: 3,
        name: "Carol Williams",
        subject: "Chemistry",
        description: "Dive into the study of matter, chemical reactions, and the properties of substances.",
        image: "https://img.freepik.com/premium-photo/college-teacher-classroom_1042541-1832.jpg"
      },
      {
        id: 4,
        name: "David Brown",
        subject: "Biology",
        description: "Discover the fascinating world of living organisms and their life processes.",
        image: "https://img.freepik.com/premium-photo/college-teacher-classroom_1042541-1832.jpg"
      },
      {
        id: 5,
        name: "Eva Green",
        subject: "English",
        description: "Enhance your language skills with a focus on reading, writing, and literature.",
        image: "https://img.freepik.com/premium-photo/college-teacher-classroom_1042541-1832.jpg"
      },
      {
        id: 6,
        name: "Frank White",
        subject: "History",
        description: "Journey through time and learn about significant events, cultures, and people.",
        image: "https://img.freepik.com/premium-photo/college-teacher-classroom_1042541-1832.jpg"
      }
    ];
    
    res.status(200).json(teachers);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
