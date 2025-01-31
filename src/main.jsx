import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
 
  RouterProvider,

} from "react-router-dom";
import { router } from './Routes/Routes';

import AuthProvider from './FireBaseAuthentication/AuthProvider/AuthProvider';


// tanstack query
import {
 
  
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'

const queryClient = new QueryClient()




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-black'>
   <AuthProvider>
    

    {/* tanstack query  */}
   

    <QueryClientProvider client={queryClient}>
      
    <RouterProvider router={router} />
   
    </QueryClientProvider>
   
   
   
  
   
    
   </AuthProvider>
    </div>
  </StrictMode>,
)
