import Image from "next/image"

interface Props {
  urlImage: string
}

export const EventBanner = ({ urlImage }: Props) => {
  return (
    <div className="w-full h-64 overflow-hidden rounded-2xl bg-muted">
      <Image
        src={urlImage}
        alt="Banner del evento"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
