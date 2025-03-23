import './Home.css';

const Home = ()=>{
    return <>
        <div className="Home"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgroundImage.webp)` }}>
             <div className="container">
                <div className="left-container">
                    <h1>Hi, I'm Sri<span>vandhi</span>,</h1>
                    <h2> an aspiring Full Stack Developer exploring web technologies, problem-solving, and UI/UX design.</h2>
                </div>
                <div className="right-container">
                <img src={`${process.env.PUBLIC_URL}/assets/photo.png`} alt="Profile" />

                </div>
             </div>
        </div>
    </>
}
export default Home;
