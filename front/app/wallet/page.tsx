import Image from 'next/image'
import { CurrencyItem } from './components/CurrencyItem'
import { NavButton } from '../home/components/NavButton'
import { NavBar } from '../home/components/NavBar'

export default function Page() {
  return (
    <div className="w-full h-fit flex flex-col p-8 relative">
      <ProfileMock />
      <WalletAmount />
      <div className="w-full h-[125px] justify-center bg-black p-3 px-5 shadow-xl rounded-2xl mt-5 flex flex-col">
        <span className="text-bright">Minha conta</span>
        <div className="flex w-full justify-between ">
          <div className="flex flex-col items-start">
            <span className="text-bright text-2xl font-bold">BTG Dol</span>
            <span className="text-bright text-2xl">8.502,00</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-bright text-md font-bold">Equivalente em real</span>
            <span className="text-bright text-md">
              R$ <strong>45.927,00</strong>
            </span>
            <button className="text-md text-bright-ocean">ver mais</button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 w-[75%] mx-auto my-8">
        <Image src={'/assets/icons/search.svg'} width={24} height={24} alt="search" />
        <span className="text-md text-bright text-opacity-50"> Buscar categoria</span>
      </div>
      <div className="flex flex-col w-full gap-3">
        <CurrencyItem amount={'R$ 100,61'} name="Real" symbol="BRL" />
        <CurrencyItem
          amount={'R$ 0,000026783'}
          convertedAmount="R$ 100,61"
          name="Bitcoin"
          symbol="BTC"
        />{' '}
        <CurrencyItem
          amount={'R$ 0,000723'}
          convertedAmount="R$ 56,32"
          name="Ethereum"
          symbol="ETH"
        />
        <CurrencyItem amount={'22.510'} convertedAmount="R$ 56,23" name="Cardano" symbol="ADA" />{' '}
        <CurrencyItem amount={'0.020'} convertedAmount="R$ 100,61" name="Solana" symbol="ADA" />
      </div>
      <NavBar />
    </div>
  )
}

const ProfileMock = () => {
  return (
    <div className="w-[50px] flex items-center justify-center h-[50px] font-bold text-lg rounded-full bg-[#B8CCEA] ">
      CC
    </div>
  )
}

function WalletAmount() {
  return (
    <div className="w-full h-fit flex flex-col items-start px-6 mt-20">
      <span className="text-bright text-lg">Patrimônio</span>
      <div className="flex w-full justify-between">
        <span className="text-4xl text-bright font-normal">
          R$ <strong>59.000,00</strong>
        </span>
        <Image src={'/assets/icons/visible.svg'} width={17} height={17} alt="visible selector" />
      </div>
      <span className="text-bright text-lg">
        <strong className="text-bright-ocean">+1,30%</strong> nos últimos 12 meses
      </span>
    </div>
  )
}
