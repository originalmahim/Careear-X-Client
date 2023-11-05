import Banner from "../Banner/Banner";
import Portfolio from "../JobFeatured/Portfolio";
import Brands from "./Brands";
import Testimonial from "./Testimonial";


const Home = () => {
          return (
          <div >
           <Banner></Banner>
           <Brands></Brands>
           <Portfolio></Portfolio>
           <Testimonial></Testimonial>                  
          </div>
          );
};

export default Home;