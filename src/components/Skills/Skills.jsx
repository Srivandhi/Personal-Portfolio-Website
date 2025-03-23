import './Skills.css';

const Skills = () => {
    return (
        <div className='body'>
            <h1>Skills</h1>
            <div className="skills">
                <div className="skill">
                    <div style={{ display: 'flex' }} className='skill-head'>
                        <img src={`${process.env.PUBLIC_URL}/assets/html.png`} style={{ width: '65px', height: '50px' }} alt="HTML" />
                        <div className="skill-name">HTML</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="95%" style={{ maxWidth: '95%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/css.png`} style={{ width: '50px', height: '50px' }} alt="CSS" />
                        <div className="skill-name">CSS</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="80%" style={{ maxWidth: '80%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/js.png`} style={{ width: '37px', height: '50px' }} alt="JavaScript" />
                        <div className="skill-name">JavaScript</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/react.png`} style={{ width: '50px', height: '50px' }} alt="React" />
                        <div className="skill-name">React</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/nodejs.png`} style={{ width: '90px' }} alt="Node.js" />
                        <div className="skill-name">Node.js</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="80%" style={{ maxWidth: '80%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/expressjs.png`} style={{ width: '50px',height:'50px' }} alt="Express.js" />
                        <div className="skill-name">Express</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="75%" style={{ maxWidth: '75%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/c.png`} style={{ width: '45px', height: '50px' }} alt="C" />
                        <div className="skill-name">C</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/cpp.png`} style={{ width: '45px', height: '45px' }} alt="C++" />
                        <div className="skill-name">C++</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/java.png`} style={{ width: '60px', height: '60px' }} alt="Java" />
                        <div className="skill-name">Java</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="95%" style={{ maxWidth: '95%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/git.png`} style={{ width: '38px',height:'50px' }} alt="Git/GitHub" />
                        <div className="skill-name">Git/GitHub</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="70%" style={{ maxWidth: '70%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/fig.png`} style={{ width: '25px', height: '47px' }} alt="Figma" />
                        <div className="skill-name">Figma</div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-per" per="20%" style={{ maxWidth: '20%' }}></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
