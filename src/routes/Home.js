import Hero    from "../components/Hero";
import {Navbar} from "../components/Navbar";
import Destination from "../components/Destination";    
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home ()
{
    return (
      <>
        <Navbar />
              <Hero
          cName="hero"
          img="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          button="Travel Plan"
          btnurl="/"
          btnClass="show"
        />

        <Destination />
        <Trip />
        <Footer />
      </>
    );
}

export default Home;