import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/FireBase.config";



 export const AuthContext = createContext();

  

const AuthProvider = ({children}) => {

//  user state
const [user , setuser] = useState(null);
   
    // Sign In
    const create_new_user = (email,password) =>{

        return createUserWithEmailAndPassword(auth,email,password);
    }

    // login
    const login_user = (email,password)=>{

        return  signInWithEmailAndPassword(auth,email,password);
    }  
    
    
   

  

    // logout
    
    const logout = () => {
        return signOut(auth)
      }




    // observer : user login , logout etc;

    useEffect( ()=> {


   const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{

    if(currentUser){

        setuser(currentUser)
    }
    else{
        setuser(null)
    }


   });

   return()=>{
    unsubscribe();
   }


    }   ,[])


   

    // Auth Values
    const authValues = {
       
        create_new_user,
        login_user,
        logout,
        user,
        setuser
        


    }


    return (
       <div>
         <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
       </div>
    );
};

export default AuthProvider;