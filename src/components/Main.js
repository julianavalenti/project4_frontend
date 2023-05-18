import React from 'react'
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = (props) => {
    const [ student, setStudent ] = useState(null);
  
    const URL = "http://localhost:4000/student";

    const getStudent = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setStudent(data);
    };
  
    const createStudent = async (student) => {
        // make post request to create student
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(student),
        });
        // update list of people
        getStudent();
      };
      
    useEffect(() => getStudent, []);

    return (
        <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/student/:id" element={<Show/>} />
        </Routes>
    
  )
}

export default Main