"use client"
import B from "next/image";
import Brna from "next/image";
import Brn from "next/image";
import Brnad from "next/image";
import Br from "next/image";
import {Fedes} from './styles'


export default function Fedex(){
    return(
        <Fedes>
      <div className="mainotthercourir" data-aos="flip-left">
              <div className="otthercourir">
        <div>
         <B src="/image/brnad_logo01.png" alt="DHL" width={80} height={50} className="imge"  priority />
        </div>
        <div>
         <Brna src="/image/brnad_logo02.png" alt="DHL" width={80} height={50} className="imge" priority />
        </div>
        <div>
         <Brn src="/image/brnad_logo03.png" alt="DHL" width={80} height={50} className="imge" priority />
        </div>
        <div>
         <Brnad src="/image/brnad_logo04.png" alt="DHL" width={80} height={50} className="imge" priority />
        </div>
        <div>
         <Br src="/image/brnad_logo05.png" alt="DHL" width={80} height={50} className="imge" priority />
        </div>

      </div>
      </div>
      </Fedes>
    )
}