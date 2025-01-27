import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const LoginPage = () => {

  
   const {  login_user , setuser} = useContext(AuthContext);

   const [error , seterror] = useState('');

   
//    navigate : succesfully login howar por kothai niye jabe tar jnno.
   const navigate = useNavigate();

   const handleLogin = e =>{

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

   
    console.log(email,password);

    
    login_user( email,password)

    .then(result=> {

        setuser(result.user);

        e.target.reset();

        navigate('/');

        // sweetalert
                 // alert
                 Swal.fire({
                    title: 'Log In Successfully!',
                    // text: 'Successfully Sign In!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })


    })

    .catch(error=>{
        seterror(error.message)
    })



    







   }







    return (
       <Fade duration={2000}>
     


     <div className="LogIn_Page_Container">
            

            {/* Starting */}
            <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login Now!</h1>
               <p className="mt-2"> Login to access your account and manage your personal details, preferences, and settings securely with your credentials. </p>
            </div>



           
           {/* form */}
           <form onSubmit={handleLogin}>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">

                
 
              
        
                  <label className="fieldset-label">Email</label>
                  <input name="email" type="email" className="input" placeholder="Your Email" />
        
        
                  <label className="fieldset-label">Password</label>
                  <input name="password" type="password" className="input" placeholder="Your Password" />
        
        
                 
                  
                  
                  <button className="btn btn-neutral mt-4">Login</button>
                  
                  {/* link */}
                  
                  <Link   to='/signin' >
                 <p className="underline italic mt-2">New here? Please Sign In First? </p>
                 </Link>


                 {
        error && <h4 className=" font-bold italic text-black bg-pink-300">{error} </h4>

                 }
                 
                </fieldset>
              </div>
            </div>
           </form>



          </div>
        </div>
        
        
        
        
        
        
                </div>




       </Fade>
    );
};

export default LoginPage;