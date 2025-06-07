import './Home.css';

const Home = ()=>{
    return <>
        <div className="Home"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgroundImage.webp)` }}>
             <div className="container">
                <div className="left-container">
                    <h1>Hi, I'm Sri<span>vandhi</span>,</h1>
                    <h2>  a curious student passionate about full-stack development using the MERN stack. I enjoy building clean, functional web apps and love diving into problem-solving challenges.
                         Lately, I’ve been exploring Artificial Intelligence and looking forward to combining it with my development skills.</h2>
                </div>
                <div className="right-container">
                <img src={`${process.env.PUBLIC_URL}/assets/photo.png`} alt="Profile" />

                </div>
             </div>
        </div>
    </>
}
export default Home;
