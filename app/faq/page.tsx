"use client"

import {FAQs} from '../styles'
import Image from 'next/image';
import { useState } from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";





export default function Faq(){


    const [openClose, setOpenClose] = useState(false)
    const [openCloses, setOpenCloses] = useState(false)
    const [openCloe, setOpenCloe] = useState(false)
    const [openClse, setOpenClse] = useState(false)
    const [openlose, setOpenlose] = useState(false)
    const [openCose, setOpenCose] = useState(false)

    const openclose = () => {
    setOpenClose(prev => !prev)
    }
    const opencloses = () => {
    setOpenCloses(prev => !prev)
    }
    const opencloe = () => {
    setOpenCloe(prev => !prev)
    }
    const openclosew = () => {
    setOpenClse(prev => !prev)
    }
    const openclosep = () => {
    setOpenlose(prev => !prev)
    }
    const openclosed = () => {
    setOpenCose(prev => !prev)
    }

    return(
        <FAQs> 
        <Image src="/image/background.jpg" alt="background" fill className='imgas' priority/>

        <div className='faq'>
            <h1>FAQ</h1>
        </div>
        


         <div style={{backgroundColor: 'lightgray', borderBottom: '1px solid white'}}>

        <div className="skquestion">
            <h1>frequently asked questions</h1>

            <div className='themain'>
             
             <div className='pttes'>
                <p>Questions & Answers</p>
             </div>

             <div className='peopelask'>
                <div className='askquestions' onClick={openclose}>
                    <span>What services does Shiparamalogistics  & Security Company provide?</span>
                    <span style={{fontSize: '30px'}}>
                        {openClose ? <GrFormClose />:<MdAddCircleOutline />}
                        </span>
                </div>
                {openClose && (
                <div><p>Shiparamalogistics  & Security Company offers a wide range of logistics services, including international and domestic shipping, freight forwarding, warehousing, customs clearance, supply chain management, and express delivery.</p></div>
                )}
             </div>

             
             <div className='peopelask'>
                <div className='askquestions' onClick={opencloses}>
                    <span>How can I track my shipment?</span>
                    <span style={{fontSize: '30px'}}>
                        {openCloses ? <GrFormClose />:<MdAddCircleOutline />}
                        </span>
                </div>
                {openCloses && (
                <div><p>To track your shipment, you can visit our website and enter your tracking number in the designated tracking tool. Alternatively, you can contact our customer service team with your shipment details, and they will assist you in tracking your package.</p></div>
                )}
             </div>

             <div className='peopelask'>
                <div className='askquestions' onClick={opencloe}>
                    <span>What are the shipping rates?</span>
                    <span style={{fontSize: '30px'}}>
                        {openCloe ? <GrFormClose />:<MdAddCircleOutline />}
                        </span>
                </div>
                {openCloe && (
                <div><p>Shipping rates vary depending on several factors such as the weight, dimensions, destination, and shipping service chosen. To obtain accurate shipping rates for your specific requirements, please reach out to our customer service team, who will provide you with a customized quote.</p></div>
                )}
             </div>

             <div className='peopelask'>
                <div className='askquestions' onClick={openclosew}>
                    <span>How long does it take for a package to be delivered?</span>
                    <span style={{fontSize: '30px'}}>
                        {openClse ? <GrFormClose />:<MdAddCircleOutline />}
                        </span>
                </div>
                {openClse && (
                <div><p>Delivery times depend on the shipping service selected and the destination. We offer various shipping options, including express delivery for urgent shipments and standard delivery for regular shipments. Once you provide us with the necessary details, we can provide you with an estimated delivery timeframe.</p></div>
                )}
             </div>


             <div className='peopelask'>
                <div className='askquestions' onClick={openclosep}>
                    <span>Do you offer International shipping?</span>
                    <span style={{fontSize: '30px'}}>
                        {openlose ? <GrFormClose />:<MdAddCircleOutline />}
                        </span>
                </div>
                {openlose && (
                <div><p>Yes, we provide international shipping services to destinations worldwide. Whether you need to send a package overseas or import goods, we can handle the logistics process and ensure smooth delivery across borders.</p></div>
                )}
             </div>


             <div className='peopelask'>
                <div className='askquestions' onClick={openclosed}>
                    <span>What is the process for customs clearance?</span>
                    <span style={{fontSize: '30px'}}>
                        {openCose ? <GrFormClose />:<MdAddCircleOutline />}
                        </span>
                </div>
                {openCose && (
                <div><p>Shiparamalogistics  & Security Company has extensive experience in customs clearance procedures. Our team will guide you through the necessary documentation and requirements for smooth customs clearance. We handle the necessary paperwork and ensure compliance with customs regulations to minimize delays.</p></div>
                )}
             </div>

            </div>
        </div>

        </div>
        </FAQs>
    );
}