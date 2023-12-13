import Hero  from "../components/Hero";
import {Navbar} from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";    
function Contact() {
    return (
        <>
            <Navbar/>
            <Hero
            cName='hero-mid'
            img='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                title='Contact' />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;