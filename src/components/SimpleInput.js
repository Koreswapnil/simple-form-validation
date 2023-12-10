import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [name, setName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = name.trim() !== "";
  const nameInputIsvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameInputBlurHandler = () =>{
    setEnteredNameTouched(true);
  }

  const formSubmission = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if(!enteredNameIsValid){
      return;
    }
    setEnteredNameTouched(false);
    console.log(name);
    setName("");
  };

  const nameInputClasses = !nameInputIsvalid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={name}
        />
        {nameInputIsvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
