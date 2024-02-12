import React from 'react'

const InputBox = ({
    label,
    amount,
    OnAmountChange,
    OnCurrencyChange,
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = [],
}) => {
    return (
        <div className='bg-white rounded-lg flex p-3 flex-wrap'>
            <div className='w-1/2 flex flex-wrap'>
                <label className='mb-2 text-black/40 px-1'>{label}</label>
                <input
                    className='w-full outline-none bg-transparent py-2 px-1'
                    type="number"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => OnAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <label className='mb-2 text-black/40'>Currency type</label>
                <select
                    className='rounded-lg p-1 bg-gray-100 cursor-pointer'
                    value={selectCurrency}
                    onChange={(e) => OnCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
