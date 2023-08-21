import freehitlogo from '../assets/footer-logo.webp'
import "../styles/Footer.css"
const Footer = () => {
  // gettin year dynamically
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <h3>
          <a className="" href="/about">
          <img className="free-logo-footer" src={freehitlogo} alt="logo" />
            </a>
        </h3>
        <p>
          Find the tools you need without breaking the bank
        </p>
        <p>
          <b>Contact Us</b>
        </p>
        <ul className="socials">
          <li>
            <a 
              aria-label="Follow me on Twitter"
              title="Twitter (External Link)"
              rel="noopener noreferrer"
              target="_blank" 
              href="https://twitter.com/"
            >
              <i className="socials_twitter ri-twitter-fill"></i>
            </a>
          </li>
          <li>
            <a 
              aria-label="Follow me on Github"
              title="Github (External Link)"
              rel="noopener noreferrer"
              target="_blank" 
              href="https://github.com/harsh6754"
            >
              <i className="socials_github ri-github-fill"></i>
            </a>
          </li>
          <li>
            <a
              aria-label="Follow me on Linkedin"
              title="Linkedin (External Link)"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/harsh2810/"
            >
              <i className="socials_linkedin ri-linkedin-fill"></i>
            </a>
          </li>
          <li>
            <a
              aria-label="Mail me on uniquecoder6754@gmail.com"
              title="Mail (External Link)"
              rel="noopener noreferrer"
              target="_blank" 
              href="mailto:uniquecoder6754@gmail.com"
            >
              <i className="socials_mail ri-mail-fill"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <br />
        <p>
          <span className='uppercase'>
            Copyright &copy; Free-Hit {year}
          </span>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <span>
            Maintained by &nbsp;
            <a target="_blank" href="https://github.com/harsh6754" className='uppercase'>
              <b>HARSH AGRAWAL</b>
            </a>
          </span>
        </p>
        <br />
      </div>
    </footer>
  )
}

export default Footer
