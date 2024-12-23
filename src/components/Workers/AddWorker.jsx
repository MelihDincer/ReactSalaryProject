import { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();
  const minimumWage = 15000; 

  const addWorkerHandler = (e) => {
    e.preventDefault();
    //Trim tam çalışmıyor. İlk eklerken consola yazdırabiliyorum.
    if(enteredWorkerName.trim().length === 0){
        setError({
          title: "İsim alanı zorunludur!",
          message: "Lütfen bir isim giriniz."
        });
        return;
    }
    if(+enteredWage < minimumWage){
        setError({
          title:"Maaş alanı zorunludur!",
          message:`Lütfen ${minimumWage} değerinden daha büyük bir maaş değeri giriniz.`
        });
        return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor((Math.random() * 1000)),
        name: enteredWorkerName,
        wage: enteredWage
      },
      ...prevState
    ]);
    setEnteredWorkerName("");
  setEnteredWage("");
  }
  
const errorHandler = () => {
    setError(null);
}
  
return (
    <div>
      
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
    {error && <ErrorModal onConfirm={errorHandler} error={error}>
        
        </ErrorModal>}
    </div> 
    
)
}
export default AddWorker