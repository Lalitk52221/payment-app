import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaCheck, FaRupeeSign } from "react-icons/fa";
import { FormContext } from "./FormContext";
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

const Uber = () => {
  const { formData, setFormData } = useContext(FormContext);


  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className='flex flex-col w-[90%] h-auto  '>
      <div className="max-w-full w-full  bg-white rounded p-6 shadow-md">
      <h2 className="text-2xl mb-4">Enter Payment Details</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-x-3 flex-wrap">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Customer/Your Name:
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
             Driver Name:
          </label>
          <input
            type="text"
            id="Dname"
            name="Dname"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.payname}
            onChange={(e) => setFormData({ ...formData, payname: e.target.value })}
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
            Pickup Time:
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
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Pickup Location:
          </label>
          <input
            type="text"
            id="time"
            name="time"
            placeholder="Paste the location "
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.pickuplocation}
            onChange={(e) => setFormData({ ...formData, pickuplocation: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Drop Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.droptime}
            onChange={(e) => setFormData({ ...formData, droptime: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Drop Location:
          </label>
          <input
            type="text"
            id="time"
            name="time"
            placeholder="Paste the location "
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.droplocation}
            onChange={(e) => setFormData({ ...formData, droplocation: e.target.value })}
          />
        </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d28091.632985930508!2d77.0679584!3d28.345117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1717483611288!5m2!1sen!2sin" width={90} height={90} style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
      </form>
</div>
            <div className="h-auto w-full bg-white">
            <h1> Uber</h1>

            </div>
    </div>
  )
}

export default Uber
