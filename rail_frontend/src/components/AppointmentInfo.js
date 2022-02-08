import { BiTrash } from "react-icons/bi"
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";




const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {

    let delete_button;
    let book_now;
    if (Cookies.get('username')){
      if (Cookies.get('is_admin')){
        delete_button = <button onClick={() => onDeleteAppointment(appointment.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>;

      }

      book_now = <Link to="/bookNow"><button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Book Now</button></Link>;
        
    
    }else{
        delete_button = '';
    };

  return (
    <li className="px-3 py-3 flex items-start">
      {delete_button}
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
          <span className="flex-grow text-right">{appointment.aptDate}</span>
        </div>
        <div><b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}</div>
        <div className="leading-tight">{appointment.aptNotes}</div>
        {book_now}
      </div>
    </li>
  )
}

export default AppointmentInfo