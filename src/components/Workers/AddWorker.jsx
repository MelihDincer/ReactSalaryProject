import { useState, Fragment, useRef} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();
  const minimumWage = 15000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value;
    //Trim tam çalışmıyor. İlk eklerken consola yazdırabiliyorum.
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "İsim alanı zorunludur!",
        message: "Lütfen bir isim giriniz.",
      });
      return;
    }
    if (+wageInputRef.current.value < minimumWage) {
      setError({
        title: "Maaş alanı zorunludur!",
        message: `Lütfen ${minimumWage} değerinden daha büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    nameInputRef.current.value = "";
    wageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal setWorkers={props.setWorkers} onConfirm={errorHandler} error={error}></ErrorModal>
      )}
      <Card className="mt-7">
        <form
          action=""
          className="flex flex-col gap-y-2"
          onSubmit={addWorkerHandler}
        >
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto"
            placeholder="Çalışan ismini giriniz"
            id="name"
            ref={nameInputRef}
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktari
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto"
            placeholder="Maaş miktarı yazınız"
            id="wage"
            ref={wageInputRef}
          />
          <Button className="mt-2 bg-yellow-600" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
      
    </Fragment>
  );
};
export default AddWorker;
