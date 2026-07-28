// import problem from '@/img/about/problems.png';
const solution =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/solutions.png';
const goodReward =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/good-rewards.png';
import { aboutEcocrewTypes } from '@/types/aboutEcocrew-types';
const registered =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/registered.png';
const research =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/research.png';
const develop =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/develop.png';
const location =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/location.png';
const mission =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/mission.png';
const launched =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/launched.png';
const expand =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/expand.png';
const impact =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/impact.png';
const path =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/path.png';
const qhizer =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/qhizer.png';
const muqtadir =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/muqtadir.png';
const naveed =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/naveed.png';

const problem =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/about/problems.png';

export const aboutEcocrewData: aboutEcocrewTypes = {
  problemSolution: {
    imageCard1: {
      title: 'Problem',
      description:
        "The Earth is faced with much worse danger than it was in the past decades. Human consumption of Earth's natural resources has tripled over the last four decades and so is the depletion of notable resources.",
      image: problem,
    },
    imageCard2: {
      title: 'Solution',
      description:
        "Controlling your household's recyclables through segregation and recycling can free up space in your home while also helping the environment.",
      image: solution,
    },
    imageCard3: {
      title: 'Good work',
      description:
        'Ecocrew provides users the ability to manage their recyclables and make money right at their doorstep. Plus, eco coins for each pickup they complete which can be used to purchase things from our ecostore.',
      image: goodReward,
    },
  },
  problemSolutionCarousel: [
    {
      title: 'Problem',
      description:
        "The Earth is faced with much worse danger than it was in the past decades. Human consumption of Earth's natural resources has tripled over the last four decades and so is the depletion of notable resources.",
      image: problem,
    },
    {
      title: 'Solution',
      description:
        "Controlling your household's recyclables through segregation and recycling can free up space in your home while also helping the environment.",
      image: solution,
    },
    {
      title: 'Good work',
      description:
        'Ecocrew provides users the ability to manage their recyclables and make money right at their doorstep. Plus, eco coins for each pickup they complete which can be used to purchase things from our ecostore.',
      image: goodReward,
    },
  ],
  journey: [
    {
      year: '2022',
      title: 'The Beginning',
      journeyPoints: [
        {
          title: 'Nov 22, Officially Registered',
          description:
            'Ecocrew was registered in 2022, starting our mission to promote sustainability with ecofriendly solutions for a greener future.',
          image: registered,
          order: '1',
        },
        { order: '2' },
        {
          title: 'Research & Analysis',
          description:
            'We conducted market research, surveys and user studies to refine our offerings and create impactful sustainable solutions.',
          image: research,
          order: '3',
        },
        {
          title: 'Ecocrew App Building',
          description:
            'With our registration in 2022, we began developing an app to provide ecofriendly tools and resources, making sustainability more accessible.',
          image: develop,
          order: '4',
        },
      ],
    },
    {
      year: '2023',
      title: 'A Year of Growth and Impact',
      journeyPoints: [
        {
          title: 'Mar 23, Ecocrew’s Application Launched',
          description:
            'We launched our app to provide easy access to ecofriendly solutions, empowering users to embrace sustainable living.',
          image: launched,
          order: '1',
        },
        { order: '2' },
        {
          title: 'Expanding Our Services in Bengaluru',
          description:
            'We began by launching our services in 10% of Bengaluru, covering areas like Akshaya Nagar, Bommanahalli, BTM Layout, Begur and more.',
          image: expand,
          order: '3',
        },
        {
          title: 'Scaling Up in Bengaluru',
          description:
            'We expanded our services to 25% of Bengaluru, reaching areas like JP Nagar, Jaya Nagar, Banashankari, HSR Layout, Koramangala, Electronic City, Basavanagudi and more.',
          image: expand,
          order: '4',
        },

        {
          title: 'Ecocrew’s Impact (Mar 23 - Jun 23)',
          type: 'notParagraph',
          values: ['267', '46.8K', '67.8K', '24.4K', '32', '16,003 KG'],
          image: impact,
          order: '5',
        },
        {
          title: 'Ecocrew’s Impact (Jun 23 - Dec 23)',
          type: 'notParagraph',
          values: ['2.6K', '472K', '628K', '225K', '5.3K', '1,54,526 KG'],
          image: impact,
          order: '6',
        },
      ],
    },
    {
      year: '2024',
      title: 'Reaching New Heights',
      journeyPoints: [
        {
          title: 'Halfway Across Bengaluru',
          description:
            'We expanded our services to cover 50% of Bengaluru, strengthening our mission to provide ecofriendly solutions and create a greener, more sustainable city.',
          image: path,
          order: '1',
        },
        { order: '2' },
        {
          title: 'Ecocrew’s Impact (Jan 24 -  Dec 24)',
          type: 'notParagraph',
          values: ['10.5K', '1.8M', '2.5M', '920K', '112K', '6,87,780 KG'],
          image: impact,
          order: '3',
        },
        {
          title: 'Achieving New Milestones',
          description:
            'We scaled our operations to cover 50% of Bengaluru, Serving major areas like Whitefield, Marathahalli, Mahadevapura, Hoodi, Indiranagar, Bellandur, KR Puram and more.',
          image: expand,
          order: '4',
        },
      ],
    },
    {
      year: '2025',
      title: 'Major Milestone Achieved',
      journeyPoints: [
        {
          title: 'All Across Bengaluru, A Citywide Impact',
          description:
            'In 2025, Ecocrew reached a major milestone by expanding its services citywide in Bengaluru, giving every household access to convenient, ecofriendly waste collection and recycling.',
          image: location,
          order: '1',
        },
        { order: '2' },
        {
          title: 'Ecocrew’s Impact (Jan 25 -  Dec 25)',
          type: 'notParagraph',
          values: ['10.4K', '1.65M', '2.4M', '912K', '153K', '6,88,735 KG'],
          image: impact,
          order: '3',
        },
        {
          title: 'Mission to turn entire Bengaluru Green',
          description:
            'This year marks a turning point in our mission to make Bengaluru a model for sustainable urban living , one doorstep at a time.',
          image: mission,
          order: '4',
        },
      ],
    },
    {
      year: '2026',
      title: 'Our Vision for the Future',
      journeyPoints: [
        { order: '1' },
        { order: '2' },
        { order: '3' },
        { order: '4' },
        {
          title: 'Expanding Beyond Bengaluru',
          description:
            'With Bengaluru fully covered, Ecocrew now aims to expand across India  making sustainable living easy, accessible, and rewarding for every household.',
          order: '5',
        },
      ],
    },
  ],
  founders: {
    title: 'The minds that built ecocrew',
    description:
      'Meet the minds behind ecocrew, driven by passion and innovation for a sustainable future.',
    aboutFounders: [
      {
        name: 'Mohammed Qhizer Jameel',
        role: 'CEO & Co-founder ecocrew',
        image: qhizer,
        description:
          'A visionary leader dedicated to driving sustainability through innovative solutions, empowering individuals and businesses to embrace ecofriendly practices.',
      },
      {
        name: 'Muqtadir Ahmed',
        role: 'CEO & Co-founder ecocrew',
        image: muqtadir,
        description:
          'A visionary leader dedicated to driving sustainability through innovative solutions, empowering individuals and businesses to embrace ecofriendly practices.',
      },
      {
        name: 'Naveed Mulla',
        role: 'Operation Head ecocrew',
        image: naveed,
        description:
          'A visionary leader dedicated to driving sustainability through innovative solutions, empowering individuals and businesses to embrace ecofriendly practices.',
      },
    ],
  },
};
