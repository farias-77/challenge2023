import { Input } from '@/components/Input'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <form className="w-[390px] h-fit mx-auto  flex flex-col items-center gap-6 p-7">
      <Link className="self-start" href='../'>
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
        <Input placeholder="CPF" iconPath="/assets/icons/pin-code.svg" />
        <Input placeholder="Password" iconPath="/assets/icons/lock.svg" />
      </div>
      <div className="w-full flex flex-col items-end">
        <button type='submit' className="btn-primary w-full py-3 mt-20"> Entrar</button>
        <button className="text-bright my-1">Esqueci minha senha</button>
      </div>
    </form>
  )
}
