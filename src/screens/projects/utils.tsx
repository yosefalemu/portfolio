import {BiLogoPostgresql} from 'react-icons/bi';
import {FaGoogle, FaNodeJs, FaReact} from 'react-icons/fa';
import {SiGraphql, SiMui, SiNextdotjs, SiPayloadcms, SiRedux, SiStripe, SiTailwindcss, SiTrpc} from 'react-icons/si';

import {SiMongodb, SiTypescript} from 'react-icons/si';

import federal from 'assets/images/federal.png';
import mint from 'assets/images/mint.png';
import weatherAppLofo from 'assets/images/weather-app.png';
import carrent from 'assets/images/carrent.png';
import admin from "assets/images/admin.png"

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const comerciaProjects: Project[] = [
  {
    name: 'Private security agent managnment system',
    description: `Team size: 6. I contributed to the creation of the Ethiopian Federal Police Security Agent Management System. This comprehensive system aimed to modernize and streamline the manual processes involved in managing private security agents within the country. I involved designing and implementing features such as application document validation, approval, and decline workflows integrating features for adding and managing employees associated with security agents, providing a centralized platform for the Ethiopian Federal Police to monitor and control all agents and their employees efficiently.`,
    img: federal,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiNextdotjs key="next" className="text-[28px] text-black light:text-black" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiTrpc key="trpc" color="#5ED4F4" className="text-[28px]" />,
      <SiPayloadcms key="payloadcms" className="text-[28px] text-black light:text-black" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
  },
  {
    name: 'Inventory managnment system',
    description: `Team size: 6. At the Ethiopian Ministry of Innovation and Technology, I played a crucial role as a full-stack developer in the creation of the Ministry's Inventory Management System. My responsibilities encompassed both front-end and back-end development, ensuring a seamless integration of various system components. This comprehensive system was meticulously designed to replace the outdated manual process of borrowing materials from the store with an efficient, automated solution. By streamlining inventory tracking and material borrowing, we significantly enhanced operational efficiency and accuracy, thereby supporting the Ministry's broader goals of innovation and technological advancement.`,
    img: mint,
    stack: [
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiRedux color="#7B51BE" className="text-[48px] sm:text-[64px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiGraphql key="graphql" color="#E63CAD" className="text-[28px]" />,
      <BiLogoPostgresql key="psql" color="#3A6596" className="text-[28px]" />,
    ],
  },
];

export const customProjects: Project[] = [
  {
    name: 'Weather React App',
    url: 'https://weather.enikosoft.com/',
    description: `React/Typescript/StyledComponent/zustand. You can find weather and current location time for any cities, searched by Google Place Api. Adaptive and responsive design. Weather data from https://www.visualcrossing.com`,
    img: weatherAppLofo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaGoogle key="google" color="#000" className="text-[28px]" />,
    ],
    git: 'https://github.com/yosefalemu/urban-weather',
  },
  {
    name: 'Car Rental App',
    url: 'https://car-rent-l2l28qcmd-yosef-alemus-projects.vercel.app/',
    description: `React/Typescript/StyledComponent/zustand. You can find weather and current location time for any cities, searched by Google Place Api. Adaptive and responsive design. Weather data from https://www.visualcrossing.com`,
    img: carrent,
    stack: [
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
    ],
    git: 'https://github.com/yosefalemu/CAR-RENT',
  },
  {
    name: 'Admin dashboard',
    url: 'https://admin-dashboard-hepz.vercel.app/',
    description: `React/Typescript/StyledComponent/zustand. You can find weather and current location time for any cities, searched by Google Place Api. Adaptive and responsive design. Weather data from https://www.visualcrossing.com`,
    img: admin,
    stack: [
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiMui key="materialui" color="#5ED4F4" className="text-[28px]" />,
    ],
    git: 'https://github.com/yosefalemu/admin-dashboard',
  },
];
