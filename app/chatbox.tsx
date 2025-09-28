"use client"
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

import {Chatlive} from './styles'



export default function Chatbox() {

    return(
        <Chatlive className="chatwhatsap">
         <Link href='https://wa.me/+17253045857?text=' target="_blank">
         <RiWhatsappFill />
         </Link>
        </Chatlive>
    );
}