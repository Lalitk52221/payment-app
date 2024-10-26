import { useContext } from "react";
import { FaCheck, FaRupeeSign } from "react-icons/fa";
import { FormContext } from "../FormContext";
// Utility function to format date
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

const Googlepay = () => {
  const { formData } = useContext(FormContext);
  const { name, amount, date, time, phone } = formData;
  // Format the date and time
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  // Format the amount with commas
  const formattedAmount = Number(amount).toLocaleString();

  //Generate random upi transaction id
  const upitrasactionID = generateUPITransactionID();

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white w-[420px] h-[728px] bg-[#1f1f1f] font-[poppins]">
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
  );
};

export default Googlepay;
