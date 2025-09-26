"use client"
import {Cntacts} from '../styles'
import {useState} from 'react'
import Mycontact from "next/image";



export default function Contact() {

 // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    // Send POST request
    const res = await fetch("https://courierbackend-1.onrender.com/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Error: " + JSON.stringify(data));
    }
  };


    return(
        <Cntacts> 
            <Mycontact src="/image/contact.jpg" alt="contact" className="image" fill />
            
            <div className='contactsupt'>
            <button> Contact support </button>
</div>

            <div className='contactform'>
                     <form onSubmit={handleSubmit}>
          <h1>Contact Us</h1>

          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="sendmess">
            <button type="submit">Send</button>
          </div>
        </form>
            </div>

         


        </Cntacts>
    );
}