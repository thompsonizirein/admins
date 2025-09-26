"use client"
import Ifd from "next/image";
import {Oceanic} from '../styles'
import Link from "next/link";
import Oc from "next/image";



export default function Ocean() {

    return(
        <Oceanic>
        <Ifd src="/image/oceans.jpg" alt="Ocean"  fill  className="images" />
          
         <div className="manin">
            <button className="oceanbutton">Ocean Freight</button>
            <h1>Ocean Freight</h1>
         </div>


            <div className="Packaging">

            <div  className="tops">
                <div className="left">
                    
                    <div className="mmytopi">
                    <p>Service Category</p>
                    <div><Link href=''>Cargo Transportation</Link></div>
                    <div><Link href=''>Air Freight</Link></div>
                    <div><Link href=''>Ocean Freight</Link></div>
                    <div><Link href=''>Packaging & Storage</Link></div>
                    </div>

                    <div className="suppot">
                       <p>Need Support?</p> 
                       <span>We are always happy to help you out</span>
                       <button >CONTACT US</button>
                    </div>

                </div>


                <div className="rifgr">
                    <Oc src="/image/oceanship.jpg" alt="Image" height={200} width={620} priority />
                </div>
            </div>


<section className="packaging-storage">
  <div className="container">
    <h2 >Introducing Ocean Freight Solutions</h2>
    <p style={{marginBlock: '1rem'}}>
      At Shiparamalogistics  & Security Company, we are proud to offer our esteemed customers exceptional Ocean Freight services. With our unwavering commitment to excellence, we ensure your cargo sails smoothly across the vast seas, reaching its destination in the most efficient and reliable manner.
    </p>

    <div className="packaging">
      <h4 >Discover the Power of Ocean Freight</h4>
      <p>
        Experience a seamless shipping experience like no other with our Ocean Freight solutions. Whether you are transporting large shipments, oversized cargo, or require cost-effective transportation options, our Ocean Freight services are designed to meet your unique needs.
      </p>

      <h4>Unparalleled Reliability</h4>
      <p>
        At Shiparamalogistics  & Security Company, we understand that time is of the essence. That is why we meticulously plan every aspect of your Ocean Freight shipment to ensure timely delivery. With our extensive network of trusted carriers, advanced tracking systems, and proactive communication, you can trust us to keep your cargo on schedule, every time.
      </p>

      <h4>Efficiency Redefined</h4>
      <p>
        We take pride in our ability to optimize your Ocean Freight experience for maximum efficiency. Our team of seasoned logistics experts meticulously plans the most efficient routes, negotiates competitive rates, and leverages cutting-edge technologies to streamline the entire shipping process. With Shiparamalogistics  & Security Company, you can expect reduced transit times, minimized handling, and seamless customs clearance, ensuring your cargo arrives swiftly and intact.
      </p>

      <h4>Unmatched Customer Satisfaction</h4>
      <p>
        Your satisfaction is our paramount priority. Our dedicated team of professionals goes above and beyond to provide personalized support throughout your Ocean Freight journey. From detailed shipment tracking to proactive problem-solving, we are committed to keeping you informed and ensuring a stress-free shipping experience. With Shiparamalogistics  & Security Company, you can expect exceptional service tailored to your specific requirements.
      </p>

      <h4>Sweat-Free Shipping Solutions</h4>
      <p>
        Forget the worries and hassles associated with Ocean Freight. With Shiparamalogistics  & Security Company, we take care of every aspect, allowing you to focus on what matters most – your business. Let us handle the logistics intricacies while you enjoy the peace of mind that comes with our reliable, hassle-free shipping solutions.
      </p>
    </div>

    <div className="storage">
      <h4>Experience the Paramount Advantage</h4>
      <p>
        When it comes to Ocean Freight, choose Shiparamalogistics  & Security Company as your trusted partner. With our unwavering commitment to excellence, unrivaled reliability, and exceptional customer service, we are dedicated to surpassing your expectations. Discover the unparalleled power of our Ocean Freight solutions and embark on a journey of seamless, efficient, and stress-free shipping.
      </p>

      <p>
        Contact us today to experience the paramount difference in Ocean Freight services. Let us take your cargo across the oceans, so you can focus on what you do best – driving your business forward. Trust Shiparamalogistics  & Security Company, your ultimate courier and logistics partner.
      </p>
    </div>
  </div>
</section>



</div>
        </Oceanic>
    );
}