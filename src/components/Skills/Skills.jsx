import './Skills.css';
const Skills = () => {
    return <>
        <div className='body'>

                <div className="skills">

                    
                        <div className="skill">
                           <div style={{display:'flex'}}><img src="/assets/html.png"  style={{width:'65px', height:'50px'}} alt="html" /><div className="skill-name">HTML</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="95%" style={{ maxWidth: '95%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/css.png"  style={{width:'50px',height:'50px'}} alt="html" /><div className="skill-name">css</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="80%" style={{ maxWidth: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/js.png"  style={{width:'37px',height:'50px'}} alt="html" /><div className="skill-name">javascript</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/react.png"  style={{width:'50px',height:'50px'}} alt="html" /><div className="skill-name">React</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                   
                   
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/nodejs.png"  style={{width:'90px'}} alt="html" /><div className="skill-name">Nodejs</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="80%" style={{ maxWidth: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/expressjs.png"  style={{width:'50px'}} alt="html" /><div className="skill-name">Express</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="75%" style={{ maxWidth: '75%' }}></div>
                            </div>
                        </div>
                   
                    
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/c.png"  style={{width:'45px',height:'50px'}} alt="html" /><div className="skill-name">c</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/cpp.png"  style={{width:'45px',height:'50px'}} alt="html" /><div className="skill-name">c++</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/java.png"  style={{width:'70px',height:'70px'}} alt="html" /><div className="skill-name">java</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="95%" style={{ maxWidth: '95%' }}></div>
                            </div>
                        </div>
                   
                    
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/git.png"  style={{width:'100px'}} alt="html" /><div className="skill-name">git/github</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="70%" style={{ maxWidth: '70%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                        <div style={{display:'flex'}}><img src="/assets/figma.png"  style={{width:'25px',height:'47px'}} alt="html" /><div className="skill-name">figma</div></div> 
                            <div className="skill-bar">
                                <div className="skill-per" per="20%" style={{ maxWidth: '20%' }}></div>
                            </div>
                        </div>
                    
                </div>
        </div>
    </>
}
export default Skills;