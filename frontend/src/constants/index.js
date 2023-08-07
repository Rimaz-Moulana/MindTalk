import { people01, people02, people03, facebook, instagram, linkedin, twitter, who, medicaid, healthline, dropbox, send, shield, star, img1, img2, img3 } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "About ",
  },
  {
    id: "features",
    title: "Test",
  },
  {
    id: "product",
    title: "Join",
  },
  {
    id: "product",
    title: "Testimonials",
  },

];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "Win amazing prizes and free tickets to boot camps by WHO and other organisations.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Loyalty Transfer",
    content:
      "Get points after helping a friend reach out to us and stay connected.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "MindTalk has been a game-changer for me. It provided me with the tools and support I needed to overcome my darkest moments. Through personalized activities and the amazing community, I found solace, understanding, and hope. I am now more resilient, happier, and in control of my life. Thank you, MindTalk!",
    name: "Sarah Jensen",
    title: "Software Engineer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "I cannot express how grateful I am for MindTalk. It has been a lifeline during my tough times. The personalized activities helped me develop healthier thought patterns and coping mechanisms. Connecting with others who understood my struggles made me feel less alone. MindTalk gave me the strength to overcome my challenges and find my inner happiness again.",
    name: "Steve Mark",
    title: "High School Teacher",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "MindTalk has been my constant companion on my journey towards emotional well-being. The app's resources and techniques gently guided me out of the darkness and into a place of light. Being part of a supportive community gave me a sense of belonging and encouragement. I am now living a life filled with positivity and purpose. MindTalk truly changed my life!",
    name: "Josh Gallagher",
    title: "Marketing Manager",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "200+",
  },
  {
    id: "stats-2",
    title: "Trusted Counsellors and doctors",
    value: "30+",
  },
  {
    id: "stats-3",
    title: "On-going processes",
    value: "170+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: who,
  },
  {
    id: "client-2",
    logo: medicaid,
  },
  {
    id: "client-3",
    logo: healthline,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

//Counselor Dashboard
export const CardsData = [
  {
    id: "1",
    title: "Completed Sessions",
    color: {
      backGround: "linear-gradient(180deg,#03045E 0%, #0077B6 100%)",
      boxShadow: "0px 10px 20px 0px #90E0EF",

    },
    barValue: 70,
    value: "25,970",
    // png: UilUsdSquare,
    series: [
      {
        name: "Completed Sessions",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

      },
    ],
  },
  {
    id: "2",
    title: "Cancelled Sessions",
    color: {

      backGround: "linear-gradient(180deg,#03045E 0%, #0077B6 100%)",
      boxShadow: "0px 10px 20px 0px #90E0EF",


    },
    barValue: 30,
    value: "5,480",
    // png: UilClipboardAlt,
    series: [
      {
        name: "Cancelled Sessions",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
    ],

  },
  {
    id: "3",
    title: "Pending Sessions",
    color: {

      backGround: "linear-gradient(180deg,#03045E 0%, #0077B6 100%)",
      boxShadow: "0px 10px 20px 0px #90E0EF",


    },
    barValue: 60,
    value: "4,470",
    // png: UilClipboardAlt,
    series: [
      {
        name: "Pending Sessions",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
    ],

  },


  {
    id: "4",
    title: "Amount Received",
    color: {
      backGround: "linear-gradient(180deg,#03045E 0%, #0077B6 100%)",
      boxShadow: "0px 10px 20px 0px #90E0EF",

    },
    barValue: 80,
    value: "9,780",
    // png: UilMoneyWithdrawal,
    series: [{
      name: "Amount Received",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

    },
    ],
  },





];


//Counselor Dashboard
export const UpdatesData = [
  {
    id: "1",
    img: img1,
    name: "Kaveesha Muthukuda",
    noti: "Slow Progress",
    time: "2 hours ago",
  },
  {
    id: "2",
    img: img2,
    name: "Michelle Fernando",
    noti: "Recovered",
    time: "12 hours ago",
  },
  {
    id: "3",
    img: img3,
    name: "Pathum Dias",
    noti: "Under Medications",
    time: "1 day ago",
  }
];