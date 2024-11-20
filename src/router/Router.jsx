import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatMents/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader:async()=> {
                const servicesRes = await fetch('/service.json')
                const servicesData = await servicesRes.json()

                const feedbackRes = await fetch('/happyclients.json')
                const feedbackData = await feedbackRes.json()

                return {servicesData, feedbackData}
            },
        },
        {
            path: '/allTreatments',
            element:<AllTreatments></AllTreatments>,
            loader: ()=> fetch('/service.json')
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        },
        {
            path: '/myAppointments',
            element: <MyAppointments></MyAppointments>
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: async({params})=>{
              const res = await fetch('/service.json')
              const data = await res.json()
              const singleData = data.find(d=> d.id == params.id)
              return singleData;
            }
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;