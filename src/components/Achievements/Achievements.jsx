import './Achievements.css';

const Achievements = () => {
    return (
        <div className="achievements-section">
            <div className="achievements-container">
                <h1 className="section-title">Achievements</h1>
                <p className="section-subtitle">Milestones and recognitions that showcase my journey</p>
                
                <div className="achievements-grid">
                    {/* Smart India Hackathon 2025 - Winner */}
                    <div className="achievement-card featured">
                        <div className="achievement-icon winner">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="achievement-content">
                            <span className="achievement-badge">Winner</span>
                            <h3>Smart India Hackathon 2025</h3>
                            <p className="achievement-description">
                                Developed a Predictive Analytics Framework for Cybercrime Complaints to forecast likely cash withdrawal locations
                            </p>
                            <div className="achievement-details">
                                <div className="detail-item">
                                    <span className="detail-label">Theme:</span>
                                    <span className="detail-value">CyberSecurity & Blockchain</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Organization:</span>
                                    <span className="detail-value">Ministry of Home Affairs</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">PS Number:</span>
                                    <span className="detail-value">SIH25257</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LeetCode Achievement */}
                    <div className="achievement-card">
                        <div className="achievement-icon coding">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="achievement-content">
                            <h3>300+ Problems Solved</h3>
                            <p className="achievement-description">
                                Consistently solved coding challenges on LeetCode and GeeksforGeeks, strengthening problem-solving skills
                            </p>
                            <div className="achievement-stats">
                                <div className="stat">
                                    <span className="stat-value">300+</span>
                                    <span className="stat-label">Problems</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">2</span>
                                    <span className="stat-label">Platforms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Girl Hackathon */}
                    <div className="achievement-card">
                        <div className="achievement-icon hackathon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="achievement-content">
                            <h3>Google Girl Hackathon 2025</h3>
                            <p className="achievement-description">
                                Shortlisted and successfully completed the coding round among thousands of participants
                            </p>
                            <div className="achievement-tag">
                                <span>Participant</span>
                            </div>
                        </div>
                    </div>

                    {/* freeCodeCamp Certification */}
                    <div className="achievement-card">
                        <div className="achievement-icon certification">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                            </svg>
                        </div>
                        <div className="achievement-content">
                            <h3>Responsive Web Design</h3>
                            <p className="achievement-description">
                                Completed comprehensive certification from freeCodeCamp covering modern web design principles
                            </p>
                            <div className="achievement-tag">
                                <span>Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
