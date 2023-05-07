import { NavButton } from './NavButton'

export function NavBar() {
  return (
    <div className="w-full h-20 bg-dark-20 flex items-center justify-around absolute -m-8 -bottom-10">
      <NavButton name="Home" />
      <NavButton name="Carteira" />
      <NavButton name="Negociar" />
      <NavButton name="Histórico" />
      <NavButton name="Conteúdo" />
    </div>
  )
}
