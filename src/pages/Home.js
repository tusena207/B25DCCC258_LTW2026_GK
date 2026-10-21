import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get('/student.json').then((res) => setStudent(res.data));
  }, []);

  return (
    <div>
      <h1>Trang Chủ</h1>
      {student && (
        <div>
          <p><strong>Họ tên:</strong> {student.fullName}</p>
          <p><strong>MSV:</strong> {student.studentId}</p>
          <p><strong>Lớp:</strong> {student.class}</p>
        </div>
      )}
    </div>
  );
};

export default Home;