import Image from 'next/image'
import { WalletInfo } from './components/WalletInfo'
import { ActionButton } from './components/ActionButton'
import { NavButton } from './components/NavButton'
import { NavBar } from './components/NavBar'
import { RecentTxItem } from './components/RecentTxItem'

export default function Page() {
  return (
    <div className="w-full h-fit flex flex-col p-8 relative">
      <WalletInfo />
      <div className="flex gap-3 w-[75%] mx-auto my-8"></div>
      <div className="flex w-full justify-around mt-5">
        <ActionButton item="Converter" />
        <ActionButton item="Transfer" />
        <ActionButton item="Extrato" />
      </div>
      <span className="text-bright mt-10 ml-5">Meus cartões</span>
      <div className="bg-[linear-gradient(126.67deg,_#001E62_28.66%,_#0C3B8A_114.74%)] p-6 pb-8 relative flex justify-between items-end shadow-xl w-full mt-4 h-[250px] rounded-xl">
        <Image
          src={'/assets/icons/mastercard-logo.svg'}
          width={50}
          height={50}
          alt="mastercard logo"
          className="absolute top-6"
        />
        <span className="font-bold text-bright">
          ... .... .... 9827 <br /> Otto Naggel
        </span>
        <span className="text-bright">03/27</span>
      </div>
      <span className="text-bright mt-10 ml-5">Ultimas transações</span>
      <div className="max-h-[150px] overflow-y-auto mt-3 pr-3">
        <div className="flex flex-col gap-3 ">
          <RecentTxItem
            name="Netflix"
            type="WITHDRAW"
            amount="-R$54,00"
            convertedAmount="11,50 BTG D"
          />
          <RecentTxItem
            name="Netflix"
            type="DEPOSIT"
            amount="+R$10.000,00"
            convertedAmount="11,50 BTG D"
          />
          <RecentTxItem
            name="Netflix"
            type="DEPOSIT"
            amount="+R$10.000,00"
            convertedAmount="11,50 BTG D"
          />{' '}
          <RecentTxItem
            name="Netflix"
            type="DEPOSIT"
            amount="+R$10.000,00"
            convertedAmount="11,50 BTG D"
          />
        </div>
      </div>
      <NavBar />
    </div>
  )
}
