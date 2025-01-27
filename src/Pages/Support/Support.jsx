import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";





const Support = () => {

    const [buttonText, setButtonText] = useState(" Click Here");
    const [buttonText2, setButtonText2] = useState(" Click Here");
      
    const handleClick = () => {
      setButtonText("+8801817713243");
    };


    const handleClick2 = () => {
        setButtonText2(" royalenfieldBd@gmail.com");
      };
       


    return (
        <div>

        <div>
      <Fade duration={2000}>
      <h1 className="text-3xl italic font-bold text-white text-center underline mt-20">For Urgent Support !</h1>
      </Fade>
        </div>


            <div className="lg:grid grid-cols-2 gap-5 my-10">

   



<Fade duration={5000}>
<Box
sx={{
  position: "relative",
  width: "600px",
  height: "300px",
  borderRadius: "8px",
  overflow: "hidden",
}}
>
{/* Image */}
<img
  src="https://i.ibb.co.com/m5yc4dN/close-up-person-working-call-center.jpg"
  alt="Example"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>

{/* Static Button */}
<Button
  sx={{
    position: "absolute",
    bottom: "16px",
    left: "50%",
    transform: "translateX(-50%)",
  }}
  variant="contained"
  color="error"
  onClick={handleClick}
>
  {buttonText}
</Button>
</Box>
</Fade>





{/* 2 */}
<Fade duration={5000}>
<Box
sx={{
  position: "relative",
  width: "600px",
  height: "300px",
  borderRadius: "8px",
  overflow: "hidden",
}}
>
{/* Image */}
<img
  src="https://i.ibb.co.com/ZffRNRW/farhat-altaf-y-ZUx-D4-Rz-L0-E-unsplash.jpg"
  alt="Example"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>

{/* Static Button */}
<Button
  sx={{
    position: "absolute",
    bottom: "16px",
    left: "50%",
    transform: "translateX(-50%)",
  }}
  variant="contained"
  color="error"
  onClick={handleClick2}
>
  {buttonText2}
</Button>
</Box>
</Fade>




  </div>
        </div>
    );
};

export default Support;