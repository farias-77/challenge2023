import { Input } from '@/components/Input'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <form className="w-[390px] h-fit mx-auto  flex flex-col items-center gap-6 p-7">
      <Link href='../' className='self-start'>
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
        <Input placeholder="Nome" iconPath="/assets/icons/user-profile.svg" />
        <Input placeholder="CPF" iconPath="/assets/icons/pin-code.svg" />
        <Input placeholder="Email" iconPath="/assets/icons/mail.svg" />
        <Input placeholder="Password" type="password" iconPath="/assets/icons/lock.svg" />
      </div>
      <button type='submit' className="btn-primary w-full py-3 mt-20"> Criar conta</button>
    </form>
  )
}
