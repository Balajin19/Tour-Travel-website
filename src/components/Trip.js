import './TripStyles.css';
import TripData from './TripData';
function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                img="https://media.istockphoto.com/id/1438408764/photo/the-nao-victoria-is-the-famous-flagship-of-magellans-global-expedition.jpg?b=1&s=170667a&w=0&k=20&c=CHTdXWApLojKoPTbQD2SFpMQ_j11L7oSYAu8-hGbWRg="
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea." />
                <TripData
                img="https://images.unsplash.com/photo-1634922198242-2b58c91b729f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsYXlzaWElMjB0d2luJTIwdG93ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                heading="Trip in Malaysia"
                text="Malaysia is a Southeast Asia country occupying parts of the Malay Peninsula and the island of Boreno. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences." />
                <TripData
                img="https://media.istockphoto.com/id/1181579515/photo/courchevel-village-in-alps-mountains-france.jpg?b=1&s=170667a&w=0&k=20&c=zNKtkVZua0VyEpfNpbDL6s4xGxOqCGeVWMWFK9wM_zA="
                heading="Trip in France"
                text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, it's capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."/>
            </div>
        </div>
    )
    
}
export default Trip;