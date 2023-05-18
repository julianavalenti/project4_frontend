import React from 'react';
import { useParams } from 'react-router-dom';

const Show = (props) => {
  const { id } = useParams();
  const students = props.student;
  const student = students ? students.find((p) => p._id === id) : null;

  const loaded = () => {
    return (
      <>
        <h1>{student.name}</h1>
      </>
    );
  };
  
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="student">
      {student ? loaded() : loading()}
    </div>
  );
};

export default Show;
