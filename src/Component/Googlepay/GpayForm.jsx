import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import { FaCheck, FaRupeeSign } from "react-icons/fa";

const formatDate = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", options);
};

// Utility function to format time
const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(hours, minutes);
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString("en-IN", options);
};
// Utility function to generate random UPI transaction ID
// UPI Transaction id in gpay is 414512238806 - 12 digit format
const generateUPITransactionID = () => {
  return (
    "49" +
    Math.floor(Math.random() * 1e10)
      .toString()
      .padStart(10, "0")
  );
};

function GpayForm() {
  const { formData, setFormData } = useContext(FormContext);
  // const [showSummary, setShowSummary] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // navigate("/googlepay-summary");
    // setShowSummary(true)

  };
  const { name, amount, date, time, phone } = formData;
  // Format the date and time
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  // Format the amount with commas
  const formattedAmount = Number(amount).toLocaleString();

  //Generate random upi transaction id
  const upitrasactionID = generateUPITransactionID();
  return (
    <div className="flex flex-row gap-10 justify-center items-center">
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
      <h2 className="text-2xl mb-4">Enter Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-bold mb-2"
          >
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
             Phone Number:
          </label>
          <input
            type="tel"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
</div>
      {/* Screen shot appear here */}

      <div className={`flex flex-col justify-center items-center gap-5 text-white w-[420px] h-[728px] bg-[#1f1f1f] font-[poppins]`}>
      <div className="w-28 h-28 bg-blue-600 rounded-full flex justify-center items-center text-5xl mb-24">
        <FaCheck />
      </div>
      <div className="flex flex-row justify-center items-center text-3xl font-normal">
        <FaRupeeSign className="text-2xl" /> <span>{formattedAmount}</span>
      </div>
      <div className="flex flex-col ">
        <div className="text-2xl font-light flex gap-2">
          Paid to
          <span> {name}</span>
        </div>
        <p className="text-sm self-center text-gray-300">{phone}@okhdfcbank</p>
      </div>
      <div className="text-lg font-light flex justify-center items-center flex-col mt-16">
        <h3>
          {formattedDate}, {formattedTime}
        </h3>

        <p className="text-gray-300 text-sm self-center">
          UPI Transaction ID: {upitrasactionID}
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default GpayForm;
