import './Contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a8015f87-8448-4151-9936-85173e88edff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return <>
    <div className="contact-container">
      <form onSubmit={onSubmit} className="contact-left">
        <h2>Get in touch</h2>
        <input type="text" name="name" placeholder='Yourname' className='contact-inputs' required />
        <input type="email" name="email" placeholder='YourEmail' className='contact-inputs' required />
        <textarea name="message" placeholder='Your Message' rows='10' className='contact-input' required></textarea>
        <div className='btn'>
          <button type="submit">Submit</button> <img src={`${process.env.PUBLIC_URL}/assets/submit.png`} alt="Submit Button" />
        </div>

      </form>
    </div>
    <footer class="footer">
      <div>© 2025 Srivandhi. All Rights Reserved. </div>
      <div>
    <a href="https://www.linkedin.com/in/srivandhi-s-9bb22731b" target="_blank" rel="noopener noreferrer">
        <img className='linkedin' src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn" />
    </a>
    
    <a href="https://leetcode.com/u/srivandhi264/" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/assets/leetcode.png`} alt="LeetCode" />
    </a>
    
    <a href="https://github.com/Srivandhi" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/assets/github.png`} style={{ borderRadius: '2px', width: '30px', height: '20px' }} alt="GitHub" />
    </a>
    
    <a href="https://www.geeksforgeeks.org/user/srivandz9qr/" target="_blank" rel="noopener noreferrer">
        <img className='gfg' src={`${process.env.PUBLIC_URL}/assets/gfg.jpg`} alt="GeeksforGeeks" />
    </a>
</div>

    </footer>

  </>
}
export default Contact;
