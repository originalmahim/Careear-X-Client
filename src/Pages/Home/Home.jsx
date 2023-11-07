import Banner from "../Banner/Banner";
import Portfolio from "../JobFeatured/Portfolio";
import Brands from "./Brands";
import Download from "./Download";
import Testimonial from "./Testimonial";


const Home = () => {
          return (
          <div style={{ overflowX: 'hidden' }} >
           <Banner></Banner>
           <div className="hidden lg:grid">
           <Brands></Brands>         
           </div>
           <Portfolio></Portfolio>
           <Download></Download>
           <Testimonial></Testimonial>
           <div className="lg:hidden">
           <Brands></Brands>
          </div>                  
           
          </div>
          );
};

export default Home;