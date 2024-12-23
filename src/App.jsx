import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([])
  return (
    <div className="App">
      <h1 className="text-white text-center mt-5 text-2xl">MAAŞ OTOMASYONU</h1>
     <AddWorker setWorkers = {setWorkers}></AddWorker>
     <WorkerList workers={workers} setWorkers = {setWorkers}></WorkerList>
    </div>
  );
}

export default App;
