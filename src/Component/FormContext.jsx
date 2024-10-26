import { useState } from "react";
import { createContext } from "react";

 export const FormContext = createContext();

export const FormProvider = ({children})=>{

const [formData, setFormData] = useState({
    name:'',
    amount:'',
    date: new Date(),
    time:'',
    amtinRs:'',
    payname:'',
    BankingName:'',
    phone:'',
    droptime:'',
    pickuplocation:'',
    droplocation:'',
})


    return (
        <FormContext.Provider value={{formData,setFormData,}}>
            {children}
        </FormContext.Provider>
    )
}