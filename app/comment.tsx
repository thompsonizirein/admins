"use client"
import {useState} from 'react'
import { CiStar } from "react-icons/ci";
import Tony from "next/image";
import {Commets} from './styles'
import Luna from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


export default function Comment() {
  
      const [current, setCurrent] = useState(0);


     const reviewCount = 6; // total reviews
const next = () => setCurrent(prev => (prev === reviewCount - 1 ? 0 : prev + 1));
const prev = () => setCurrent(prev => (prev === 0 ? reviewCount - 1 : prev - 1));


    return(
        <Commets>
       <section className="review">
      {/* Review 1 */}
      <div style={{ display: current === 0 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>shipping Cargo</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>I’ve been using this Cargo delivery for my deliveries, and I’m genuinely impressed...</p>
          <div className="comments">
            <div>
              <Tony src="/image/testi_avatar01.png" alt="Tony" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Tony Alexander</span>
              <span>Business Person</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div style={{ display: current === 1 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>Fast & Reliable</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>This shipping service is amazing! Packages always arrive on time...</p>
          <div className="comments">
            <div>
              <Luna src="/image/testi_avatar02.png" alt="Sarah" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Luna Dexander</span>
              <span>E-commerce</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review 3 */}
      <div style={{ display: current === 2 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>Fast & Reliable</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>Excellent customer service and smooth delivery process....</p>
          <div className="comments">
            <div>
              <Luna src="/image/miketon.png" alt="Sarah" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Michael Tan</span>
              <span>Retail</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review 4 */}
      <div style={{ display: current === 3 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>Fast & Reliable</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>Fast, reliable, and professional. I’m very satisfied!...</p>
          <div className="comments">
            <div>
              <Luna src="/image/sara.jpg" alt="Sarah" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Sara Johnson</span>
              <span>Wholesaler</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review 5 */}
      <div style={{ display: current === 4 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>Fast & Reliable</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>Shipping has never been this easy. Super impressed!...</p>
          <div className="comments">
            <div>
              <Luna src="/image/emma.png" alt="Sarah" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Emma Wilson</span>
              <span>Startup Owner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review 6 */}
      <div style={{ display: current === 5 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>Fast & Reliable</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>Packages arrive safely every time. Truly dependable..</p>
          <div className="comments">
            <div>
              <Luna src="/image/michelle.png" alt="Sarah" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Michelle Glotfelty</span>
              <span>Sales Representative</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigatecomment">
        <span onClick={prev}><FaChevronLeft /></span>
        <span onClick={next}><FaChevronRight /></span>
      </div>
    </section>
    </Commets>
    );
}