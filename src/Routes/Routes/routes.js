import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blog/Blogs";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import AllCourses from "../../Pages/Courses/All-Courses/AllCourses";
import CourseDetails from "../../Pages/Courses/Course-Details/CourseDetails";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../Private-Routes/PrivateRoute";


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
                    return fetch('https://education-server-gold.vercel.app/courses')
                },
                element: <AllCourses></AllCourses>
            },

            {
                path: "/courses/:id",
                loader: async ({ params }) => {
                    return fetch(`https://education-server-gold.vercel.app/courses/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },


            {
                path: "/checkout/:id",
                loader: async ({ params }) => {
                    return fetch(`https://education-server-gold.vercel.app/courses/${params.id}`)
                },
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
        ]
    },
    {
        path: "*",
        element: <div className="text-center min-h-screen my-auto"><p>404 Error</p></div>
    }
])