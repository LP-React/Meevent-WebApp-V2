type EventProps = {
  title: string;
  image: string;
  onSelect: () => void;
};

export const Event = ({ title, image, onSelect }: EventProps) => {
  return (
    <div
      onClick={onSelect}
      className="relative min-h-[280px] w-[80%] shadow-[0_0_5px_black] rounded-lg overflow-hidden mb-[50px] cursor-pointer transition duration-300 group">
      <img src={image} className="w-full h-full object-cover brightness-100 transition duration-200 group-hover:brightness-50"/>
      <h3 className="absolute bottom-0 text-white text-4xl font-normal p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{title}</h3>
    </div>
  );
};