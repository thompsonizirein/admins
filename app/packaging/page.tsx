"use client"
import Link from "next/link"
import Image from "next/image"
import {Packings} from '../styles'


export default function Packaging() {

    return(
        <Packings>
        <div className="Packaging">

            <div  className="tops">
                <div className="left">
                    
                    <div>
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
                    <Image src="/image/service-4.jpg" alt="Image" height={200} width={660} priority />
                     <div>
                        
                     </div>
                </div>
            </div>


 <section className="packaging-storage">
  <div className="container">
    <h2>Packaging & Storage Solutions</h2>
    <p>
      At Shiparamalogistics  & Security Company, we recognize that effective packaging 
      and storage are integral components of the logistics process. As a leading logistics company, 
      we go above and beyond in providing comprehensive packaging and storage solutions to streamline 
      your supply chain operations. With our expertise and commitment to excellence, we ensure that 
      your goods are stored securely and packaged optimally for efficient transportation.
    </p>


    <div className="packaging">
      
      <h4 style={{marginTop: '1rem'}}>Customized Packaging</h4>
      <p>
        Every product has unique packaging requirements. Our experienced team works closely 
        with you to design tailored packaging solutions that provide optimal protection 
        and minimize the risk of damage during transit. From fragile items to hazardous 
        materials, we employ industry best practices to ensure safe handling and transportation.
      </p>

      <h4>Quality Materials</h4>
      <p>
        We utilize high-quality packaging materials that meet international standards to 
        safeguard your products throughout their journey. Whether its sturdy corrugated 
        boxes, cushioning materials, or specialized packaging for sensitive items, we 
        source and use the best materials to ensure the safety of your cargo.
      </p>

      <h4>Efficiency & Cost-effectiveness</h4>
      <p>
        Our packaging solutions maximize space utilization and minimize waste, reducing 
        costs without compromising quality. Optimized dimensions and weights also help 
        cut transportation expenses.
      </p>

      <h4>Compliance & Regulations</h4>
      <p>
        We stay updated with the latest packaging regulations across industries and regions. 
        Our team ensures your packaging adheres to all requirements, including labeling, 
        handling instructions, and documentation — enabling smooth customs clearance 
        and reducing delays.
      </p>
    </div>

    <div className="storage">
      

      <h4>Secure Warehousing</h4>
      <p>
        We offer state-of-the-art warehousing facilities with advanced security systems 
        to ensure safety and integrity. Strategically located warehouses allow for efficient 
        distribution and reduced transit times, backed by surveillance, access controls, 
        and fire prevention systems.
      </p>

      <h4>Inventory Management</h4>
      <p>
        Our advanced systems provide real-time tracking and monitoring of your inventory. 
        With robust processes for receiving, storing, and tracking goods, you gain 
        complete visibility and control, helping optimize stock levels, reduce costs, 
        and improve supply chain efficiency.
      </p>

      <h4>Value-added Services</h4>
      <p>
        In addition to secure storage, we provide services such as order fulfillment, 
        kitting and assembly, repackaging, labeling, and customized reporting. These 
        flexible solutions integrate seamlessly with your supply chain.
      </p>

      <h4>Climate-controlled Storage</h4>
      <p>
        For temperature-sensitive goods, we provide climate-controlled storage, 
        including cold storage, humidity control, and specific temperature ranges 
        to meet your specialized requirements.
      </p>
    </div>
  </div>
</section>


</div>
</Packings>
    )
}