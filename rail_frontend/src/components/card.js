import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi"
import { useState } from 'react';
import logo from "../logo.svg";

const Card = () => {
  
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
            <img class="h-12 w-12" src={logo} alt="ChitChat Logo" width="100" height="50"/>
        </div>
        <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
        </div>
    </div>
  )
}

export default Card