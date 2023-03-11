import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import nft from "../public/nftv2.png";
import airbnb from "../public/airbnb.png";
import port from "../public/portfolio.png";
import netflix from "../public/netflix.png";
import code from "../public/code.png";
import image from "../public/image.png";
import Card from "../components/Card";
import Skills from "../components/Skills";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Discover a world of creativity and innovation through the lens of my portfolio. From captivating visuals to thought-provoking designs, explore a collection of my best work and witness the power of imagination brought to life."
        />
        <link rel="icon" href="/portfolio.jpg" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white md:px-10 lg:px-20">
              Developedbyjosh
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="dark:text-white cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="/joshua_arnaez.pdf"
                  download
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8 text-white"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-500 font-medium md:text-6xl">
              Joshua Arnaez
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Fullstack Developer
            </h3>
            <p className="text-md leading-7 py-5 text-gray-600 dark:text-gray-300 md:text-xl max-w-2xl mx-auto">
              Welcome to my portfolio, where imagination and innovation come to
              life. Explore my collection of visually stunning designs,
              thought-provoking projects, and captivating creations. From
              branding and graphics to web design and beyond, get a glimpse into
              my world of creativity and see whats possible.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-10 text-gray-600 dark:text-gray-300">
            <Link
              href="https://www.linkedin.com/in/joshua-arnaez-764b60143/"
              target="_blank"
              rel="noopener"
            >
              <AiFillLinkedin />
            </Link>
          </div>
          <div className="relative mx-auto first-letter:mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 overflow-hidden mb-20 md:h-96 md:w-96">
            <Image src={image} alt="image" fill object-fit="cover" />
          </div>
        </section>
        <section>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md leading-7 text-gray-600 dark:text-gray-300 py-3 md:text-xl">
              I have a diverse skill set that spans both Front-End and Back-End
              technologies. On the Front-End, I am proficient in HTML5, CSS3,
              and JavaScript, as well as popular frameworks such as React and
              Angular. I have experience working with CSS preprocessors like
              Sass and Less, and I am also familiar with utility-first
              frameworks such as Tailwind CSS. On the Back-End, I have a strong
              foundation in Node.js and Express.js, and I have worked with
              databases such as Planetscale and MongoDB. I am also proficient in
              Prisma, an ORM for Node.js and TypeScript. I have experience with
              RESTful APIs. Additionally, I am well-versed in Git and have
              experience working with continuous integration tools like GitLab
              CI/CD. Overall, my skills in both Front-End and Back-End
              technologies allow me to build full-stack applications with ease.
            </p>
          </div>
          <div className="my-20  md:flex flex-wrap lg:flex justify-center gap-10">
            <Skills image={code} header="Front-end skills">
              <ul className="flex flex-wrap justify-start gap-4">
                {[
                  "HTML5",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwindcss",
                  "Typescript",
                  "Sass/Css",
                  "Vuejs",
                  "Angular",
                  "Nextjs",
                ].map((skill) => (
                  <div key="skill">
                    <li className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm uppercase tracking-wide">
                      {skill}
                    </li>
                  </div>
                ))}
              </ul>
            </Skills>
            <Skills image={code} header="Back-end skills">
              <ul className="flex flex-wrap justify-start gap-4">
                {[
                  "Node.js",
                  "Express.js",
                  "Prisma",
                  "MongoDB",
                  "Planetscale",
                  "RESTful APIs",
                  "Git",
                ].map((skill) => (
                  <div key="skill">
                    <li className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm uppercase tracking-wide">
                      {skill}
                    </li>
                  </div>
                ))}
              </ul>
            </Skills>
          </div>
        </section>
        <section>
          <div className="m-5 font-bold">
            <h2 className="text-6xl py-1 dark:text-white">Web Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Card
              image={nft}
              link="https://nft-nextjs-v2.vercel.app"
              techs={[
                "thirwebsdk",
                "nextjs",
                "sanity.io",
                "typescript",
                "tailwind",
              ]}
            />
            <Card
              link="https://airbnb-react-ten.vercel.app/"
              image={airbnb}
              techs={["React-map-gl", "nextjs", "tailwind"]}
            />
            <Card
              link="https://tailwind-react-portfolio.vercel.app/"
              image={port}
              techs={["nextjs", "tailwind", "typescript"]}
            />
            <Card
              link="https://react-netflix-clone-two.vercel.app/"
              image={netflix}
              techs={["reactjs", "sass", "firebase"]}
            />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
