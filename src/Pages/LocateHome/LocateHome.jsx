import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";


const LocateHome = () => {

   
    const navigate = useNavigate();

    const goto_Locate_Page = ()=>{

        navigate('/locate')
    }



    




    return (
       <Fade cascade>
         <div>
             
   
             <div className="locateushome-heading">
              <h1 className="text-red-600 italic m-5 pt-5 text-3xl font-bold bg-black underline"> Locate Us Near By You </h1>
              </div>
            
          
              

            
          
             
          
          
              {/* banner */}
              
           <div 
            className="hero min-h-screen h-28"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/G350HQX/view-motorcycle-garage-warehouse.jpg)",
             
            }}>
          
          
            
            <div>
           
          
            <li to="/acc"> 
            
           <Fade duration={2500}>
           <button onClick={goto_Locate_Page} className="btn border-red-600 text-white bg-red-600 italic md:-ml-96 mb-36"> Locate Us</button>
           </Fade>
            
             </li>
              
             
          
            </div>
          
          </div>
          
          
          
          
                  </div>
       </Fade>

        
    );
};

export default LocateHome;