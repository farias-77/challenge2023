import { Input } from '@/components/Input'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-[390px] h-fit mx-auto  flex flex-col items-center gap-6 p-7">
      <h1 className="text-bright text-4xl font-semibold">mynt</h1>
      <span className="text-4xl px-14 font-bold text-bright text-left">
        Desbloqueie seu mundo crypto
      </span>
      <Image width={150} height={700} src="/assets/icons/mynt-balls-logo.svg" alt="logo" />
      <Link href='./login'>
        <button className="btn-primary w-[335px] h-[45px]">Entrar</button>
      </Link>
      <Link href='./register'>
        <button className="btn-secondary w-[335px] h-[45px]">Cadastre-se</button>
      </Link>
    </div>
  )
}
