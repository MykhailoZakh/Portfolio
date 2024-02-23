import {useState} from "react";
import "./contact.css";

// function to print contact me form
export default function Contact() {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [text, setText] = useState(false);
  // function to check name has more than 3 letters
  const checkName = (e) => {
    e.preventDefault();
    if (e.target.value.length < 4) {
      setName(true);
    } else {
      setName(false);
    }
  };
  // function to check if email is correct
  const checkEmail = (e) => {
    e.preventDefault();

    const emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value);
    console.log(emailCheck);
    if (!emailCheck) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };
  // function to check if user add any text
  const checkText = (e) => {
    e.preventDefault();
    !e.target.value ? setText(true) : setText(false);
  };
  return (
    <article className="container my-24 mx-auto md:px-6 ">
      <form className="mb-32 text-center">
        <div className="">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h3 className=" mb-12 text-3xl font-bold">
              <strong>
                Contact <span className="me">Me</span>
              </strong>
            </h3>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              id="form-name"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="yourname"
              onBlur={checkName}
            />
            <label className="label pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary">
              Your name
            </label>
            {name ? (
              <p className="errMsg">Name should have more then 3 letters</p>
            ) : (
              <></>
            )}
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              id="form-email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="email"
              onBlur={checkEmail}
            />
            <label className="label pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary">
              Your email
            </label>
            {email ? <p className="errMsg">Please add valid Email</p> : <></>}
          </div>

          <div className="relative mb-6">
            <textarea
              type="text"
              id="message"
              name="message"
              rows="2"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="massage"
              onBlur={checkText}
            ></textarea>
            <label className="label pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary">
              Your message
            </label>
            {text ? <p className="errMsg">Please add some text</p> : <></>}
          </div>

          <div className="">
            <div className="">
              <button type="button" className="project-btn">
                Send message
              </button>
            </div>
          </div>
        </div>
      </form>
    </article>
  );
}
