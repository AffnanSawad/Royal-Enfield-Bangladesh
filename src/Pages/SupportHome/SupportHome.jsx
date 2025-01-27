import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";


const SupportHome = () => {
    
    const navigate = useNavigate();

    const goto_Support_Page = ()=>{

        navigate('/support')
    }
    
    
    return (
         <Fade cascade>
                 <div>
                     
           
                     <div className="locateushome-heading">
                      <h1 className="text-red-600 italic m-5 text-2xl font-bold bg-black underline"> Need Support ? </h1>
                      </div>
                    
                  
                      
        
                    
                  
                     
                  
                  
                      {/* banner */}
                      
                   <div 
                    className="hero min-h-screen h-28"
                    style={{
                      backgroundImage: "url(https://i.ibb.co.com/XYqQjVv/young-handsome-man-motorcycle.jpg)",
                     
                    }}>
                  
                  
                    
                    <div>
                   
                  
                    <li to="/support"> 
                    
                   <Fade duration={2500}>
                   <button onClick={goto_Support_Page} className="btn border-red-600 text-white bg-red-600 italic md:-ml-96 mb-36"> Contact Us</button>
                   </Fade>
                    
                     </li>
                      
                     
                  
                    </div>
                  
                  </div>
                  
                  
                  
                  
                          </div>
               </Fade>
    );
};

export default SupportHome;