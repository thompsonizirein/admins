"use client"
import {Fligtht} from '../styles'
import Link from 'next/link'
import Airimage from 'next/image'
import Airman from 'next/image'

export default function Cargo() {
   
    
    return(
        <Fligtht>

        <Airimage src="/image/oceans.jpg" alt="Ocean"  fill  className="images" />
          
         <div className="manin">
            <button className="oceanbutton">Cargor Transportation</button>
            <h1>Cargor Transportation</h1>
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
                    <Airman src="/image/fleet-8.jpg" alt="Image" height={200} width={620} priority />
                </div>
            </div>

<section className="packaging-storage">
  <div className="container">
    <h2>Introducing Road Freight Solutions</h2>
    <p style={{marginBlock: '1rem'}}>
      Shiparamalogistics  & Security Company offers comprehensive road freight solutions to meet the diverse transportation needs of businesses and individuals. As a trusted logistics partner, we understand the significance of road transportation in connecting regions, facilitating trade, and ensuring timely deliveries. With our extensive network, experienced team, and commitment to excellence, we provide reliable and cost-effective road freight services tailored to our clients specific requirements.
    </p>

    <div className="packaging">
      <h4 style={{marginTop: '1rem'}}>Discover the Power of Cargo Transportation</h4>
      <p>
        Experience a seamless shipping experience like no other with our road freight solutions. Whether you are transporting large shipments, oversized cargo, or require cost-effective transportation options, our services are designed to meet your unique needs.
      </p>

      <h4>Reliable and Efficient Delivery</h4>
      <p>
        Our team meticulously plans every shipment, ensuring your cargo reaches its destination on time and in excellent condition. Leveraging our network of trusted carriers and advanced route planning, we optimize delivery efficiency and minimize transit times.
      </p>

      <h4>Customized Road Freight Solutions</h4>
      <p>
        We understand that each client has specific requirements. From small parcels to full truckloads, we tailor our road freight services to meet your individual needs, providing flexible solutions that balance cost-effectiveness with reliability.
      </p>

      <h4>End-to-End Tracking and Support</h4>
      <p>
        With our advanced tracking systems, you can monitor your shipment’s progress in real-time. Our dedicated support team ensures proactive communication, keeping you informed throughout the transportation process and addressing any concerns promptly.
      </p>
    </div>

    <div className="storage">
      <h4>Cost-Effective and Sustainable Practices</h4>
      <p>
        We aim to provide road freight solutions that are both cost-efficient and environmentally responsible. By optimizing routes and utilizing eco-friendly practices, we help reduce transportation costs while minimizing the environmental impact of our operations.
      </p>

      <h4>Experience the Shiparamalogistics  & Security Company Difference</h4>
      <p>
        When it comes to road freight, Shiparamalogistics  & Security Company is your reliable partner. With our commitment to excellence, extensive network, and customer-focused approach, we deliver transportation solutions that meet and exceed expectations. Whether your shipment is urgent or complex, we ensure smooth, secure, and timely deliveries.
      </p>

      <p>
        Contact us today to experience the Shiparamalogistics  & Security Company difference in road freight transportation.
      </p>
    </div>
  </div>
</section>



</div>

        </Fligtht>
    )
}