import Image from "next/image";
const Card = ({ image }: any) => {
  return (
    <div className="">
      <Image src={image} alt="image" className=" rounded-lg" />
    </div>
  );
};

export default Card;
