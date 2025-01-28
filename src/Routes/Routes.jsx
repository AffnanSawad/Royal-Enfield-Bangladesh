import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Acc from "../Pages/Acc/Acc";
import LocateUs from "../Pages/LocateUs/LocateUs";
import Support from "../Pages/Support/Support";
import LoginPage from "../FireBaseAuthentication/LoginPage/LoginPage";
import SignInPage from "../FireBaseAuthentication/SignInPage/SignInPage";
import Bikes from "../Pages/Bikes/Bikes";
import BikeDetails from "../Pages/BikeDetails/BikeDetails";


  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
    
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/acc',
            element: <Acc></Acc>
        },
        {
            path: '/locate',
            element: <LocateUs></LocateUs>
        },
        {
            path: '/support',
            element:<Support></Support>
        },
        {
          path:'/login',
          element: <LoginPage></LoginPage>
        },
        {
          path:'/signin',
          element: <SignInPage></SignInPage>
        },
        {
          path:'/bikes',
          element: <Bikes></Bikes>,
          
        },
        {
          path: '/details/:id',

          loader: ()=> fetch('./data.json'),

          element: <BikeDetails></BikeDetails>
        }
       




      ]
    },
  ]);