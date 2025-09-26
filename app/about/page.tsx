"use client";
import { Aboutus } from "../styles";
import Imag from "next/image";
import Myabout from "next/image";
import Comment from '../comment'
import Deliverynything from '../deliveryanything'

export default function Faq() {
  return (
    <Aboutus>
      <Imag
        src="/image/background.jpg"
        alt="background"
        fill
        priority
        className="background"
      />

      <div className="aboutus">
        <h1>ABOUT US</h1>
      </div>

      <div className="mainabout">
       <div className="myabouthere">
     <div className="imags">
          <Myabout src="/image/about_img01.png" alt="About" width={500} height={200}  priority/>
        </div>

        <div className="about-section">
          <h2>Who We Are? 25 years</h2>
          <h4>25 years of experience in Logistics services</h4>

          <p>
            Welcome to <strong>Shiparamalogistics  & Security Company</strong>,
            a trusted leader in the logistics industry. We specialize in
            providing comprehensive and customized logistics solutions that
            drive efficiency and optimize supply chain operations for our valued
            clients.
          </p>

          <p>
            At <strong>Shiparamalogistics  & Security Company</strong>, we pride
            ourselves on our unwavering commitment to excellence, reliability,
            and customer satisfaction. With years of experience in the industry,
            we have established ourselves as a preferred partner for businesses
            seeking seamless and cost-effective logistics services.
          </p>

          <p>
            Our dedicated team of professionals comprises logistics experts who
            possess in-depth knowledge and expertise in various sectors. We
            understand that each business has unique requirements, which is why
            we take a personalized approach to deliver tailored logistics
            solutions. Whether you need assistance with transportation,
            warehousing, distribution, or customs clearance, we have the
            resources and capabilities to handle it all.
          </p>
        </div>
       </div>
      </div>
      <Comment/>
       <div style={{backgroundColor: 'whitesmoke'}}>
        <Deliverynything />
      </div>
    </Aboutus>
  );
}
