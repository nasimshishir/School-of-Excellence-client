import React, { createContext, useState } from 'react';
export const CourseProvider = createContext();

const CoursesProvider = () => {
    const [courses, setCourses] = useState()


    return (
        <div>
            <CoursesProvider value={courses}></CoursesProvider>

        </div>
    );
};

export default CoursesProvider;