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
      <div className="container mx-auto px-4">
      {/* Title */}
      <Fade duration={2000}>
        <h1 className="text-3xl italic font-bold text-white text-center underline mt-10 sm:mt-20">
          For Urgent Support!
        </h1>
      </Fade>

      {/* Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
        {/* Support 1 */}
        <Fade duration={5000}>
          <Box
            sx={{
              position: "relative",
              width: "100%", // Fully responsive width
              maxWidth: "600px",
              height: { xs: "200px", sm: "250px", md: "280px", lg: "300px" },
              borderRadius: "8px",
              overflow: "hidden",
              mx: "auto",
            }}
          >
            <img
              src="https://i.ibb.co.com/m5yc4dN/close-up-person-working-call-center.jpg"
              alt="Support Call"
              className="w-full h-full object-cover rounded-lg"
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

        {/* Support 2 */}
        <Fade duration={5000}>
          <Box
            sx={{
              position: "relative",
              width: "100%", // Fully responsive width
              maxWidth: "600px",
              height: { xs: "200px", sm: "250px", md: "280px", lg: "300px" },
              borderRadius: "8px",
              overflow: "hidden",
              mx: "auto",
            }}
          >
            <img
              src="https://i.ibb.co.com/ZffRNRW/farhat-altaf-y-ZUx-D4-Rz-L0-E-unsplash.jpg"
              alt="Support Chat"
              className="w-full h-full object-cover rounded-lg"
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