"use client";
import { Navbar } from "./styles";
import Ima from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuKeyboard } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";





export default function Nav() {
 
  const [dropdown, setDropdown] = useState(false)
  const [service, setService] = useState(false)
  const [tracking, setTracking] = useState(false)


  const [openQuote, setOpenQuote] = useState(false)

  const [dropMenue, setDropMenue] = useState(false)



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



  const dropmeue = () => {
    setDropMenue(prev => !prev)
  }

  const Aboutdrop = () => {
    setDropdown(prev => !prev)
  }
  const servicedrop = () => {
    setService(prev => !prev)
  }
  const Trackingdowp = () => {
    setTracking(prev => !prev)
  }

  const Closeall = () => {
    setDropdown(false)
    setService(false)
    setTracking(false)
  }
  


  // open quotes
 const Openqute = () => {
  setOpenQuote(prev => !prev)
 }

 const Gotohome = () => {
  window.location.href = "/"
 }


  return (
    <Navbar>
      <div className="main">
        <div className="left">
          <div className="logo" onClick={Gotohome}>
            <Ima
            className="images"
              src="/image/logo.png"
              alt="Logo"
              width={150}
              height={120}
              priority
            />
          </div>
        </div>

            <div className="menubar" onClick={dropmeue}>
              {dropMenue ? <IoMdClose/>:<FiMenu /> }
            
          </div>

        <div className="middle">

          <Link onClick={Closeall} href='/'>Home</Link>

          <div className="about" onClick={() => {setService(false)}}>
          <p onClick={() => {Aboutdrop(); setTracking(false)}}>About</p>
          {dropdown && (
           <div className="openabouton">
            <Link onClick={() => {setDropdown(false)}} href='/faq'>FAQ</Link>
            <Link onClick={() => {setDropdown(false)}} href='/about'>About</Link>
           </div>
        
          )}
           </div>

          <div className="about" onClick={() => {setDropdown(false)}}>
          <p onClick={() => {servicedrop(); setTracking(false);}}>Service</p>
          {service && (
           <div className="openabout">
            <Link onClick={() => {setService(false)}} href='/car-go'>Cargo Transportation</Link>
            <Link onClick={() => {setService(false)}} href='/air'>Air Freight</Link>
            <Link onClick={() => {setService(false)}} href='/ocean'>Ocean Freight</Link>
            <Link onClick={() => {setService(false)}} href='/packaging'>Packaging and Storage</Link>
            
           </div>
          )}

          </div>

            <div className="about" onClick={() => {setDropdown(false)}}>
          <p onClick={() => {Trackingdowp(); setService(false);}}>Tracking</p>
          {tracking && (
           <div className="openabout">
            <Link onClick={() => {setTracking(false)}} href='/'>Tracking Your Order</Link>
            <Link onClick={() => {setTracking(false)}} href='/'>Sign-in</Link>
           </div>
          )}

          </div>
           <Link onClick={Closeall} href='/contant'>Contact Us</Link>
        </div>

        <div className="right">
            <button onClick={Openqute}><LuKeyboard /> Get A Quotes</button>
        </div>
      </div>
      
      {/* mobile view */}
    
        {dropMenue && (
            <div className="mobilenabar" onScroll={() => {setDropMenue(false)}} data-aos="slide-left">
               <div>
         <Link onClick={() => {setDropMenue(false)}} href='/'>Home</Link>
        <Link onClick={() => {setDropMenue(false)}}  href='/faq'>FAQ</Link>
        <Link onClick={() => {setDropMenue(false)}}  href='/about'>About</Link>
           <Link onClick={() => {setDropMenue(false)}} href='/car-go'>Cargo Transportation</Link>
            <Link onClick={() => {setDropMenue(false)}} href='/air'>Air Freight</Link>
            <Link onClick={() => {setDropMenue(false)}} href='/ocean'>Ocean Freight</Link>
            <Link onClick={() => {setDropMenue(false)}} href='/packaging'>Packaging and Storage</Link>
       <Link onClick={() => {setDropMenue(false)}}  href='/'>Tracking Your Order</Link>
       <Link onClick={() => {setDropMenue(false)}} href='/contant'>Contact Us</Link>
             <Link onClick={() => {setDropMenue(false)}}  href='/'>Sign-in</Link>
                   <div className="right" onClick={() => {setDropMenue(false)}}>
            <button onClick={Openqute}><LuKeyboard /> Get A Quotes</button>
        </div>
        
       </div>
        </div>
        )}



      <div className="quotes">
         {openQuote && (
          <form onSubmit={handleSubmit} action="">
          <div style={{marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'}}>
            <span>GET A FREE QUOTE</span>
            <span onClick={() => {setOpenQuote(false);}}><IoMdClose /></span>
          </div>
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
          <div>
            <button>Send Message</button>
          </div>
        </form>
         )}

      </div>
    </Navbar>
  );
}
