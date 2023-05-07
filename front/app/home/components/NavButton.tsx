import Image from 'next/image'

const NAV_ITEMS = {
  Home: '/assets/icons/home.svg',
  Carteira: '/assets/icons/wallet.svg',
  Negociar: '/assets/icons/chart.svg',
  Histórico: '/assets/icons/folder.svg',
  Conteúdo: '/assets/icons/book.svg',
}
export const NavButton = (props: { name: keyof typeof NAV_ITEMS }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image className="h-[30px]" src={NAV_ITEMS[props.name]} width={26} height={26} alt="home" />

      <span className="text-bright text-sm text-opacity-60">{props.name}</span>
    </div>
  )
}
