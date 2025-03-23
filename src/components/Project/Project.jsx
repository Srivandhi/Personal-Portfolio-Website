import './Project.css'; 
 
 const Project = ()=>{
    return <div className="project-body">
        <div><h1>Projects</h1></div>
        <div className="projects">
            <div className="project">
                <div className="project-head"> 
                <img src={`${process.env.PUBLIC_URL}/assets/react.png`} alt="Logo" />

                   <a href=""><h3>Portfolio</h3></a> 
                </div>
                <p>A Personal Portfolio Website built using React.js to showcase my skills, projects, and contact information.
                     The website is fully responsive and features a Home, Skills, Projects, and Contact section, 
                     along with a downloadable resume option.
                </p>
            </div>
        </div>
    </div>
}
export default Project;