import photoGrid from "./photo-grid.png"
export default function Hero(){
    return (
        <section className="hero--section">
            <img src={photoGrid} alt="experience gallery" className="grid-img"/>
            <h1 className="hero--title">Online Experience</h1>
            <p className="hero--story">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}