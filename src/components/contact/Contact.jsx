

import "./contact.scss"

const Contact = ()=>{
    return (
      <div className="contact" id="contact">
        <h1>
          <img src="/imgs/logo.png" alt="..." /> Contact us{" "}
        </h1>
        <div className="socialmedialinks">
          <a href="/" className="socialitem">
            <span>facebook</span>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/" className="socialitem">
            <span>facebook</span>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="/" className="socialitem">
            <span>facebook</span>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/" className="socialitem">
            <span>facebook</span>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="contactwrapper">
          <form>
            <div className="formitem">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter your Name"
              />
            </div>
            <div className="formitem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your Email"
              />
            </div>
            <div className="formitem">
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter your Message"
              ></textarea>
            </div>
            <div className="formitem">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
}


export default Contact ;