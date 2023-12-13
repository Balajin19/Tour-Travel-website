import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../sendEmail/sendEmail';
import './ContactFormStyles.css';

function ContactForm ()
{
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ subject, setSubject ] = useState();
  const [ message, setMessage ] = useState();
  const navigate = useNavigate();
  const submitForm = async ( e ) =>
  {
    e.preventDefault();
    if ( localStorage.getItem( "token" ) )
    {
      await sendEmail(
        "tourtravel@gmail.com",
        email,
        subject,
        name,
        message
      );
      alert( "Message sent!" )
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }
    
  
    else
    {
      alert( "Please signup first!" );
      navigate("/signup");
    }
  }
    return (
      <div className="form-cnt">
        <h1>Send a message to us!</h1>
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message..."
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button>Send Message</button>
        </form>
      </div>
    );
}
export default ContactForm;