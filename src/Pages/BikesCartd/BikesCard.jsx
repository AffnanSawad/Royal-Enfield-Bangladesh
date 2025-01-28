import { Card ,   CardContent, CardMedia,  } from "@mui/material";


import ReactiveButton from "reactive-button";


const BikesCard = ({bike}) => {

  const {id,photo,name,cc,price} = bike;


    return (
        <div >



<Card  hoverable={true} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt="Bike"
        className=" h-[250px]  "
      />
      <CardContent className="italic  font-bold bg-black text-white ">
        <h1  className="text-xl font-bold"  >
          {name}
        </h1>


        <div className="flex justify-between mt-4">
          
          <h1> CC: {cc}   </h1>
          <h1>Price: {price} </h1>


        </div>

        <div>
        
   
    
    
    <ReactiveButton 
        
        className="mt-5 " color="red"
        
        idleText='Show Details' loadingText='loading' animation={true}

        rounded={true} 
      successText="Success"
       
        
        />
    
    
  


        </div>


       
      </CardContent>
     
    </Card>




        </div>
    );
};

export default BikesCard;

