import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";
import React from "react";

function App() {
  const [workers, setWorkers] = useState([])
  return (
    <React.Fragment>
      <h1 className="text-white text-center mt-5 text-2xl">MAAŞ OTOMASYONU</h1>
     <AddWorker setWorkers = {setWorkers}></AddWorker>
     <WorkerList workers={workers} setWorkers = {setWorkers}></WorkerList>
     </React.Fragment>
  );
}

export default App;
