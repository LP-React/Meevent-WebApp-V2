import Image from "next/image"

interface Props {
  urlImage: string
}

export const EventBanner = ({ urlImage }: Props) => {
  return (
    <div className="w-full h-124 overflow-hidden rounded-2xl bg-muted shadow-xl">
      <Image
        src={urlImage}
        alt="Banner del evento"
        width={900}
        height={700}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
