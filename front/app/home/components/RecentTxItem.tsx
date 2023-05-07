import Image from 'next/image'

export function RecentTxItem(props: {
  name: string
  amount: string
  convertedAmount?: string
  type: 'WITHDRAW' | 'DEPOSIT'
}) {
  return (
    <div className="w-full h-[70px] flex shadow-lg items-center justify-between px-6 bg-dark-20 rounded-2xl">
      {/* Currency info */}
      <div className="flex gap-3 items-center">
        <Image
          src={`/assets/icons//${props.type === 'WITHDRAW' ? 'minus' : 'plus'}.svg`}
          alt={`${props.name} currency logo`}
          height={25}
          width={25}
        />
        <span className="text-bright text-">{props.name}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-bright text-">{props.amount}</span>
        {props.convertedAmount && (
          <span className="text-bright text-sm text-opacity-50">R${props.convertedAmount}</span>
        )}
      </div>
    </div>
  )
}
