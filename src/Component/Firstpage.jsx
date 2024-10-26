import { Link } from 'react-router-dom';
import './Style.css'

const Firstpage = () => {
  return (
    <main className=''>
    <div className='flex flex-col justify-center items-center px-11 gap-11'>
      <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-6xl font-bold'> Select your Payment App</h1>
      <ul className='gap-6 w-fit flex justify-center items-center border-2 border-white rounded-2xl p-11 h-auto text-2xl font-bold text-white flex-wrap'>
        <li><Link to='/phonepe'><button className='button'> PhonePe</button></Link></li>
        <li><Link to='/paytm'><button>Paytm</button></Link></li>
        <li><Link to='/googlepay'><button>GooglePay</button></Link></li>
        <li><Link to='/uber'><button>Uber</button></Link></li>
      </ul>
    </div>
    </main>
  )
}

export default Firstpage
