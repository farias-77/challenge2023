import { CurrencyName } from '@/src/currencies'
import { useEffect, useMemo, useState } from 'react'

export function Selector(props: {
  onSelectCurrency(currency: CurrencyName): void
  text: string
  currency: CurrencyName
  currencyList: CurrencyName[]
}) {
  const list = useMemo(() => props.currencyList.filter((cur) => props.currency !== cur), [props])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => window.addEventListener('click', () => setIsOpen(false)))
  return (
    <div className="flex flex-col items-start gap-1">
      <span className="text-bright pl-1">{props.text}</span>
      <div
        className="w-[80px] h-[35px] flex relative rounded-lg bg-dark-20 cursor-pointer"
        onClick={(event) => (event.stopPropagation(), setIsOpen(!isOpen))}
      >
        <span className="text-bright m-auto">{props.currency}</span>
        {isOpen && (
          <div className="absolute flex flex-col top-full mt-1 w-[100px] h-fit rounded-xl  bg-dark-20 shadow-lg z-[100] ">
            {list.map((currency) => (
              <button
                key={currency}
                onClick={() => props.onSelectCurrency(currency)}
                className="text-bright  folt-bold py-2"
              >
                {currency}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
