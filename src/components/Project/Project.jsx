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
            <div className="project">
                <div className="project-head"> 
                <img src={`${process.env.PUBLIC_URL}/assets/java.png`} alt="Logo" />

                   <a href=""><h3>student Management System</h3></a> 
                </div>
                <p>
               Developed a basic RESTful API using Spring Boot to manage student
                records with operations like add, update, delete, and fetch by ID, using in-memory storage and Swagger for API documentation.
                </p>
            </div>
            <div className="project">
                <div className="project-head"> 
                <img src={`${process.env.PUBLIC_URL}/assets/react.png`} alt="Logo" />

                   <a href=""><h3>RedDrop – Blood Donation Web App</h3></a> 
                </div>
                <p>
                 Built a full-stack blood donation platform using the MERN stack.
                  Features include real-time donor/recipient stats, user authentication, and detailed donor/recipient listings.
                  Integrated with backend APIs using Axios. (Live location feature in progress.)
                </p>
            </div>
        </div>
    </div>
}
export default Project;