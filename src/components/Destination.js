import './Destination.css'
import DestinationData from './DestinationData';
const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot within a time frame.</p>
            <DestinationData
                cName='first-des'
                heading='Taal Volcano, Batangas'
                text="One of the most iconic views in Luzon, Mt Taal boats a volcano inside a lake inside an island, if you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most at the way, and you'll see the peculiar environment found on an active volcano including volcanic rocks and steam vents. The unwind with some heading back home!"     
                img1='https://images.unsplash.com/photo-1583878594798-c31409c8ab4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjB3aXRoJTIwbGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
                img2='https://images.unsplash.com/photo-1629575839282-89036f85d5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluJTIwd2l0aCUyMGxha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'/>
            <DestinationData
                cName='first-des-reverse'
                heading='Mt. Daguldul, Batangas'
                text="One of the most iconic views in Luzon, Mt Taal boats a volcano inside a lake inside an island, if you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most at the way, and you'll see the peculiar environment found on an active volcano including volcanic rocks and steam vents. The unwind with some heading back home!"     
                img1='https://images.unsplash.com/photo-1572629750269-384d91405a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluJTIwd2l0aCUyMGxha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'
                img2='https://images.unsplash.com/photo-1521020781921-ce0d582b7665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdW50YWluJTIwd2l0aCUyMGxha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
    </div>
    )
}
export default Destination;