import AccHome from "../AccHome/AccHome";
import Banner from "../Banner/Banner";
import HomeBikes from "../HomeBikes/HomeBikes";
import LocateHome from "../LocateHome/LocateHome";
import SupportHome from "../SupportHome/SupportHome";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
         <HomeBikes></HomeBikes>
         <AccHome></AccHome>
         <LocateHome></LocateHome>
         <SupportHome></SupportHome>
         
           
         
        </div>
    );
};

export default Home;