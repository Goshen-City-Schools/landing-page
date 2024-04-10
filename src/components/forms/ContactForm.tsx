import { useState, type FormEvent } from "react";
import "./ContactForm.style.css";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row w-full gap-4">
        {/* <!-- Firstname --> */}
        <div className="formControl">
          <label htmlFor="fName">First Name</label>

          <input className="border" id="fName" name="fName" type="text" />
        </div>

        {/* <!-- Last name --> */}
        <div className="formControl">
          <label htmlFor="lName">Last Name</label>

          <input className="border" id="lName" name="lName" type="text" />
        </div>
      </div>

      {/* <!-- Email --> */}
      <div className="formControl">
        <label htmlFor="email">Enter email</label>
        <input className="border" id="email" name="email" type="email" />
      </div>

      {/* <!-- Phone Number --> */}
      <div className="formControl">
        <label htmlFor="phoneNumber">Phone number</label>

        <input
          className="border"
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
        />
      </div>

      {/* <!-- Purpose --> */}
      <div className="formControl">
        <label htmlFor="phoneNumber">Purpose</label>

        <select className="border" id="purposeCategory" name="purposeCategory">
          <option value="">-- Select Purpose --</option>
          <option value="">Admission Enquiry</option>
        </select>
      </div>

      {/* <!-- Message --> */}
      <div className="formControl">
        <label htmlFor="phoneNumber">Message</label>

        <textarea
          className="border"
          placeholder="Optional..."
          id="message"
          name="message"
          rows={6}
        />
      </div>

      {/* <!-- Submit form --> */}

      <button
        type="submit"
        className={`flex mx-auto gap-4 font-bold justify-center items-center ${"bg-blue-950 hover:border-blue-950 hover:bg-blue-50"} w-max rounded-[48px] transition duration-200 border-2 border-transparent px-6 py-3 text-white   hover:text-gray-700 `}
      >
        Send
      </button>

      {/* <Button
        onClick="handleSubmit()"
        type="submit"
        text="Send"
        color="blue"
        iconName="send"
        classes="mx-auto mt-6"
      /> */}

      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
