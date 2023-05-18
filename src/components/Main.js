import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import React, { useEffect, useState } from "react";

function Main(props) {
  const [student, setStudent] = useState(null);
  
  const URL = "http://localhost:4000/student";

  const getStudent = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setStudent(data);
  };

  const createStudent = async (studen) => {
    // make post request to create student
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(studen),
    });
    // update list of student
    getStudent();
  };

  const updateStudent = async (studen, id) => {
    // make put request to update student
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(studen),
    });
    // update list of student
    getStudent();
  };

  const deleteStudent = async (id) => {
    // make delete request to delete student
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of student
    getStudent();
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={<Index student={student} createStudent={createStudent} />}
        />
        <Route
          path="/student/:id"
          element={
            <Show
              student={student}
              updateStudent={updateStudent}
              deleteStudent={deleteStudent}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
