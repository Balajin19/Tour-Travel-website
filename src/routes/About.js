import Hero  from "../components/Hero";
import {Navbar} from "../components/Navbar";
import AboutUs from "../components/AboutUs";   
import Footer from "../components/Footer"; 
function About() {
    return (
        <>
            <Navbar/>
            <Hero
            cName='hero-mid'
            img='https://images.unsplash.com/photo-1670922461466-17f2609a0b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                title='About' />
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About;