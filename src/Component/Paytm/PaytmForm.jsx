import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import { FaRupeeSign } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import varified from "../../assets/varified.png";
import { BiMessageMinus } from "react-icons/bi";
import bank from '../../assets/Bank.jpg'


// Utility function to format date
const formatDate = (dateString) => {
  const options = {day: 'numeric', month: 'long', year: 'numeric'  };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', options);
};

// Utility function to format time
const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(hours, minutes);
  const options = { hour: '2-digit', minute: '2-digit' };
  return date.toLocaleTimeString('en-IN', options);
};
// Utility function to generate random UPI transaction ID 
// UPI Transaction id in gpay is 414512238806 - 12 digit format
const generateUPITransactionID = () => {
  return '49'+Math.floor(Math.random() * 1e10).toString().padStart(10, '0');
};
function PaytmForm() {
  const { formData, setFormData } = useContext(FormContext);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // navigate("/paytm-summary");
  };
  const {name,phone, amount, date, time, amtinRs, payname} = formData;
    // Format the amount with commas
    const formattedAmount = Number(amount).toLocaleString();
      //Generate random upi transaction id
  const upitrasactionID = generateUPITransactionID();

    // Format the date and time
const formattedDate = formatDate(date);
const formattedTime = formatTime(time);
  return (
    <div className="flex flex-row gap-20 justify-center items-center">
    <div className={`max-w-3xl flex flex-col items-center mx-auto bg-white h-fit rounded p-6 shadow-md`}>
      <h2 className="text-2xl mb-6 font-bold text-blue-500"><u>Enter Payment Details</u></h2>
      
      <form onSubmit={handleSubmit} className=" w-full ">
        <div className="flex flex-row gap-4 flex-wrap w-full grid-cols-3">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
             Receiver Name:
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
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
             Payer Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.payname}
            onChange={(e) => setFormData({ ...formData, payname: e.target.value })}
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
          <label
            htmlFor="amount"
            className="block text-gray-700 font-bold mb-2"
          >
            Amount in Rupees:
          </label>
          <input
            type="text"
            id="amountText"
            name="amountText"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.amtinRs}
            onChange={(e) =>
              setFormData({ ...formData,  amtinRs: e.target.value })
            }
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
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <p className="text-sm text-red-600 text-center">
            Press <span className="font-bold">window + shift + s </span> for
            Screenshot <br /> Select phonepe transaction details and save it in
            your computer.
          </p>
          <p className="text-md text-gray-800 font-semibold mt-4">
            <i>Thanks to visit our website</i>{" "}
          </p>
          <p className="text-sm text-red-600 mt-2">
            <u>Made by Lalit kumar</u>{" "}
          </p>
        </div>
        
      </form>
      </div>

      {/* paytm Screenshot - summary start from here */}

      <div className={`w-[350px] bg-[#fafafa] justify-start h-[680px] p-5 gap-5 items-center flex flex-col text-[rgb(14, 14, 14)] }`}>
      <img src={logo} alt="Paytm-Logo" width={95} className="my-5" />
      <div className="bg-[#def6ff] overflow-hidden h-[265px] pb-10 rounded-3xl w-full p-5 flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl font-semibold">Money sent Successfully</h1>
        <div className="flex flex-row text-3xl justify-center items-center font-bold ">
          <FaRupeeSign className="text-2xl" /> <span>{formattedAmount}</span>{" "}
          <img src={varified} width={45} alt="" />
        </div>
        <p className="text-center text-[13px] text-gray-500 font-semibold">
          {" "}
          Rupees {amtinRs} Only
        </p>
        <div className="flex flex-row justify-center items-center gap-2 mb-3">
          <BiMessageMinus className="text-2xl" />{" "}
          <span className="text-lg"> message</span>
        </div>
        <div className="-mb-14 gap-0">
          <hr className="bottom-line h-2 w-[350px] bg-blue-400 font-bold" />
          <hr className="bottom-line h-2 w-[350px] bg-blue-950 font-bold" />
        </div>
      </div>

      {/* Second section */}
      <hr className="bottom-line border-t-[3px] h-2 w-full bg-slate-300 rounded-full" />
      <div className="flex flex-col px-4 py-5 bg-white h-[330px] w-[280px] justify-start items-start gap-7 -mt-6">
        <div className=" flex flex-row w-full justify-between">
          <div>
            <h1 className="text-lg text-black font-bold">
              {" "}
              To: <span> {name} </span>{" "}
            </h1>
            <p className="text-[13px]">UPI ID: {phone}974@paytm</p>
          </div>
          <div className="bg-blue-500 rounded-full w-11 h-11 justify-center items-center flex text-white text-xl font-semibold">
            P
          </div>
        </div>
        <hr className="bottom-line border-dashed border-[1.5px] w-full"></hr>

        <div className=" flex flex-row w-full justify-between">
          <div>
            <h1 className="text-lg text-black font-bold">
              {" "}
              From: <span> {payname} </span>{" "}
            </h1>
            <p className="text-[13px]">Punjab National Bank - 9043</p>
          </div>
          <div className="bg-blue-500 rounded-full w-11 h-11 justify-center items-center flex text-white text-xl font-semibold">
            8
          </div>
        </div>
        <div>
            <h1 className="text-[16px] font-semibold">UPI Ref No: {upitrasactionID}</h1>
            <p className="text-[14px] font-semibold text-gray-400">{formattedTime}, {formattedDate} </p>
        </div>
      </div>
      <img src={bank} alt=""  className="-mt-12 w-full h-14"/>
    </div>

    
    </div>
  );
}

export default PaytmForm;
