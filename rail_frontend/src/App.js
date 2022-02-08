import { useState, useEffect, useCallback } from 'react'
import { BiCalendar, BiLogIn, BiLogOut } from "react-icons/bi"
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { GiRailRoad, GiTicket } from "react-icons/gi";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AppointmentInfo"
import Cookies from 'js-cookie'


function logOut() {
  Cookies.remove('username');
  Cookies.remove('is_admin');
  window.location.reload(false);
}



function App() {

  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);
  let button;
  let add_train;

  if (Cookies.get('username')){
    button = <>
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
          <GiRailRoad className="inline-block text-red-400 align-top" /> Online Rail Reservation 
          {button}
        </h1>
          {add_train}
        <Search query={query}
          onQueryChange={myQuery => setQuery(myQuery)}
          orderBy={orderBy}
          onOrderByChange={mySort => setOrderBy(mySort)}
          sortBy={sortBy}
          onSortByChange={mySort => setSortBy(mySort)}
        />

        <ul className="divide-y divide-gray-200">
          {filteredAppointments
            .map(appointment => (
              <AppointmentInfo key={appointment.id}
                appointment={appointment}
                onDeleteAppointment={
                  appointmentId =>
                    setAppointmentList(appointmentList.filter(appointment =>
                      appointment.id !== appointmentId))
                }
              />
            ))
          }
        </ul>
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
}

export default App;