import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";


const BikesCollectionHome = () => {


// 
const navigate = useNavigate();

const goto_Bikes_Page = ()=>{

    navigate('/bikes')
}








    return (
         <Fade duration={2000}>
                 <div>
                     
           
                     <div className="locateushome-heading">
                      <h1 className="text-red-600 italic m-5 text-2xl font-bold bg-black underline"> View All Collections </h1>
                      </div>
                    
                  
                      
        
                    
                  
                     
                  
                  
                      {/* banner */}
                      
                   <div 
                    className="hero min-h-screen h-28"
                    style={{
                      backgroundImage: "url(https://i.ibb.co.com/G350HQX/view-motorcycle-garage-warehouse.jpg)",
                     
                    }}>
                  
                  
                    
                    <div>
                   
                  
                    <li to="/bikes"> 
                    
                   <Fade duration={2500}>
                   <button onClick={goto_Bikes_Page} className="btn border-red-600 text-white bg-red-600 italic md:-ml-96 mb-36"> View Bikes  </button>
                   </Fade>
                    
                     </li>
                      
                     
                  
                    </div>
                  
                  </div>
                  
                  
                  
                  
                          </div>
               </Fade>
    );
};

export default BikesCollectionHome;