import { Helmet } from "react-helmet";
import About1 from "./About1";
import Contact from "./Contact";
import Team from "./Team";

const About = () => {
          return (
          <div className="max-w-7xl mx-auto lg:px-0 px-4">
          <Helmet>
          <title>Career X | About Us</title>
          </Helmet>
          <About1></About1>
          <Team></Team>
          <Contact></Contact>                    
          </div>
          );
};

export default About;