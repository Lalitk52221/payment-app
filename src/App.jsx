import { BrowserRouter, Route, Routes } from "react-router-dom";
import Phonepe from "./Component/Phonepe/Phonepe";
import Firstpage from "./Component/Firstpage";
import GpayForm from "./Component/Googlepay/GpayForm";
import Googlepay from "./Component/Googlepay/Googlepay";
import PaytmForm from "./Component/Paytm/PaytmForm";
import Paytm from "./Component/Paytm/Paytm";
import PhonepeForm from "./Component/Phonepe/PhonepeForm";
import Uber from "./Component/Uber";
// import * as React from 'react';
const App = () => {
  return (
    <>
      <div className="flex justify-center h-screen flex-col bg-black items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Firstpage />} />
            {/* <Route path="/phonepe-summary" element={<Phonepe />} /> */}
            <Route path="/phonepe" element={<PhonepeForm />} />
            <Route path="/paytm" element={<PaytmForm />} />
            {/* <Route path="/paytm-summary" element={<Paytm />} /> */}
            <Route path="/googlepay" element={<GpayForm />} />
            {/* <Route path="/googlepay-summary" element={<Googlepay />} /> */}
            <Route path="/uber" element={<Uber />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
