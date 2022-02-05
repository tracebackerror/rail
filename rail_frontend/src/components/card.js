import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi"
import { MdDirectionsRailwayFilled } from "react-icons/md"
import { useState } from 'react';
import logo from "../logo.svg";

const Card = () => {
  
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
            
            <MdDirectionsRailwayFilled class="h-12 w-12" src={logo} alt="ChitChat Logo" width="100" height="50"/>
        </div>
        <div>
            <div class="text-xl font-medium text-black">Shatabdi Super Fast Express</div>
            <p class="text-slate-500">Available Seats 20 </p>
            <i></i>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Book Now</button>
        </div>
    </div>
  )
}

export default Card