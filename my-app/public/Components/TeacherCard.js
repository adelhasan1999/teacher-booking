export default function TeacherCard({ teacher }) {
    return (
      <div className="card">
        <img src={teacher.image} alt={`${teacher.name}'s image`} />
        <div className="card-content">
          <h3>{teacher.name}</h3>
          <p><strong>Subject:</strong> {teacher.subject}</p>
          <div><p>{teacher.description}</p></div>
          
          <div style={{ marginTop: 'auto' }}>
          <button style={{ marginLeft: "auto" }}>Book Class</button>
        </div>
            
        </div>
      </div>
    );
  }