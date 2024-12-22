import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"

const AddWorker = () => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const minimumWage = 15000; 
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if(enteredWorkerName.trim().length === 0 || enteredWage.trim().length === 0){
        return;
    }
    if(+enteredWage < minimumWage){
        return;
    }
    setEnteredWorkerName("");
    setEnteredWage("");
    console.log(enteredWorkerName, enteredWage);
  }

return (
    <Card className="mt-7">
    <form action="" className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">Çalışan İsmi</label>
        <input type="text" className="max-w-[40rem] w-full mx-auto" placeholder="Çalışan ismini giriniz" id="name" 
        onChange={(e) => setEnteredWorkerName(e.target.value)}/>
        <label htmlFor="wage" className="font-medium">Maaş Miktari</label>
        <input type="number" className="max-w-[40rem] w-full mx-auto" placeholder="Maaş miktarı yazınız" id="wage" 
        onChange={(e) => setEnteredWage(e.target.value)}/>
        <Button className="mt-2 bg-yellow-600" type="submit">Ekle</Button>
    </form>
    </Card>  
    
)
}
export default AddWorker