"use client"
import { IoLocation, IoPersonSharp} from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { FaBox } from "react-icons/fa";
import {Deloveryeverything} from './styles'




export default function Deliverynything() {

    return(
        <Deloveryeverything >

                <div className="DeliverAnything">
                   <div className="DeliverAny" data-aos="zoom-out">
                    <p>Deliver Anything</p>
                  <h1>Our Service</h1>
            
                   </div>
                  <div className="freightmain" data-aos="fade-up">
            
                    <div className="freight">
                      <span className="icons"><FaBox /></span>
                      <div>
                        <p>Road Freight</p>
                        <span>When it comes to transporting goods, road freight is a versatile and cost-effective solution that offers flexibility and convenience.</span>
                      </div>
                    </div>
            
                    <div className="freight">
                      <span className="icons"><IoLocation /></span>
                      <div>
                        <p>Air Freight</p>
                        <span>Global Air Freight Network: With an extensive global network of airline partners and agents, we have the capability to handle air freight shipments to and from virtually any destination worldwide.</span>
                      </div>
                    </div>
            
                    <div className="freight">
                      <span className="icons"><SlLike /></span>
                      <div>
                        <p>Ocean Freight</p>
                        <span>When it comes to transporting large quantities of goods across long distances, ocean freight is a trusted and cost-effective solution. At Shiparamalogistics  & Security Company., we specialize in providing reliable.</span>
                      </div>
                    </div>
            
                    <div className="freight">
                      <span className="icons"><IoPersonSharp /></span>
                      <div>
                        <p>Packaging & Storage</p>
                        <span>When it comes to transporting large quantities of goods across long distances, ocean freight is a trusted and cost-effective solution. At Shiparamalogistics  & Security Company., we specialize in providing reliable</span>
                      </div>
                    </div>
                  </div>
            
                </div>
            

        </Deloveryeverything>
    )
}