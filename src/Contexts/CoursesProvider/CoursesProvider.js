import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
    const [courses, setCourses] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
        setLoading(false)
    }, [])



    const allCourses = { courses, loading }


    return (
        <div>
            <CoursesContext.Provider value={allCourses}>
                {children}
            </CoursesContext.Provider>
        </div>
    );
};

export default CoursesProvider;