import Image from 'next/image'

const ACTION_BUTTON_ITEMS = {
  Converter: '/assets/icons/currency-exchange.svg',
  Transfer: '/assets/icons/data-transfer.svg',
  Extrato: '/assets/icons/footer.svg',
}
export type ActionButtonItems = keyof typeof ACTION_BUTTON_ITEMS
export function ActionButton({ item }: { item: ActionButtonItems }) {
  return (
    <div className="w-[110px] h-[110px] rounded-2xl gap-2 bg-dark-20 shadow-xl flex flex-col justify-center items-center">
      <Image
        src={ACTION_BUTTON_ITEMS[item]}
        className="w-[35px] h-[35px]"
        alt={`${item} image`}
        height={30}
        width={30}
      />
      <span className="text-bright text-sm">{item}</span>
    </div>
  )
}
