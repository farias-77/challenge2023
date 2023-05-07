'use client'
import { Input } from '@/components/Input'
import { cp } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function RegisterViewer() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpf, setCPF] = useState('')
  const [name, setName] = useState('')

  const router = useRouter()

  async function handleSubmit() {
    const credentials = {
      name: name,
      confirmPassword: password,
      cpf: cpf,
      email: email,
      password: password,
    }
    console.log(credentials)

    await fetch('http://localhost:5000/sign-up', {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' },
    })
    router.push('/home')
  }

  return (
    <div className="w-[390px] h-fit mx-auto  flex flex-col items-center gap-6 p-7">
      <Link href="../" className="self-start">
        <Image
          width={30}
          height={30}
          src={'/assets/icons/arrow.svg'}
          alt="back-button"
          className="self-start"
        />
      </Link>
      <span className="text-4xl flex w-full justify-start text-bright font-bold mt-14">
        Cadastre-se
      </span>
      <div className="w-full h-fit flex flex-col gap-3">
        <Input onValue={setName} placeholder="Nome" iconPath="/assets/icons/user-profile.svg" />
        <Input onValue={setCPF} placeholder="CPF" iconPath="/assets/icons/pin-code.svg" />
        <Input onValue={setEmail} placeholder="Email" iconPath="/assets/icons/mail.svg" />
        <Input
          onValue={setPassword}
          placeholder="Password"
          type="password"
          iconPath="/assets/icons/lock.svg"
        />
      </div>
      <button className="btn-primary w-full py-3 mt-20" onClick={handleSubmit}>
        {' '}
        Criar conta
      </button>
    </div>
  )
}
