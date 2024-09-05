import { Behance, Facebook, Github, LinkedIn } from './svgImages'

// Navbar Data
export const menuData = {
  logoLight: '/images/RDIGS_Logo.svg',
  logoDark: '/images/RDIGS_Logo.svg',
  btnLlink: '/request-demo',
  menuContent: [
    {
      id: 2,
      title: 'About',
      path: '/about',
      newTab: false,
    },
    {
      id: 3,
      title: 'Services',
      path: '/services',
      newTab: false,
    },
    {
      id: 4,
      title: 'Resources',
      submenu: [
        {
          id: 4.1,
          title: 'Blog',
          path: '/blog',
          newTab: false,
        },
        {
          id: 4.2,
          title: 'Case Studies',
          path: '/integration',
          newTab: false,
        },
        {
          id: 4.3,
          title: 'Media Kit',
          path: '/teams/1',
          newTab: false,
        },
        {
          id: 4.4,
          title: 'News Letters',
          path: '/testimonial',
          newTab: false,
        },
      ],
    },
    {
      id: 5,
      title: 'Inside',
      submenu: [
        {
          id: 5.1,
          title: 'Career',
          path: '/career',
          newTab: false,
        },
        {
          id: 5.2,
          title: 'Leadership',
          path: '/teams',
          newTab: false,
        },
        // {
        //   id: 5.3,
        //   title: 'Blog categories',
        //   path: '/categories/Marketing',
        //   newTab: false,
        // },
        // {
        //   id: 5.4,
        //   title: 'Blog tags',
        //   path: '/tags/Benefits',
        //   newTab: false,
        // },
      ],
    },
    {
      id: 6,
      title: 'Contact',
      path: '/contact',
      newTab: false,
    },
  ],
}
// Clients
export const ClientData = [
  {
    id: 1,
    imageLight: '/images/clients/MPO.jpg',
    imageDark: '/images/clients/AnAlog.svg',
  },
  {
    id: 2,
    imageLight: '/images/clients/Oracle.jpg',
    imageDark: '/images/clients/infinity-dark.svg',
  },
  {
    id: 3,
    imageLight: '/images/clients/Veeam.jpg',
    imageDark: '/images/clients/artifact-dark.svg',
  },
  {
    id: 4,
    imageLight: '/images/clients/BSB.jpg',
    imageDark: '/images/clients/caudile-dark.svg',
  },
  {
    id: 5,
    imageLight: '/images/clients/Goto.jpg',
    imageDark: '/images/clients/axeptio-dark.svg',
  },
  {
    id: 6,
    imageLight: '/images/clients/Mitel.jpg',
    imageDark: '/images/clients/mfinity-dark.svg',
  },
]

export const ServiceData = [
  {
    id: 1,
    slug: 'investment-bank',
    title: 'ACCOUNT-BASED MARKETING',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/investment.svg',
    iconDark: '/images/services/investment-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 2,
    slug: 'sales',
    title: 'INTELLIGENT B2B SOLUTIONS',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/sales.svg',
    iconDark: '/images/services/sales-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 3,
    slug: 'mortage-loan',
    title: 'INTENT-BASED MARKETING',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/loan.svg',
    iconDark: '/images/services/loan-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 4,
    slug: 'finance-analyse',
    title: 'SALES DEVELOPMENT',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/finance.svg',
    iconDark: '/images/services/finance-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 5,
    slug: 'effeciency',
    title: 'DIGITAL MARKETING',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/effeciency.svg',
    iconDark: '/images/services/effeciency-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 6,
    slug: 'fund',
    title: 'BRAND AWARENESS',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/fund.svg',
    iconDark: '/images/services/fund-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
]

export const CounterData = [
  {
    id: 1,
    number: '100',
    rightIcon: '+',
    text: 'Marketing Professionals',
  },
  {
    id: 2,
    number: '600',
    rightIcon: '+',
    text: 'Projects Delivered',
  },
  {
    id: 3,
    number: '1',
    rightIcon: 'M+',
    text: 'Leads Delivered',
  },
]

export const FAQData = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is lead generation?',
    answer:
      'Lead generation is the process of attracting and converting prospects into potential customers who have shown interest in your products or services.',
  },
  {
    id: 2,
    type: ['general'],
    question: 'How does lead generation benefit my business?',
    answer:
      'Lead generation helps your business by providing a steady stream of potential customers who are more likely to convert, thus increasing your sales and revenue.',
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'What methods do you use for lead generation?',
    answer:
      'We employ a variety of methods including digital marketing (SEO, PPC, content marketing), social media marketing, email marketing, and outbound strategies like cold calling and direct mail.',
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'How do you qualify leads?',
    answer:
      'We use lead scoring and qualification criteria tailored to your business to ensure that the leads we provide are likely to be interested and ready to engage with your sales team.',
  },
  {
    id: 5,
    type: ['changelog', 'terms'],
    question: ' Can you target specific demographics or industries for leads?',
    answer:
      'Yes, we can target leads based on specific demographics, industries, geographic locations, and other criteria that are relevant to your business.',
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'How do you ensure the quality of leads generated?',
    answer:
      'We focus on quality over quantity by using advanced targeting techniques, continuous optimization of campaigns, and regular analysis of lead performance.',
  },
]

export const TestimonialData = [
  {
    id: 1,
    logoLight: '/images/testimonial/bodygroup.png',
    logoDark: '/images/testimonial/bodygroup-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 4,
    author: {
      name: 'Robert Frost',
      designation: 'Lead Developer',
      image: '/images/testimonial/avatar1.png',
    },
  },
  {
    id: 2,
    logoLight: '/images/testimonial/caudile.svg',
    logoDark: '/images/testimonial/caudile-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Guy Hawkins',
      designation: 'Developer',
      image: '/images/testimonial/avatar2.png',
    },
  },
  {
    id: 3,
    logoLight: '/images/testimonial/axeptio.png',
    logoDark: '/images/testimonial/axeptio-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 3,
    author: {
      name: 'Cody Fisher',
      designation: 'UI Designer',
      image: '/images/testimonial/avatar3.png',
    },
  },
  {
    id: 4,
    logoLight: '/images/testimonial/infinity.png',
    logoDark: '/images/testimonial/infinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 2,
    author: {
      name: 'Albert Flores',
      designation: 'Sr. Developer',
      image: '/images/testimonial/avatar4.png',
    },
  },
  {
    id: 5,
    logoLight: '/images/testimonial/mfinity.png',
    logoDark: '/images/testimonial/mfinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 1,
    author: {
      name: 'Floyed Miles',
      designation: 'Junior Designer',
      image: '/images/testimonial/avatar5.png',
    },
  },
  {
    id: 6,
    logoLight: '/images/testimonial/coolchat.png',
    logoDark: '/images/testimonial/coolchat-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Bessie Cooper',
      designation: 'Manager',
      image: '/images/testimonial/avatar6.png',
    },
  },
]

export const PaymentRatingData = [
  {
    id: 1,
    rating: 4.7,
    name: 'Capterra',
    desc: 'Top Customer Fulfilment',
  },
  {
    id: 2,
    rating: 4.6,
    name: 'Capterra',
    desc: 'Best Payment Software',
  },
  {
    id: 3,
    rating: 4.9,
    name: 'Trustpilot',
    desc: 'Top Payment Company',
  },
]

export const CoreFeatures = [
  {
    id: 1,
    title: 'Useful Features',
    iconLight: '/images/payment/invoice.svg',
    iconDark: '/images/payment/invoice-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    title: 'Insights and Reports',
    iconLight: '/images/payment/insight.svg',
    iconDark: '/images/payment/insight-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    title: 'Managing Inventory',
    iconLight: '/images/payment/inventory.svg',
    iconDark: '/images/payment/inventory-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    title: 'Organized Expense',
    iconLight: '/images/payment/expens.svg',
    iconDark: '/images/payment/expens-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    title: 'Organize Receipts',
    iconLight: '/images/payment/receipts.svg',
    iconDark: '/images/payment/receipts-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    title: 'Mobile App',
    iconLight: '/images/payment/app.svg',
    iconDark: '/images/payment/app-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const PaymentFeaturesData = [
  {
    id: 1,
    iconLight: '/images/payment/paymentFeature.svg',
    iconDark: '/images/payment/paymentFeature-dark.svg',
    title: 'Useful Features',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/payment/payementSecure.svg',
    iconDark: '/images/payment/payementSecure-dark.svg',
    title: '100% Secure',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/payment/paymentCashback.svg',
    iconDark: '/images/payment/paymentCashback-dark.svg',
    title: 'Cashback Program',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const PricingData = [
  {
    id: 1,
    featured: false,
    title: 'Basic',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '19.00',
    priceYearly: '230.00',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 2,
    featured: true,
    title: 'Standard',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '32.00',
    priceYearly: '350.00',
    save: '40%',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 3,
    featured: false,
    title: 'Premium',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '48.00',
    priceYearly: '530.00',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
]

export const BankingServicesData = [
  {
    id: 1,
    iconLight: '/images/banking/agent.svg',
    iconDark: '/images/banking/agent-dark.svg',
    title: 'Agent Banking',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/banking/savings.svg',
    iconDark: '/images/banking/savings-dark.svg',
    title: 'Savings Account',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/banking/interest.svg',
    iconDark: '/images/banking/interest-dark.svg',
    title: 'Low Interest',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const teamData = [
  {
    id: 1,
    name: "Roland D'costa",
    designation: 'Founder',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team1.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 2,
    name: 'Ajay Rawat',
    designation: 'Chief Operating Officer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team2.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 3,
    name: 'Sharad Salve',
    designation: 'Chief Service Delivery Officer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team3.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 4,
    name: 'Wade Wareen',
    designation: 'Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team4.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 5,
    name: 'Bessie Cooper',
    designation: 'Product Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team5.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 6,
    name: 'Jacob Jones',
    designation: 'Art Director',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team6.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
]

export const AboutFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Our Mission',
    desc: 'Our mission at RDIGS is to help businesses expand their customer base through cutting-edge B2B lead generation, nurturing, and maximizing ROI. With innovative strategies, advanced technology, and a dedicated team, we forge partnerships that deliver exceptional results, ensuring timely and impactful outcomes for our clients.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Our Beginning',
    desc: "Since 2016, we've rapidly grown into a global leader in B2B lead and demand generation, pioneering customized solutions that exceed expectations. With a commitment to excellence, advanced technology, and personalized service, we deliver consistent results tailored to each client's unique needs.",
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Our Mission',
    desc: 'At RDIGS, we envision revolutionizing the B2B industry with intelligent, growth-driven solutions. We empower businesses to achieve their marketing goals through advanced technologies, high-quality leads, and effective audience engagement.',
  },
]

export const AboutImages = [
  {
    id: 1,
    image: '/images/about/about1.png',
  },
  {
    id: 2,
    image: '/images/about/about2.png',
  },
  {
    id: 3,
    image: '/images/about/about3.png',
  },
]

export const IntegrationData = [
  {
    id: 1,
    image: '/images/figma.svg',
    title: 'Figma',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    image: '/images/dropbox.svg',
    title: 'Dropbox',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    image: '/images/twitter.svg',
    title: 'Twitter/X',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    image: '/images/slack.svg',
    title: 'Slack',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    image: '/images/google-drive.svg',
    title: 'Google Drive',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    image: '/images/asana.svg',
    title: 'Asana',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  footerText:
    "To achieve our client’s marketing and ROI goals, our team of industry veterans is committed to exceeding their expectations at every turn.We begin by deeply understanding our clients' unique challenges, objectives",
  copyright: `${new Date().getFullYear()} RDIGS. All Rights Reserved`,
  email: 'contact@rdigs.com',
  phone: '+91 848-404-0734',
  phone2: '  +1 302 786 1953',

  expolre: [
    {
      id: 1,
      name: 'About',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'Career',
      link: '/career',
    },

    {
      id: 6,
      name: "Faq's",
      link: '/faq',
    },
    {
      id: 7,
      name: 'Testimonials',
      link: '/testimonial',
    },
  ],
  resources: [
    {
      id: 2,
      name: 'Media Kit',
      link: '/',
    },

    {
      id: 4,
      name: 'Blog',
      link: '/blog',
    },
    {
      id: 5,
      name: 'case-studies',
      link: '/',
    },
    {
      id: 6,
      name: 'e-Books',
      link: '/',
    },
    {
      id: 7,
      name: 'Newsletter',
      link: '/',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
}
