import {BiLogoPostgresql} from 'react-icons/bi';
import {FaCss3, FaGoogle, FaHtml5, FaNodeJs, FaReact, FaSass} from 'react-icons/fa';

import {
  SiAmazonaws,
  SiApollographql,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPayloadcms,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from 'react-icons/si';

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'Javascipt',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'TypeScript',
        icon: <SiTypescript color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Next.js',
        icon: <SiNextdotjs className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: 1.5,
      },
      {
        label: 'Redux',
        icon: <SiRedux color="#7B51BE" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Apollo',
        icon: <SiApollographql color="#E63CAD" className="text-[48px] sm:text-[64px]" />,
        expirience: 2,
      },
      {
        label: 'TRPc',
        icon: <SiTrpc color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 2,
      },
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'SASS/SCSS',
        icon: <FaSass color="#CE6C9C" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        expirience: 2,
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Node.js',
        icon: <FaNodeJs color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Express',
        icon: <SiExpress color="#818283" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Graphql',
        icon: <SiGraphql color="#E63CAD" className="text-[48px] sm:text-[64px]" />,
        expirience: 2,
      },
      {
        label: 'Nest',
        icon: <SiNestjs color="#DA224C" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'Payload CMS',
        icon: <SiPayloadcms color="#ffffff" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'Mongo',
        icon: <SiMongodb color="#2c913f" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Postgresql',
        icon: <BiLogoPostgresql color="#3A6596" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
    ],
  },
  {
    name: 'Others',
    items: [
      {
        label: 'AWS Serverless, EC2, S3',
        icon: <SiAmazonaws color="#F1941D" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Stripe',
        icon: <SiStripe color="#6058f8" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Google API (Map, GA4 ...)',
        icon: <FaGoogle className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: null,
      },
    ],
  },
];
