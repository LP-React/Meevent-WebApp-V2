import Image from "next/image"
import { Button } from "../ui/button";
import { getSafeImageSrc } from '../utils/imageHelper';

interface Props {
  urlImage: string;
  estadoEvento: string
}

export const EventBanner = ({ urlImage, estadoEvento }: Props) => {
  return (
    <div className="w-full h-124 overflow-hidden rounded-2xl bg-muted shadow-xl relative">
      <Image
        src={getSafeImageSrc(urlImage)}
        alt="Banner del evento"
        width={900}
        height={700}
        className="w-full h-full object-cover"
      />

      <div className="absolute right-0 bottom-0 p-6 ">
        <Button className="text-3xl p-6 capitalize" size={"lg"}>
          {estadoEvento}
        </Button>
      </div>
    </div>
  )
}
