import { EcocrewNewsTypes } from '@/types/home-types';

// Landing Page Images
const image1 =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/landing-page/image1.jpg';
const image2 =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/landing-page/image2.jpg';
const image3 =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/landing-page/image3.jpeg';
const recycle =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/landing-page/recycle.png';
const sell =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/landing-page/sell.png';
const rupee =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/landing-page/rupee.png';

// Contribute Ecocrew Images
const conrecycle =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/contribute-ecocrew/con-recycle.png';
const conrupee =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/contribute-ecocrew/con-rupee.png';
const conbag =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/contribute-ecocrew/con-bag.png';

// Ecocrew Insights Images
const newspaper =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/newspaper.png';
const books =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/books.png';
const milkcover =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/milkcover.png';
const plastic =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/plastic.png';
const steel =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/steel.png';
const iron =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/iron.png';
const machine =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/machine.webp';
const ac =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/ac.jpg';
const microwave =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/microwave.jpg';
const fan =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/fan.jpg';
const laptop =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/laptop.jpg';
const mobile =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/mobile.jpg';
const matress =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/matress.webp';
const clothes =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/clothes.jpg';
const tyres =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/tyres.jpg';
const wires =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/wires.jpg';
const trees =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/trees.png';
const water =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/water.png';
const energy =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/energy.png';
const landfill =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/landfill.png';
const oil =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/ecocrew-insights/oil.png';

// Collect Recyclables Images
const school =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/collect-recyclables/school.png';
const uni =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/collect-recyclables/university.png';
const company =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/collect-recyclables/company.png';

// Icons
const colon =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/colon.png';
const comma =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/comma.png';
const news1 =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/news1.png';
const news2 =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/news2.png';
const news3 =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/home/news3.png';
const nIcon = 'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/n.png';
const pIcon = 'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/p.png';
const aIcon = 'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/a.png';
const gIcon = 'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/g.png';
const sIcon = 'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/s.png';

export const landingPageData = {
  description:
    'Sell your recyclables online. Get cash and ecocoins for your contribution. Use ecocoins to shop ecofriendly products from our Ecostore. Download Ecocrew now and start your green journey from 0% to 100%.',
  buttonText: 'Download ecocrew',
  landingImages: [
    {
      imgSrc: image1,
      text: 'SELL',
      imgBottom: sell,
    },
    {
      imgSrc: image2,
      text: 'RECYCLE',
      imgBottom: recycle,
    },
    {
      imgSrc: image3,
      text: 'EARN',
      imgBottom: rupee,
    },
  ],
};

export const landingCarouselItems = [
  {
    title: 'SELL',
    imageSrc: image1,
    icon: sell,
  },
  {
    title: 'RECYCLE',
    imageSrc: image2,
    icon: recycle,
  },
  {
    title: 'EARN',
    imageSrc: image3,
    icon: rupee,
  },
];

export const howEcocrewWorks = [
  {
    title: 'Sell Recyclables',
    description:
      'Like paper, cardboard, metal, plastic, shoes, metal old furniture, glass, bottles, clothes, electronics and more',
    imgSrc: conrecycle,
    width: '250px',
  },
  {
    title: 'Earn cash & Eco coins',
    description: 'For your completed recycling pickups',
    imgSrc: conrupee,
    width: '350px',
  },
  {
    title: 'Buy ecofriendly products',
    description: 'On our ecostore by using the ecocoins you earned',
    imgSrc: conbag,
    width: 'full',
  },
];

export const insightsMarquee = {
  marquee1: [
    {
      title: 'Newspapers',
      imgSrc: newspaper,
    },
    {
      title: 'Books/Copies',
      imgSrc: books,
    },
    {
      title: 'Milk Covers',
      imgSrc: milkcover,
    },
    {
      title: 'Black Plastic',
      imgSrc: plastic,
    },
    {
      title: 'Steel',
      imgSrc: steel,
    },
    {
      title: 'Iron',
      imgSrc: iron,
    },
    {
      title: 'Semi automatic washing machine',
      imgSrc: machine,
    },
    {
      title: 'AC',
      imgSrc: ac,
    },
  ],
  marquee2: [
    {
      title: 'Microwave',
      imgSrc: microwave,
    },
    {
      title: 'Ceiling fan',
      imgSrc: fan,
    },
    {
      title: 'Laptop',
      imgSrc: laptop,
    },
    {
      title: 'Mobiles',
      imgSrc: mobile,
    },
    {
      title: 'Form Mattress',
      imgSrc: matress,
    },
    {
      title: 'Clothes',
      imgSrc: clothes,
    },
    {
      title: 'Tyres',
      imgSrc: tyres,
    },
    {
      title: 'Wires',
      imgSrc: wires,
    },
  ],
};

export const insightsCarousel = [
  {
    imgSrc: trees,
    total: '17.4 K',
    title: 'Trees',
  },
  {
    imgSrc: water,
    total: '3.0 M',
    title: 'Ltr water',
  },
  {
    imgSrc: energy,
    total: '4.1 M',
    title: 'kwh energy',
  },
  {
    imgSrc: landfill,
    total: '166.4 K',
    title: 'Landfill space',
  },
  {
    imgSrc: oil,
    total: '1.5 M',
    title: 'Oil saved',
  },
];

export const collectRecyclableData = [
  {
    title: 'Recycling from ',
    highlightTitle: 'schools',
    description:
      'At Ecocrew, we empower students to become environmental change makers. Our school recycling programs are designed to make sustainability engaging, educational, and impactful helping schools build a greener future while teaching kids the value of recycling from an early age.',
    imgSrc: school,
  },
  {
    title: 'Recycling from ',
    highlightTitle: 'universities',
    description:
      'Ecocrew partners with universities and colleges to drive large-scale recycling efforts on campus. Our mission is to make sustainability a lifestyle for students, encouraging ecoconscious habits through organized recycling drives, awareness campaigns, and rewards for participation.',
    imgSrc: uni,
  },
  {
    title: 'Recycling from ',
    highlightTitle: 'companies',
    description:
      'Ecocrew helps businesses and corporate reduce their environmental footprint through smart, efficient recycling solutions. From office waste to e-waste, we offer customized programs that promote corporate sustainability, meet ESG (Environmental, Social, and Governance) goals, and turn recyclables into valuable rewards.',
    imgSrc: company,
  },
];

export const testimonialData = [
  {
    profile: sIcon,
    colon,
    comma,
    review:
      'Very useful app, pick up happened on time and team members are polite and good. A very very small contribution to help our mother earth. Thank you Ecocrew team, you guys are doing a great job 👏👏👏',
    name: 'Sindu PP',
  },
  {
    profile: gIcon,
    colon,
    comma,
    review:
      'It was a seamless experience, they came with a proper weighing machine at the time i booked, properly categorised all my scrap items, calculated the price honestly, paid me and left.',
    name: 'Gopalkrishna M S',
  },
  {
    profile: sIcon,
    colon,
    comma,
    review:
      'Awesome work by Ecocrew...punctual pickup and best app for recycling ..I recommended to all my friends',
    name: 'Srikanya S',
  },
  {
    profile: nIcon,
    colon,
    comma,
    review:
      'The service was good The person was soft spoken Explained the process well Good initiative from the application I have recommended to my friends and family about the app',
    name: 'Navaneetha Krishna',
  },
  {
    profile: pIcon,
    colon,
    comma,
    review:
      'Awesome experience...hassle free pick up...even I liked the behaviour of pick up staff.. I am recommending everyone to use this and contribute to greener environment.',
    name: 'Prashant Shetty',
  },

  {
    profile: aIcon,
    colon,
    comma,
    review:
      'Completely worth it and comfortable.. Easy to schedule and pick up is also pretty convenient and hassle free...',
    name: 'Alisha grace',
  },
];

export const peopleSaysData = [
  {
    link: 'https://www.youtube.com/watch?v=V_q_9MvM7YU',
    title: 'User Interview: Kishor’s journey with ecocrew!',
  },
  {
    link: 'https://www.youtube.com/watch?v=-cyrIpgQzD0',
    title: "User Interview: Avinash's Journey with Ecocrew!",
  },
  {
    link: 'https://www.youtube.com/watch?v=6KuYgabhhsQ',
    title:
      'Join Ecocrew and start making small changes today for a bigger impact on Planet Earth! 🌟',
  },
  {
    link: 'https://www.youtube.com/watch?v=_MA1bADevxw',
    title:
      'Hear from our own DIY guru @vasukiiyengarsoilandhealth1059 how he manages his waste ♻',
  },
];

export const ecoMapsData = [
  {
    percent: 0,
    color: '#717171',
    title: 'Not Ecofriendly',
    Description:
      'Time to turn grey into green! Homes with no pickups in a month are marked grey',
  },
  {
    percent: 25,
    color: '#D67934',
    title: 'In progress',
    Description:
      'You’re on the right track! Attain the yellow status by completing at least one pickup in a month',
  },
  {
    percent: 100,
    color: '#459F17',
    title: 'Ecofriendly',
    Description:
      'Congratulations! Achieve the green status by completing two or more pickups in a month',
  },
];

export const offerForYouData = [
  { cashback: '₹ 250', price: '₹3000' },
  { cashback: '₹ 50', price: '₹1000' },
  { cashback: '₹ 25', price: '₹500' },
];

export const ecocrewNews: EcocrewNewsTypes = {
  title: 'From innovation to impact ecocrew story featured in top publications',
  news: [
    {
      image: news1,
      link: 'https://www.deccanherald.com/india/karnataka/bengaluru/this-two-year-old-app-keeps-recyclables-away-from-landfills-3377294',
    },
    {
      image: news2,
      link: 'https://newskarnataka.com/karnataka/bengaluru/ecocrew-app-declutter-recycle-and-get-paid-in-bengaluru/29012025/#google_vignette',
    },
    { image: news3, link: 'https://www.youtube.com/watch?v=_UfWDAXyGH8' },
  ],
};
