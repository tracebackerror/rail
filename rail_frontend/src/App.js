import { MdOutlineDirectionsRailway } from "react-icons/md";
import './App.css';
import Search from './components/Search';
import Card from './components/card';


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
      <MdOutlineDirectionsRailway className="inline-block text-red-400 align-top" />Railway Booking  </h1>
      <Search/>
      <br/>
      <Card/>
    </div>
  );
}

export default App;
