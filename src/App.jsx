import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url("https://images.pexels.com/photos/839351/pexels-photo-839351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")` }}>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <img className='max-w-md w-full rounded-2xl' src="" alt="" />
        </div>
        <div className='w-1/2 h-full flex align-middle'>
          <div className='max-w-md bg-white/30 rounded-lg w-full border border-gray-60 m-auto p-5 relative'>
            <div className='mb-1'>
              <InputBox
                label="From"
                amount={amount}
                OnAmountChange={(amount) => setAmount(amount)}
                OnCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                currencyOptions={options}
              ></InputBox>
            </div>
            <button className='absolute -translate-x-1/2 -translate-y-1/2 bg-blue-600 border-2 border-white rounded-md px-4 py-1.5 text-white' onClick={swap}>swap</button>
            <div className='mb-4 mt-2'>
              <InputBox
                label="To"
                amount={convertedAmount}
                OnCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                currencyOptions={options}
                amountDisable
              ></InputBox>
            </div>
            <button onClick={convert} className='w-full rounded-lg px-4 py-3 bg-blue-600 text-white'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
