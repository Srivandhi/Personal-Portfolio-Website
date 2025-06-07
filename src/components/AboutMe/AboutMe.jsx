import './AboutMe.css';
const AboutMe = () => {
    return <>
        <div className="aboutme">
            <h1>About Me</h1>
            <p>
                Hi! I'm Srivandhi, an aspiring Software Engineer passionate about <span>AI</span> and <span>Full Stack Development</span>,
                especially the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                I enjoy solving problems and have tackled 200+ coding challenges on LeetCode and GeeksforGeeks.
                Currently, I’m building projects to apply my skills and create seamless, user-friendly applications.
                Always eager to learn and innovate, I strive to craft efficient and impactful solutions.
            </p>
            <a className='a-resume' href={`${process.env.PUBLIC_URL}/assets/myresume.pdf`} target="_blank" rel="noopener noreferrer">
            <button className='resume' >
                Resume
            <img src={`${process.env.PUBLIC_URL}/assets/download.png`} alt="Submit Button" />
            </button>
            </a>
        </div>
    </>
}
export default AboutMe;