import "./index.css"

const Hero = ({title, p1, p2}) => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h2>{title}</h2>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
            </section>
        </>
    )
}

export default Hero