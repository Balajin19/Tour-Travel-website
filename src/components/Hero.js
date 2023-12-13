import './Hero.css'

function Hero(props) {
    return (
        <>
        <div className={props.cName}>
                <img alt='HeroImg' src={props.img} />
            
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.btnurl} className={props.btnClass}>{props.button}</a>
                </div>
                </div>
        </>
    )
}

export default Hero;
