/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import {useEffect, useState} from 'react'
import { BsTrainFreightFront } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import {Homepages} from './styles'
import Comment from './comment'
import Deliverynything from './deliveryanything'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowForward } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { setTimeout } from "timers/promises";









// types.ts
export type Track = {
  tracking_id: string;
};

export type TrackingPackage = {
  track: Track;
  latest_update?: string;
  Update_text?: string;
  delivered_or_complain?: string;
  Arrived_location?: string;
  Arrived_location_date?: string;
  Add_date_to_next_facility?: string;
  package_arrived_at_Shiparama_Facility?: string;
  package_arrived_at_Shiparama_Facility_date?: string;
};







export default function Home() {

const  AIR = () =>{
  window.location.href = '/air'
}
const SEA = () =>{
  window.location.href = '/ocean'
}
const  CARGO = () =>{
  window.location.href = '/car-go'
}


  const [trackingId, setTrackingId] = useState<string>("");
  const [track, setTrack] = useState<Track | null>(null);
  const [packages, setPackages] = useState<TrackingPackage[]>([]);
  const [loading, setLoading] = useState(false);


  const handleTrack = async () => {
    if (!trackingId) return alert("Please enter a tracking ID");

    setLoading(true);
    setTrack(null);
    setPackages([]);

    try {
      const res = await fetch(
        `https://courierbackend-1.onrender.com/tracking/${trackingId}/`
      );
      if (!res.ok) throw new Error("Invalid Tracking ID");

      const data: { track: Track; packages: TrackingPackage[] } =
        await res.json();

      setTrack(data.track);
      setPackages(data.packages || []);
    } catch (err) {
      if (err instanceof Error){
        alert(err.message)
      }
    } 
    
    finally {
      setLoading(false);
      
    }
  }



        useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false,   
        });
        AOS.refresh();
      }, []);
    

  useEffect(() => {
    fetch("https://courierbackend-1.onrender.com/ping/")
      .catch((err) => console.log("Ping failed:", err));
  }, []);


const gotofaq = () => {
  window.location.href = '/faq';
}
  


  return (
    <Homepages>


     {loading && (
      <div className="loader-blur">

      </div>
     )}

    {loading &&     <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>}
        


      <div className="bakcimh">
        <Image src='/image/background.jpg' alt="background" fill className="images" />
      </div>

      <div className="middlewrite" data-aos="zoom-in-up">
        <div className="track">
          <span>WELCOME TO Shiparamalogistics  & SECURITY COMPANY</span>
          <span>Unbeatable Tracking and Transport Service</span>

          <div className="trackinID">
            <input
        type="text"
        placeholder="Enter tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />
            <button onClick={handleTrack}>TRACKING</button>


          </div>
          





 


        </div>
      </div>

             {track && (
        <div className="trackngpage" onClick={() => {setTrack(null)}}>
          <div className="closetracking">
            <span ><VscChromeClose /></span>
          </div>
          <div className="Shiparamatracking">
            <span>Shiparama Tracking</span>
            <span onClick={gotofaq}><span>FAQ </span> < IoIosArrowForward/></span>
          </div>
         
          <div className="trackingnumbers">
           <span>Tracking Number:</span>
           <h2>{track?.tracking_id}</h2>
          </div>
          
       
         {packages?.length ? (  
      packages.map((pkg: TrackingPackage, index: number) => (  
        <div key={index}>  
          <div className="updated">
            <div>
              <p>{pkg.latest_update}</p>  {/* optional chaining '?' can be removed if pkg is always defined */}
              <span>{pkg.Update_text}</span>
            </div>
            <hr />
            <div>
              <span>Get More Out of Shiparamalogistics Tracking:</span>
              <span>Shiparama Tracking Plus</span>
            </div>
          </div>

          <div className="preparingfor">
            <span>{pkg.delivered_or_complain}</span>
          </div>

          <div className="arrived">
            <span>{pkg.Arrived_location}</span>
            <span>{pkg.Arrived_location_date}</span>
          </div>

          <div className="movingthroug">
            <span>Moving Through Network</span>
            <span>In Transit to Next Facility</span>
            <span>{pkg.Add_date_to_next_facility}</span>
          </div>

          <div className="arrviedourfacility">
            <span>Arrived at Shiparama Regional Facility</span>
            <span>{pkg.package_arrived_at_Shiparama_Facility}</span>
            <span>{pkg.package_arrived_at_Shiparama_Facility_date}</span>
          </div>
        </div>
      ))
    ) : (
      <p style={{padding: '20px 0px'}}>No package updates yet.</p>
    )}


  </div>
)}
   

      <div className="shipment" data-aos="flip-left">

        <div onClick={SEA}>
          <span><BsTrainFreightFront /></span>
          <span>SEA FREIGHT</span>
        </div>

        <div onClick={AIR}>
          <span><GiCommercialAirplane /></span>
          <span>AIR FREIGHT</span>
        </div>
          <div onClick={CARGO}>
          <span><FaBox /></span>
          <span>CARGO FREIGHT</span>
        </div>
        <div>
          <span><FaShieldAlt /></span>
          <span>INSURANCE</span>
        </div>
        <div>
          <span><MdWarehouse /></span>
          <span>WAREHOUSE</span>
        </div>

      </div>




    <div className="whoweae">
      <div className="main">


         <div className="img" data-aos="slide-right" >
           <Image src="/image/about_img01.png" alt="" className="whoweareimage" width={400} height={100} priority  />
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="whoare">
          <h2>Who We Are</h2>
          <h3>About Our Cargo Delivery</h3>
          <p><strong>Shiparamalogistics  & Security Company</strong> is your global transportation management solution.
Our comprehensive services include order management, shipment tracking and tracing, business intelligence, and freight auditing.</p>
       
          <div className="botton">
          <button>ABOUT US</button>
        </div>

       </div>
      </div>



      <div className="Delivery" data-aos="zoom-in" >

        <div className="deliver">
          <p>Delivery innovative service</p>
        <h2>About Cargo Delivery</h2>
        <span>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service is useful for companies of various effective logistics scale.</span>
      
        </div>
      
      </div>

      <div className="fastdeliry" data-aos="flip-left">
        <div className="fast">

          <div className="box">
            <div className="imgaesbox">
              <Image src='/image/sel.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
             <div className="witep">
              <p>Fast Delivery</p>
            <span>
When it comes to logistics, timely delivery is crucial for the success of your business. At Shiparamalogistics  & Security Company, we understand the importance of meeting deadlines and ensuring on-time delivery, everytime.</span>
          
             </div>
          </div>
          <div className="box">
            <div className="imgaesbox">
              <Image src='/image/services_img02.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
            <div className="witep">
               <p>24/7 Telephone Support</p>
            <span>At Shiparamalogistics  & Security Company, we understand the importance of seamless communication and round-the-clock assistance for our valued clients.</span>
          
            </div>
          </div>
          <div className="box">
            <div className="imgaesbox">
              <Image src='/image/services_img03.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
             <div className="witep">
              <p>More Than Anywhere Shipping</p>
            <span>We take pride in being your gateway to the world. With our extensive network and expertise, we navigate the global market with finesse, ensuring that your goods reach international markets efficiently and securely.</span>
          
             </div>
          </div>
        </div>
      </div>


   <Comment />

   <Deliverynything />





    <div className="extrafeatures">

      <div className="Extra" data-aos="zoom-out">
        <span>Extra Features</span>
        <h1>Unbeatable Tracking and Transport <span>Services</span></h1>
        <div>
          <p>At Shiparamalogistics  & Security Company., we take great pride in offering unbeatable tracking and transport services that are designed to meet all your logistics needs. With our commitment to excellence and customer satisfaction, we have established ourselves as a trusted name in the industry.</p>
        </div>
      </div>

       <div className="imagesdelivery">
        <Image src="/image/delivery_services_img.png" alt="delivery_services" width={300} height={200} priority />
      </div>
    </div>

 

      </div>


      
    </Homepages>
  );
}

<form action=""></form>
