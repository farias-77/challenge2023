import { SALDO_BTG_DOL, getBTC } from '@/app/convert/components/ConvertViewer'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'

export function WalletInfo() {
  const [dolar, setDolar] = useState(4.95)
  useEffect(() => {
    getBTC().then((data) => setDolar(data.dollar))
  })
  return (
    <div className="w-full relative h-fit justify-center bg-black p-8  shadow-xl rounded-t-2xl mt-5 flex flex-col">
      <span className="text-bright">Equivalente ao Dólar</span>
      <div className=" flex w-full justify-between">
        <span className="text-bright text-3xl">
          USD <strong>10.000,00</strong>
        </span>
        <Image src={'/assets/icons/visible.svg'} width={17} height={17} alt="visible selector" />
      </div>
      <span className="text-bright mt-4">Equivalente ao Real</span>
      <span className="text-bright text-3xl">
        R$ <strong>50.502,00</strong>
      </span>

      {/* FOOTER */}
      <div className="w-full -m-8 h-14 rounded-2xl bg-dark-20 shadow-xl absolute -bottom-4 gap-2 flex items-center justify-center">
        <span className="text-bright  text-sm">Total em BTC Dol {SALDO_BTG_DOL.toFixed(2)} </span>
        <div className="h-[50%] w-[1px] bg-white "></div>
        <span className="text-bright text-sm">Dólar comercial</span>
        <div className="flex gap-1">
          <Image src={'/assets/icons/indicator-arrow.svg'} width={15} height={15} alt="indicator" />
          <span className="text-bright  text-sm">R$ {dolar} </span>
        </div>
      </div>
    </div>
  )
}
