import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blog/Blogs";
import AllCourses from "../../Pages/Courses/All-Courses/AllCourses";
import CourseDetails from "../../Pages/Courses/Course-Details/CourseDetails";
import DisplayCourses from "../../Pages/Courses/Display-Courses/DisplayCourses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


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
                loader: async () => {
                    return fetch('http://localhost:5000/courses')
                },
                element: <AllCourses></AllCourses>,
                children: ([
                    {
                        path: "/courses",
                        loader: async () => {
                            return fetch('http://localhost:5000/courses')
                        },
                        element: <DisplayCourses></DisplayCourses>
                    },
                    {
                        path: "/courses/:id",
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:5000/courses/${params.id}`)
                        },
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