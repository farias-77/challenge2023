'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col p-8 relative bright">
      <div className="w-full h-fit mx-auto  flex flex-row justify-center align-middle items-center gap-6 p-7">
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
      </div>

      <span style={{ marginTop: 40 }} className="text-bright text-1xl">
        Transferir BTGUSD
      </span>
      <div className="flex flex-col">
        <span className="text-bright text-3xl">
          USD <strong>20,00</strong>
        </span>
        <span className="text-bright">Em BTGUSD</span>
      </div>
      <span style={{ marginTop: 24 }} className="text-bright">
        Para Otto Naggel
      </span>
      <div className="flex flex-row justify-between">
        <span style={{ marginTop: 24 }} className="text-bright">
          CPF
        </span>
        <span style={{ marginTop: 24 }} className="text-bright">
          273.982.002-19
        </span>
      </div>
      <div
        style={{ marginTop: 40 }}
        className="w-full f-fit py-6 justify-center bg-black p-3 px-5 shadow-xl rounded-2xl mt-5 flex flex-col"
      >
        <span className="text-bright flex w-full items-center">
          Digite a sua senha de 8 dígitos para transferir
        </span>
        <input
          placeholder="Senha"
          className="bg-transparent text-bright outline-none border-b p-2 border-white "
        />
      </div>
      <div className="w-full h-full flex flex-colum justify-end items-center ">
        <button className="btn-primary w-full h-[45px] self-end">Entrar</button>
      </div>
    </div>
  )
}
