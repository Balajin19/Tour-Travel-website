import Hero  from "../components/Hero";
import {Navbar} from "../components/Navbar"; 
import Trip from "../components/Trip";
import Footer from "../components/Footer";   
function Service() {
    return (
        <>
            <Navbar/>
            <Hero
            cName='hero-mid'
            img='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                title='Service' />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service;