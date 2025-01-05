import React, { useState, useEffect } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState(localStorage.getItem("workers") ? JSON.parse(localStorage.getItem("workers")) : [])

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers])

  return (
    <React.Fragment>
      <h1 className="text-white text-center mt-5 text-2xl">MAAŞ OTOMASYONU</h1>
      <AddWorker setWorkers={setWorkers}></AddWorker>
      <WorkerList workers={workers} setWorkers={setWorkers}></WorkerList>
    </React.Fragment>
  );
}

export default App;
