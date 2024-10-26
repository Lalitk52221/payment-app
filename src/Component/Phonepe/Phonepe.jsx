import { FaRegListAlt, FaRupeeSign } from "react-icons/fa";
import logo from "../../assets/Phonepe/logo.png";
import profile from "../../assets/Phonepe/profile.png";
import { IoIosArrowUp } from "react-icons/io";
import security_logo from "../../assets/Phonepe/security.png";
import Bank_logo from "../../assets/Phonepe/SBI-logo.png";
 import footer from "../../assets/Phonepe/footer.png";
import { useContext } from "react";
import { FormContext } from "../FormContext";

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

const Phonepe = () => {
  const {formData} = useContext(FormContext)
  const {name,BankingName, amount,phone, date, time,} = formData;
    // Format the amount with commas
    const formattedAmount = Number(amount).toLocaleString();
    // Format the date and time
const formattedDate = formatDate(date);
const formattedTime = formatTime(time);

  return (
    <div className="w-[550px] h-[730px] bg-[#0e051a] text-white flex flex-col items-center justify-start">
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
          <p className="text-sm text-white -mt-1">{formattedTime} on {formattedDate}</p>
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
          <p className="text-xl font-light">T2404040939229004067191</p>
        </div>
        <div className="gap-2 flex flex-col w-full ">
          <p className="text-md text-gray-300">Debited from</p>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-row items-center gap-7">
            <img src={Bank_logo} alt="Bank logo" width={55} height={55}/>
            <h1 className="text-2xl">XXXXXX4442</h1>

            </div>
            <div className="flex flex-row items-center">
            <h1 className="text-lg">
              <FaRupeeSign />
            </h1>
            <h1 className="font-normal text-xl">{formattedAmount}</h1>
          </div>
          </div>
          <h1 className="ml-20 -mt-2 text-xl text-gray-300">UTR: 446142628621</h1>
        </div>
      </div>
      <div className="h-0.5 w-[80%] border-t-[1px] border-gray-500"/>
      <img src={footer} width={200} alt=""  className="mt-6"/>
    </div>
  );
};

export default Phonepe;
