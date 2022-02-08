import { useState, useEffect, useCallback } from 'react'
import { BiCalendar, BiLogIn, BiLogOut, BiHomeCircle, BiTrash } from "react-icons/bi"
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { GiRailRoad, GiTicket } from "react-icons/gi";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddAppointment from "./AddAppointment"
import Cookies from 'js-cookie'


function logOut() {
    Cookies.remove('username');
    Cookies.remove('is_admin');
    window.location.reload(false);
  }
  

const ManageBookings = () => {
    let [appointmentList, setAppointmentList] = useState([]);

    let button;
    let add_train;

    if (Cookies.get('username')){
        button = <>
        <Link to="/">
            <button  class="inline-block text-red-400 align-top text-right"><BiHomeCircle className="inline-block text-red-400 align-top text-right"/></button>
        </Link>
        <Link to="/managemybooking">
            <button  class="inline-block text-red-400 align-top text-right"><GiTicket className="inline-block text-red-400 align-top text-right"/></button>
        </Link>
        <button onClick={logOut} class="inline-block text-red-400 align-top text-right"><BiLogOut className="inline-block text-red-400 align-top text-right"/></button>
        </>
        if(Cookies.get('is_admin')){
        add_train =  <AddAppointment
        onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
        lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
        />

        }
    }else{
        button = <Link to="/logIn"><button  class="inline-block text-red-400 align-top text-right"><BiLogIn className="inline-block text-red-400 align-top text-right"/></button></Link>;
    };
    
  return (
    <div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl mb-3">
          <GiRailRoad className="inline-block    text-red-400 align-top" /> Online Rail Reservation 
          {button}
        </h1>
        <h3 className="text-4xl mb-3">
          <GiTicket className="inline-block text-black-400 align-top" /> Manage All Bookings
          
        </h3>

      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden ">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Train Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Price
                    </th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-1" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Imac 27"
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      AC
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $1999
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <BiTrash class="inline-block"/>
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-2"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-2" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    General
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $2999
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <BiTrash class="inline-block"/>
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-3"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-3" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      iPhone 13 Pro
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    AC
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $999
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <BiTrash class="inline-block"/>
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-4"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-4" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Magic Mouse 2
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    AC
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $99
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <BiTrash class="inline-block"/>
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-5"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-5" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Watch Series 7
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    AC
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $599
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <BiTrash class="inline-block"/>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    <br/>
      <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          
          <Link to="/contactUS">Contact US</Link> |{" "}
          <>is_admin {Cookies.get('is_admin') ? <BsToggleOn className="inline-block"/>: <BsToggleOff className="inline-block"/>}</>
        </nav>
    </div>
  );
};

export default ManageBookings;
