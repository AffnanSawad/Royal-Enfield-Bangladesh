import {  useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";




const SignInPage = () => {



 const {create_new_user,setuser} = useContext(AuthContext)

// state
const [error ,seterror] = useState('');

// navigate : sign in er pore home e niye jawar jnno;
const navigate = useNavigate();


const handle_Sign_in = e => {
   
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const confirmpassword= e.target.confirmpassword.value;

    console.log(email,name,password,confirmpassword);

     
    if(password.length < 6){

        seterror('Password must be in 6 characters');

        return;
    }
    if(password != confirmpassword){

        seterror('Password not matched');

        return;
    }

    seterror('');

    create_new_user(email,password)
    .then( result => {

        setuser(result.user);

      // form reset
        e.target.reset();

        // navigate kore home e niye jabe
        navigate('/');

        // sweetalert
         Swal.fire({
            title: 'Sign In Successfully!',
            // text: 'Successfully Sign In!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
     

       
    
    })

    .catch( error=>{
        
        seterror(error.message);
    })
   

   



}



    return (
        <Fade duration={2000}>


<div className="SignIn_Page_Container">
            

            {/* Starting */}
         <form onSubmit={handle_Sign_in}>

         <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign In Now!</h1>
               <p className="mt-2"> Sign In to access your account and manage your personal details, preferences, and settings securely with your credentials. </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
        
                <label className="fieldset-label">Your Name</label>
                <input name="name" type="name" className="input" placeholder="name" />
        
        
                  <label className="fieldset-label">Email</label>
                  <input name="email" type="email" className="input" placeholder="Email" />
        
        
                  <label className="fieldset-label">Password</label>
                  <input name="password" type="password" className="input" placeholder="Password" />


                  <label className="fieldset-label">Confirm Password</label>
                  <input name="confirmpassword" type="password" className="input" placeholder="Confirm Password" />
        
        
                
                 
                 
                  <button className="btn btn-neutral mt-4">Sign In</button>

                


                  <Link   to='/login' >
                  
                  
                  <p className="underline italic mt-2">Already Registered? Please Log In  First? </p>
                   </Link>


                   {
        error && <h4 className=" font-bold italic text-black bg-pink-300">{error} </h4>

                 }


                   
                 
        
        
                </fieldset>
              </div>
            </div>
          </div>
        </div>

         </form>
        
        
        
        
        
        
                </div>


        </Fade>
    );
};

export default SignInPage;