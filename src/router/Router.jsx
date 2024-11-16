import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatMents/AllTreatments";
import Profile from "../components/Profile/Profile";
import MyAppointments from "../components/MyAppointments/MyAppointments";

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
        }
      ]
    },
  ]);

  export default router;