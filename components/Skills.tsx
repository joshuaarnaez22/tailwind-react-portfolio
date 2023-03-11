import Image from "next/image";
const Skills = ({ children, image, header }: any) => {
  return (
    <div className="shadow-2xl text-center p-10 rounded-xl dark:bg-gray-600 md:w-[400px]">
      <h2 className="dark:text-white text-3xl font-bold mb-4">{header}</h2>
      <Image src={image} alt="image" className="mx-auto" />
      <h3 className="text-lg font-medium pt-8 pb-2 md:text-2xl dark:text-white"></h3>
      <h4 className="py-4 text-teal-600 md:text-xl"></h4>
      {children}
    </div>
  );
};

export default Skills;
