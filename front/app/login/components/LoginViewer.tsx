'use client'
import { Input } from '@/components/Input'
import { log } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  async function handleLogin() {
    const res = await fetch('http://localhost:5000/sign-in', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
    localStorage.setItem('token-access', data.token)
    router.push('/home')
  }

  return (
    <div className="w-[390px] h-fit mx-auto  flex flex-col items-center gap-6 p-7">
      <Link className="self-start" href="../">
        <Image
          width={30}
          height={30}
          src={'/assets/icons/arrow.svg'}
          alt="back-button"
          className="self-start"
        />
      </Link>
      <span className="text-4xl flex w-full justify-start text-bright font-bold mt-14">Login</span>
      <div className="w-full h-fit flex flex-col gap-3">
        <Input
          placeholder="Email"
          iconPath="/assets/icons/mail.svg"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Password"
          iconPath="/assets/icons/lock.svg"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
      </div>
      <div className="w-full flex flex-col items-end">
        <button className="btn-primary w-full py-3 mt-20" onClick={() => handleLogin()}>
          Entrar
        </button>
        <button className="text-bright my-1">Esqueci minha senha</button>
      </div>
    </div>
  )
}
