import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { FormContext } from "../FormContext";
import { FaRegListAlt, FaRupeeSign } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import logo from "../../assets/Phonepe/logo.png";
import profile from "../../assets/Phonepe/profile.png";
import security_logo from "../../assets/Phonepe/security.png";
import Bank_logo from "../../assets/Phonepe/SBI-logo.png";
import footer from "../../assets/Phonepe/footer.png";

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
// UPI Transaction id in gpay is T2404040939229004067191 - 22 digit format
const generateUPITransactionID = () => {
  return (
    "T240404" +
    Math.floor(Math.random() * 1e16)
      .toString()
      .padStart(16, "0")
  );
};
const generateBankTransactionID = () => {
  return (
    "58" +
    Math.floor(Math.random() * 1e10)
      .toString()
      .padStart(10, "0")
  );
};
const generateBankAccountNo = () => {
  return (
    "XXXXXX" +
    Math.floor(Math.random() * 1e4)
      .toString()
      .padStart(4, "0")
  );
};
function PhonepeForm() {
  const { formData, setFormData } = useContext(FormContext);
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   navigate("/phonepe-summary");
  // };
  const { name, BankingName, amount, phone, date, time } = formData;
  // Format the amount with commas
  const formattedAmount = Number(amount).toLocaleString();
  // Format the date and time
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);
  const  upitrasactionID = generateUPITransactionID()
  const  BanktrasactionID = generateBankTransactionID()
  const  BankaccountNo = generateBankAccountNo()

  return (
    <div className="flex gap-20 justify-center items-center">
      <div className="max-w-2xl mx-auto bg-white rounded p-6 shadow-md h-fit flex flex-col items-center">
        <h2 className="text-2xl mb-7 font-bold text-[#612d9b]">
          <u>Enter Payment Details</u>
        </h2>
        <form
          // onSubmit={handleSubmit}
          className=" flex-wrap gap-3 grid grid-cols-3"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Paid to:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Banking Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.BankingName}
              onChange={(e) =>
                setFormData({ ...formData, BankingName: e.target.value })
              }
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
              htmlFor="date"
              className="block text-gray-700 font-bold mb-2"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 font-bold mb-2"
            >
              Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
          </div>

          {/* <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button> */}
        </form>
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
      </div>

      {/* paytm Screenshot - summary start from here */}

      <div className="w-[550px] h-[700px] bg-[#0e051a] text-white flex flex-col items-center justify-start">
        <header className="flex flex-row justify-start w-full h-auto p-3 bg-[#3f1e65] items-center gap-4">
          <img
            src={logo}
            width={65}
            height={65}
            alt="Logo"
            className="rounded-full "
          />
          <div className="flex flex-col items-start  ">
            <h1 className="text-xl ">Transaction Successfull</h1>
            <p className="text-sm text-white -mt-1">
              {formattedTime} on {formattedDate}
            </p>
          </div>
        </header>

        {/* Hero section */}

        <div className="w-[93%] h-[515px] rounded-2xl py-3 px-5 bg-[#21182b] mt-4 gap-6 flex flex-col">
          <h1 className="text-lg">Paid to</h1>
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-row justify-center items-start gap-5">
              <img src={profile} width={65} height={65} alt="profile" />
              <div className="flex flex-col ">
                <h1 className="text-xl ">{name}</h1>
                <p className="text-md text-gray-300">{phone}</p>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <h1 className="text-lg">
                <FaRupeeSign />
              </h1>
              <h1 className="font-semibold text-xl">{formattedAmount}</h1>
            </div>
          </div>
          <div className="h-auto py-5 border-t-[1px] border-gray-500 border-b-[1px]">
            <h1 className="gap-4 flex flex-row text-md text-gray-300 items-center">
              <p>Banking Name</p> <span className="ml-12">:</span>{" "}
              <div className="flex items-start">
                <span>{BankingName} </span>

                <img
                  src={security_logo}
                  alt="security logo"
                  className="h-5 w-5"
                />
              </div>
            </h1>
          </div>
          <div className=" flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-5">
              <FaRegListAlt className="text-3xl" />

              <p>Transfer Details</p>
            </div>

            <IoIosArrowUp className="text-2xl" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-md text-gray-300 ">Transaction ID</p>
            <p className="text-xl font-light">{upitrasactionID}</p>
          </div>
          <div className="gap-2 flex flex-col w-full ">
            <p className="text-md text-gray-300">Debited from</p>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-row items-center gap-7">
                <img src={Bank_logo} alt="Bank logo" width={55} height={55} />
                <h1 className="text-2xl">{BankaccountNo}</h1>
              </div>
              <div className="flex flex-row items-center">
                <h1 className="text-lg">
                  <FaRupeeSign />
                </h1>
                <h1 className="font-normal text-xl">{formattedAmount}</h1>
              </div>
            </div>
            <h1 className="ml-20 -mt-2 text-xl text-gray-300">
              UTR: {BanktrasactionID}
            </h1>
          </div>
        </div>
        <div className="h-0.5 w-[80%] border-t-[1px] border-gray-500" />
        <img src={footer} width={200} alt="" className="mt-4" />
      </div>
    </div>
  );
}

export default PhonepeForm;
