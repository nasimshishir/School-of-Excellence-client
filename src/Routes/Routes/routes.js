import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blog/Blogs";
import AllCourses from "../../Pages/Courses/All-Courses/AllCourses";
import CourseDetails from "../../Pages/Courses/Course-Details/CourseDetails";
import CourseCard from "../../Pages/Courses/Courses-Card/CourseCard";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/faq",
                element: <Faq></Faq>
            },

            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },

            {
                path: "/courses",
                element: <AllCourses></AllCourses>,
                loader: async () => {
                    return fetch('http://localhost:5000/courses');
                },
                children: ([
                    {
                        path: "/",
                        element: <CourseCard></CourseCard>
                    },
                    {
                        path: "/courses/:id",
                        element: <CourseDetails></CourseDetails>
                    }
                ])
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])