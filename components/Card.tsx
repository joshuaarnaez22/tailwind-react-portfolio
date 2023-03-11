import Image from "next/image";
import Link from "next/link";

const Card = ({ image, techs, link }: any) => {
  return (
    <div className="bg-white transition duration-300 ease-in-out hover:scale-90 hover:origin-center hover:rotate-6">
      <Link href={link} target="_blank">
        <Image src={image} alt="image" className=" rounded-lg" />

        <div className="bg-gray-100 py-4 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Tech Used</h2>
            <ul className="flex flex-wrap justify-start gap-4 ">
              {techs &&
                techs.map((tech: string, index: number) => (
                  <div key={index}>
                    <li className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm uppercase tracking-wide">
                      {tech}
                    </li>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
