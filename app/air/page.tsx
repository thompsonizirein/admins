"use client"
import {Fligtht} from '../styles'
import Link from 'next/link'
import Airimage from 'next/image'
import Airman from 'next/image'

export default function Air() {
   
    
    return(
        <Fligtht>

        <Airimage src="/image/oceans.jpg" alt="Ocean"  fill  className="images" />
          
         <div className="manin">
            <button className="oceanbutton">Air Freight</button>
            <h1>Air Freight</h1>
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
                    <Airman src="/image/airplane-runway-vertical.jpg" alt="Image" height={200} width={620} priority />
                </div>
            </div>

<section className="packaging-storage">
  <div className="container">
    <h2>Introducing Air Freight Solutions</h2>
    <p style={{marginBlock: '1rem'}}>
      At Shiparamalogistics  & Security Company, we understand the importance of efficient and reliable air freight services in today global marketplace. As a leading logistics company, we specialize in providing top-notch air freight solutions tailored to meet your specific needs. With our expertise and extensive network, we ensure that your cargo reaches its destination safely, on time, and with utmost care.
    </p>

    <div className="packaging">
      <h4 style={{marginTop: '1rem'}}>Extensive Global Network</h4>
      <p>
        With our vast network of airline partners and agents worldwide, we can offer seamless air freight services to and from any destination across the globe. Whether you require express shipping or consolidated shipments, our network ensures smooth operations and timely deliveries.
      </p>

      <h4>Customized Solutions</h4>
      <p>
        We understand that each customer has unique requirements. That is why we offer personalized air freight solutions tailored to your specific needs. From small packages to oversized cargo, our experienced team will work closely with you to design the most efficient and cost-effective shipping plan.
      </p>

      <h4>Reliable and Secure Transportation</h4>
      <p>
        When it comes to air freight, security and reliability are paramount. At Shiparamalogistics  & Security Company, we prioritize the safety of your goods throughout the entire transportation process. We adhere to strict security measures and partner with reputable airlines to ensure your cargo is handled with care and arrives at its destination intact.
      </p>

      <h4>Time-Sensitive Deliveries</h4>
      <p>
        We recognize that time is often a critical factor in your supply chain. Our air freight services are designed to meet the demands of time-sensitive shipments. By leveraging our expertise in logistics management, we optimize routes and streamline processes to expedite deliveries without compromising quality.
      </p>
    </div>

    <div className="storage">
      <h4>End-to-End Tracking and Support</h4>
      <p>
        With our advanced tracking systems, you can monitor your shipments progress in real-time. We provide regular updates and proactive communication to keep you informed at every stage of the transportation process. Additionally, our dedicated customer support team is available to address any queries or concerns promptly.
      </p>

      <h4>Cost-Effective Solutions</h4>
      <p>
        As your trusted logistics partner, we strive to provide cost-effective air freight solutions without compromising service quality. Our industry expertise and strong relationships with airlines allow us to negotiate competitive rates, ensuring value for your investment.
      </p>

      <h4>Sustainable Practices</h4>
      <p>
        Shiparamalogistics  & Security Company is committed to sustainability and minimizing our environmental impact. We actively promote eco-friendly practices within our operations and offer greener transportation options to customers who prioritize sustainable shipping solutions.
      </p>

      <h4>Experience the Shiparamalogistics  & Security Company Difference</h4>
      <p>
        When it comes to air freight, Shiparamalogistics  & Security Company stands out as a reliable and trusted partner. With our commitment to excellence, extensive network, and customer-centric approach, we deliver air freight solutions that exceed expectations. Whether you have urgent shipments or complex logistics requirements, we are ready to provide you with seamless, efficient, and secure air freight services.
      </p>

      <p>
        Contact us today to experience the Shiparamalogistics  & Security Company difference in air freight transportation.
      </p>
    </div>
  </div>
</section>



</div>

        </Fligtht>
    )
}