import type { NextPage } from 'next';
import profile from '../public/profile_pic.jpg';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { createElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <motion.div
      className="mx-3 max-w-sm  lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate="enter">
      <Head>
        <title>Ahmed Hemdan | About me</title>
      </Head>

      {/* Intro */}
      <div className="flex justify-between pt-4">
        <div>
          <h1 className="text-4xl font-bold  dark:text-white">Ahmed Hemdan</h1>
          <p className="dark:text-white">Web Developer</p>
        </div>
        {/* prof pic */}
        <div className="flex h-fit w-24 overflow-hidden rounded-full border-2">
          <a
            draggable={false}
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-hemdan-695408201/"
            rel="noreferrer">
            <div className="group flex items-center justify-center">
              <Image
                width="100%"
                height="100%"
                className="rounded-full duration-200 ease-linear group-hover:blur-sm"
                src={profile.src}
                alt="prof-pic"
                draggable={false}
              />
              <FaLinkedin
                className="invisible absolute text-white opacity-0 duration-200 ease-linear group-hover:visible group-hover:opacity-100"
                size={28}
              />
            </div>
          </a>
        </div>
      </div>
      {/* About */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          About Me
        </h3>
        <p className="text-justify tracking-wide dark:text-white">
          Innovative Web Developer with over 2 years of experience building and
          maintaining responsive websites and web applications. Proficient in
          HTML, CSS, JavaScript, TypeScript, JQuery, Bootstrap, tailwindcss,
          React.js, Next.js and Redux
        </p>
      </div>
      {/* Bio */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          Bio
        </h3>
        <div className="grid grid-cols-[1fr_3fr] gap-4">
          <div className="w-fit font-bold dark:text-white">2018-2022</div>
          <p className="dark:text-white">
            Studying Computer Science at Ain Shams University
          </p>
          <div className="w-fit font-bold dark:text-white">
            Dec 2021 to Sep 2023
          </div>
          <p className="dark:text-white">
            Working as a Software Engineer at{' '}
            <a
              draggable={false}
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://www.u1stss.com/"
              target="_blank"
              rel="noreferrer">
              U1st Services & Soluations
            </a>
          </p>

          <div className="w-fit font-bold dark:text-white">
            Nov 2022 to Jan 2023
          </div>
          <p className="dark:text-white">
            Working as a Freelancer Web Engineer at{' '}
            <a
              draggable={false}
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://www.u1stss.com/"
              target="_blank"
              rel="noreferrer">
              It-Ranks Technology
            </a>
          </p>
          <div className="w-fit font-bold dark:text-white">
            Feb 2023 to June 2023
          </div>
          <p className="dark:text-white">
            Working as a Freelancer Web Developer at{' '}
            <a
              draggable={false}
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://cascotec.com/"
              target="_blank"
              rel="noreferrer">
              CASCO
            </a>
          </p>
          {/* <div className="w-fit font-bold dark:text-white">Sep 2023 to Now</div>
          <p className="dark:text-white">
            Working as a Freelancer Web Developer at{' '}
            <a
              draggable={false}
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://www.facebook.com/TheWhiteHouse.RoyalState"
              target="_blank"
              rel="noreferrer">
              TWH Royal State
            </a>
          </p> */}
        </div>
      </div>
      {/* Hobbies */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          I ❤️
        </h3>
        <p className="dark:text-white">Music, Problem Solving</p>
      </div>
      {/* Social media */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          On the web
        </h3>
        <div className="flex flex-col">
          <MediaLink
            icon={(props) => <FaLinkedin />}
            text="@Ahmed-Hemdan"
            mediaLink="https://www.linkedin.com/in/ahmed-hemdan-695408201/"
          />
          <MediaLink
            icon={(props) => <FaGithub />}
            text="@hemda74"
            mediaLink="https://github.com/hemda74"
          />
          <MediaLink
            icon={(props) => <FaFacebook />}
            text="@Ahmed A.Hemdan"
            mediaLink="https://www.facebook.com/profile.php?id=100009361588650"
          />
        </div>
      </div>
    </motion.div>
  );
};

interface mediaLinkProps {
  icon: IconType;
  mediaLink: string;
  text: string;
}

const MediaLink = ({ icon, mediaLink, text }: mediaLinkProps) => (
  <a
    draggable={false}
    target="_blank"
    href={mediaLink}
    className="group flex w-fit items-center rounded-md py-2 px-3 duration-200 ease-linear hover:bg-sky-200 hover:bg-opacity-60 dark:hover:bg-teal-200 dark:hover:bg-opacity-20"
    rel="noreferrer">
    <div className="text-sky-700 duration-200 ease-linear group-hover:text-sky-600 dark:text-teal-300 dark:group-hover:text-teal-200">
      {createElement(icon)}
    </div>
    <p className="ml-2 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 group-hover:text-sky-600 group-hover:after:scale-100  group-hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 dark:group-hover:text-teal-200 dark:group-hover:after:bg-teal-200">
      {text}
    </p>
  </a>
);

export default Home;
