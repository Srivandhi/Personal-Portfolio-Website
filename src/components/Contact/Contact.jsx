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
          <button type="submit">Submit</button> <img src="/assets/submit.png" alt="" />
        </div>

      </form>
    </div>
    <h2>Contact</h2>
    <footer class="footer">
      <div>© 2025 Srivandhi. All Rights Reserved. </div>
      <div>
        <a href="https://www.linkedin.com/in/srivandhi-s-9bb22731b"><img className='linkedin' src="/assets/linkedin.png" alt="linkedin" /></a>
        <a href="https://leetcode.com/u/srivandhi264/"><img src="/assets/leetcode.png" alt="leetcode" /></a>
        <a href="https://github.com/Srivandhi"><img src="/assets/github.jpg"  style={{borderRadius:'2px',width:'30px',height:'20px'}} alt="github" /></a>
        <a href="https://www.geeksforgeeks.org/user/srivandz9qr/"><img  className='gfg' src="/assets/gfg.jpg" alt="gfg" /></a>
      </div>
    </footer>

  </>
}
export default Contact;
