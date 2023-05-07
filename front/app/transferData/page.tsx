'use client'
import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Selector } from '@/components/Selector'
import { CURRENCY_TO_SYMBOL, CurrencyName } from '@/src/currencies'

export default function Page() {
  const [coin, setCoin] = React.useState('')
  const [currency, setCurrency] = useState<CurrencyName>('Dólar')
  const [address, setAddress] = useState('')

  async function handleSubmit() {
    const token = await localStorage.getItem('token-access')
    await fetch('http://localhost:5000/transfer', {
      body: JSON.stringify({
        destinationAddress: address,
        amount: Number(coin),
        Authorization: `Bearer ${token}`,
      }),
      method: 'post',
    })
  }

  return (
    <div className="w-full h-full flex flex-col p-8 relative bright ">
      <form className="w-full h-fit mx-auto  flex flex-row justify-center align-middle items-center gap-6 p-7">
        <Link href="../" className="absolute left-10 self-start">
          <Image
            width={30}
            height={30}
            src={'/assets/icons/arrow.svg'}
            alt="back-button"
            className="self-start"
          />
        </Link>
        <span className="text-bright text-1xl self-center text-center">Transferir BTGUSD</span>
      </form>
      <div className="p-[24px]">
        <Selector
          text="Usar como referência valor em"
          currency={currency}
          currencyList={['Euro', 'Real', 'Dólar']}
          onSelectCurrency={setCurrency}
        />

        <div className="mt-8 flex flex-col gap-1 ">
          <span className="text-bright  ">Qual valor em dólar você deseja transferir?</span>
          <div className="w-full bg-dark-20 rounded-lg h-10 flex justify-start gap-2 px-4 items-center">
            <span className="font-bold text-bright">{CURRENCY_TO_SYMBOL[currency]}</span>
            <input
              value={coin}
              placeholder="0.0"
              onChange={(event: { target: { value: string } }) => setCoin(event.target.value)}
              type="number"
              className="bg-transparent outline-none text-white"
            />
          </div>
        </div>
        <div style={{ marginTop: 18 }} className="flex w-full flex-row justify-between">
          <div className="flex flex-col justify-betwen">
            <span className="text-bright">Equivalente em BTGUSD</span>
            <span className="text-bright">Equivalente em Real</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-bright">20</span>
            <span className="text-bright">R$5,00</span>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-6 gap-2 mt-[40px] justify-center my bg-black p-3 px-5 shadow-xl rounded-2xl flex flex-col">
        <span className="text-bright">Para quem você quer transferir?</span>
        <input
          placeholder="CPF"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className="bg-transparent text-white outline-none border-b-2 border-white border-opacity-60  my-2 pb-2"
        />
      </div>
      <div className="w-full h-full flex flex-colum justify-end items-center">
        <button className="btn-primary w-full h-[45px] self-end mx-auto" onClick={handleSubmit}>
          Avançar
        </button>
      </div>
    </div>
  )
}
