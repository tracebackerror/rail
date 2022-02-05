import { BiArchive } from "react-icons/bi";
import './App.css';
import Search from './components/Search';
import Card from './components/card';


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
      <BiArchive className="inline-block text-red-400 align-top" />Appointment  </h1>
      <Search/>
      <Card/>
    </div>
  );
}

export default App;
