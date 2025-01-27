import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";


const AccHome = () => {



  
    const navigate = useNavigate();

    const goToAccPage = () => {
      navigate("/acc"); // Navigate to the About page
    };





    return (
        <div className="bg-black">
        
        
        <Fade>  
        <li to='/acc'>

          <h1 className="text-red-600 italic m-5 text-2xl font-bold bg-black underline"> Accessories </h1>
        </li>
        </Fade>
  
   
 
 <div 
  className="hero min-h-screen h-28"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/4PmT6Mr/full-shot-man-riding-motorbike.jpg)",
   
  }}>
  
  <div>

  <li to="/acc"> 
  
 <Fade duration={2500}>
 <button onClick={goToAccPage} className="btn border-red-600 text-white bg-red-600 italic md:-ml-96 mb-36"> View Accessories</button>
 </Fade>
  
   </li>


  </div>
  
</div>

  
  

</div>


        
    );
};

export default AccHome;