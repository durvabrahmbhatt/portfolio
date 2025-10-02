import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'durvabrahmbhatt2016@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Durva, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    linkedINPortfolio: 'https://www.linkedin.com/in/durvabrahmbhatt/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/durvabrahmbhatt' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/durvabrahmbhatt/' },
    // { name: 'facebook', url: 'https://www.facebook.com/Durva.2000' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    //ERRANDO
    {
        title: 'Errando',
        slug: 'errando',
        liveUrl: 'https://erranddo.com/home', // add if you have a live URL
        year: 2023,
        description: `
      A full-stack service marketplace platform built with React.js and Node.js, designed to connect over 1,500+ users with local service providers using a postcode-based search system powered by Google API. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📍 Postcode-Based Search: Location-aware service discovery powered by Google API</li>
        <li>💬 Real-Time Chat: Firebase-powered messaging between customers and providers</li>
        <li>💳 Secure Payments: Seamless Stripe integration for reliable transactions</li>
        <li>🎯 Lead Management: Credit-based system for providers to access high-quality leads</li>
        <li>📱 Fully Responsive: Optimized UI for all devices</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed real-time chat infrastructure using Firebase Realtime Database</li>
        <li>Integrated Stripe for secure and user-friendly payments</li>
        <li>Designed scalable backend APIs with Node.js and Express</li>
        <li>Optimized marketplace flows for improved customer retention (+30%)</li>
        <li>Deployed and scaled services on AWS infrastructure</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Contributed across the entire development lifecycle:
      <ul>
        <li>✅ Backend: Built REST APIs in Node.js/Express and integrated Stripe for payments</li>
        <li>🎨 Frontend: Developed responsive UI with React.js and Tailwind CSS</li>
        <li>🔄 State Management: Managed client-side state and dynamic updates</li>
        <li>💬 Real-Time Communication: Implemented Firebase-based chat system</li>
        <li>🚀 Deployment: Assisted with AWS deployment and scaling</li>
        <li>🧩 Third-Party Integration: Used Google API for location-based search</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Node.js',
            'Firebase',
            'AWS',
            'Stripe',
            'Google API',
            'Tailwind CSS',
        ],
        // thumbnail: '/projects/thumbnail/errando.webp',
        // longThumbnail: '/projects/long/errando.webp',
        // images: [
        //     '/projects/images/errando-1.webp',
        //     '/projects/images/errando-2.webp',
        // ],
    },
    //TAROCK
    {
        title: 'Tarock',
        slug: 'tarock',
        liveUrl: 'https://tarock.com/', // add if you have a live URL
        year: 2023,
        description: `
      A social-driven personality assessment application built with Node.js, Express.js, and Adonis.js, enabling users to perform card-based personality tests, compare results, and engage with the community through social features. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🃏 Personality Assessments: Interactive card-based tests with detailed scoring</li>
        <li>📊 Comparative Results: Accurate score calculation and user-to-user comparison</li>
        <li>👥 Social Features: Posting, comments, likes, and friend requests to boost interaction</li>
        <li>🏆 Point-Based Rewards: Engagement-driven reward system for consistent user activity</li>
        <li>💳 Subscription Services: RevenueCat integration for iOS and Google platforms</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built and maintained two versions of the Tarock app using Node.js, Express.js, and Adonis.js</li>
        <li>Engineered algorithms to calculate personality scores with accuracy and fairness</li>
        <li>Developed scalable APIs to support social engagement and friend interactions</li>
        <li>Integrated RevenueCat for cross-platform subscription management</li>
        <li>Implemented point-based system to increase user engagement and retention</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Contributed across multiple versions of the application:
      <ul>
        <li>✅ Backend: Designed APIs with Node.js, Express.js, and Adonis.js</li>
        <li>🎨 Frontend: Developed responsive components with React.js</li>
        <li>📊 Personality Logic: Implemented robust scoring system for card tests</li>
        <li>👥 Social Engagement: Added posts, likes, comments, and friend request features</li>
        <li>💳 Payments: Integrated RevenueCat for subscription handling</li>
        <li>🚀 Deployment: Assisted with AWS deployment and scaling</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'Adonis.js',
            'AWS',
            'RevenueCat',
            'Stripe',
        ],
        // thumbnail: '/projects/thumbnail/tarock.webp',
        // longThumbnail: '/projects/long/tarock.webp',
        // images: [
        //     '/projects/images/tarock-1.webp',
        //     '/projects/images/tarock-2.webp',
        // ],
    },

    //EPIKART
    // {
    //     title: 'Epikcart',
    //     slug: 'epikcart',
    //     techStack: [
    //         'React',
    //         'Redux',
    //         'React i18n',
    //         'Tailwind CSS',
    //         'Framer Motion',
    //         'debouncing',
    //         'Api Integration',
    //     ],
    //     // thumbnail: '/projects/thumbnail/epikcart.jpg',
    //     // longThumbnail: '/projects/long/epikcart.jpg',
    //     // images: [
    //     //     '/projects/images/epikcart-1.png',
    //     //     '/projects/images/epikcart-2.png',
    //     //     '/projects/images/epikcart-3.png',
    //     //     '/projects/images/epikcart-4.png',
    //     //     '/projects/images/epikcart-5.png',
    //     // ],
    //     liveUrl: 'https://demo.epikcart.siphertech.com/',
    //     year: 2023,
    //     description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
    //     role: `As the frontend developer in a team of five, I: <br/>
    //     - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
    //     - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
    //     - Integrated multi-language support with React i18n, including RTL handling.<br/>
    //     - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    // },

    //TRACK-O-BILL
    {
        title: 'Track-O-Bill',
        slug: 'track-o-bill',
        liveUrl: '', // add if you deployed it
        year: 2024,
        description: `
      A full-stack expense tracking web application designed to help users efficiently manage and categorize their expenses with a clean and responsive interface. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>💰 Expense Management: Add, view, and categorize expenses seamlessly</li>
        <li>⚡ Fast Frontend: React + Vite for a highly responsive and optimized UI</li>
        <li>🛡️ Secure Backend: Django backend for user data management and secure storage</li>
        <li>📊 Categorization & Insights: Organized expense tracking with categories</li>
        <li>📱 Fully Responsive: Optimized UI for both desktop and mobile devices</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed frontend with React.js and Vite for fast rendering and responsiveness</li>
        <li>Implemented backend with Django, ensuring robust and secure data handling</li>
        <li>Integrated SQLite database for lightweight, efficient storage</li>
        <li>Built REST APIs for smooth communication between frontend and backend</li>
        <li>Styled with Tailwind CSS for a clean, modern design</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the development process end-to-end:
      <ul>
        <li>✅ Backend: Built Django APIs for expense management and secure data handling</li>
        <li>🎨 Frontend: Designed and implemented UI using React.js, Vite, and Tailwind CSS</li>
        <li>🔗 API Integration: Connected frontend with backend via REST APIs</li>
        <li>🗂️ Database: Managed SQLite for storing and retrieving expense data</li>
        <li>🚀 Deployment: Prepared application for production-ready deployment</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Vite',
            'Django',
            'SQLite',
            'REST APIs',
            'Tailwind CSS',
        ],
        // thumbnail: '/projects/thumbnail/track-o-bill.webp',
        // longThumbnail: '/projects/long/track-o-bill.webp',
        // images: [
        //     '/projects/images/track-o-bill-1.webp',
        //     '/projects/images/track-o-bill-2.webp',
        // ],
    },

    //MEDIDATA ANALYSIS
    {
        title: 'MediData Analysis',
        slug: 'medidata-analysis',
        liveUrl: 'https://github.com/durvabrahmbhatt/MediData-Analysis.git', // add if you hosted Streamlit app
        year: 2024,
        description: `
      A healthcare-focused data analysis platform leveraging machine learning and AI to predict diseases, generate insights, and visualize global health patterns. Built with Python, Streamlit, and Gemini AI for impactful data-driven healthcare decisions. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🧬 Disease Prediction: Machine learning models (Logistic Regression, SVC) predicting 40+ conditions from symptoms</li>
        <li>🤖 AI-Generated Insights: Gemini AI integration for actionable healthcare recommendations</li>
        <li>📊 Data Visualizations: Jupyter-based interactive graphs showcasing disease trends and mortality patterns</li>
        <li>🖥️ Streamlit Interface: Intuitive user-friendly dashboard for data interaction</li>
        <li>🌍 Multi-Source Integration: Combined datasets to improve report accuracy (+25%)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented machine learning models in Python for predictive healthcare analysis</li>
        <li>Enhanced decision-making efficiency by 30% through AI-powered insights</li>
        <li>Built interactive Streamlit dashboard to allow non-technical users to explore data</li>
        <li>Created analytical reports and visualizations in Jupyter Notebook</li>
        <li>Integrated multiple datasets to improve accuracy and reliability of predictions</li>
      </ul>
      `,
        role: `
      Data Scientist / Full-Stack ML Developer <br/>
      Owned the full lifecycle of the project:
      <ul>
        <li>✅ Machine Learning: Trained and optimized Logistic Regression & SVC models for disease prediction</li>
        <li>🤖 AI Integration: Used Gemini AI to generate personalized healthcare insights</li>
        <li>🎨 Frontend: Built interactive dashboards with Streamlit for user accessibility</li>
        <li>📊 Data Visualization: Designed compelling graphs in Jupyter Notebook to illustrate health trends</li>
        <li>🚀 Data Engineering: Integrated multi-source datasets for improved accuracy</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Streamlit',
            'Machine Learning',
            'Jupyter Notebook',
            'Gemini AI',
            'Pandas',
            'Scikit-learn',
        ],
        // thumbnail: '/projects/thumbnail/medidata-analysis.webp',
        // longThumbnail: '/projects/long/medidata-analysis.webp',
        // images: [
        //     '/projects/images/medidata-1.webp',
        //     '/projects/images/medidata-2.webp',
        // ],
    },

    //NUTRIPRO ANALYTICS
    {
        title: 'NutriPro Analytics Platform',
        slug: 'nutripro-analytics',
        liveUrl: 'https://github.com/durvabrahmbhatt/NutriPro-Analysis.git',
        year: 2024,
        description: `
      A web-based analytics platform for evaluating amino acid profiles of protein samples against FAO/WHO reference patterns. The platform enables nutritional researchers to assess protein quality and visualize amino acid adequacy across datasets. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📂 Data Upload: Import Excel sheets for amino acid profile analysis</li>
        <li>📊 Amino Acid Score Calculation: Automated scoring aligned with FAO/WHO reference patterns</li>
        <li>📈 Interactive Visualizations: Pie charts, bar graphs, and styled tables for clear data interpretation</li>
        <li>🔍 Data Processing: Normalization and filtering by year/food item</li>
        <li>💾 Export Options: Download results as CSV for further analysis</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed interactive Streamlit app for seamless data input and exploration</li>
        <li>Built visualizations using Plotly for dynamic and interactive graphs</li>
        <li>Applied data processing workflows in Python with Pandas</li>
        <li>Implemented normalization and filtering for better dataset insights</li>
        <li>Delivered export-ready results improving usability for researchers</li>
      </ul>
      `,
        role: `
      Data Analyst / Full-Stack Developer <br/>
      Owned the development of the analytics platform:
      <ul>
        <li>✅ Backend: Designed Python workflows for amino acid scoring and dataset normalization</li>
        <li>🎨 Frontend: Built an interactive dashboard using Streamlit</li>
        <li>📊 Visualization: Used Plotly for pie charts, bar graphs, and styled tables</li>
        <li>📂 Data Handling: Enabled Excel uploads and CSV exports for flexible reporting</li>
        <li>🚀 Analytics Workflow: Streamlined full-stack data analysis pipeline for researchers</li>
      </ul>
      `,
        techStack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Excel', 'CSV'],
        // thumbnail: '/projects/thumbnail/nutripro.webp',
        // longThumbnail: '/projects/long/nutripro.webp',
        // images: [
        //     '/projects/images/nutripro-1.webp',
        //     '/projects/images/nutripro-2.webp',
        // ],
    },

    // CAR PRICE ANALYSIS
    {
        title: 'Car Price Analysis Platform',
        slug: 'car-price-analysis',
        liveUrl: 'https://github.com/durvabrahmbhatt/Car-Price-Analysis.git', // add GitHub link if available
        year: 2024,
        description: `
      A Java-based platform built to aggregate and analyze car prices from multiple automotive websites, enabling users to compare deals in real time with high accuracy and efficiency. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🚗 Real-Time Price Aggregation: Custom web crawler to fetch live car prices from diverse sources</li>
        <li>🔍 Fast Search: Implemented Tries with inverted indexing for optimized model lookups</li>
        <li>📊 Price Analysis: Automated data extraction and comparison for better deal evaluation</li>
        <li>⚡ Efficient Web Scraping: JSoup-powered crawler for accurate and up-to-date pricing</li>
        <li>📱 User-Centric Experience: Simplified vehicle comparison workflow through data-driven insights</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed a custom web crawler using JSoup for structured data extraction</li>
        <li>Applied Tries data structure to enhance search speed and efficiency</li>
        <li>Integrated web scraping and data analysis pipelines for real-time updates</li>
        <li>Implemented indexing algorithms to handle large automotive datasets</li>
        <li>Delivered an intuitive comparison interface for end users</li>
      </ul>
      `,
        role: `
      Software Developer <br/>
      Contributed to all aspects of the application:
      <ul>
        <li>✅ Backend: Built Java-based web crawler with JSoup for live pricing data</li>
        <li>📊 Data Analysis: Implemented algorithms for price aggregation and comparison</li>
        <li>🔍 Search Optimization: Designed and integrated Tries for fast car model lookups</li>
        <li>⚡ Performance: Optimized data pipelines for scalability and responsiveness</li>
        <li>🚀 Deployment: Delivered a functional platform simplifying automotive deal evaluation</li>
      </ul>
      `,
        techStack: ['Java', 'JSoup', 'Tries', 'Web Scraping', 'Data Analysis'],
        // thumbnail: '/projects/thumbnail/carprice.png',
        // longThumbnail: '/projects/long/carprice.png',
        // images: [
        //     '/projects/images/carprice.png',
        //     '/projects/images/carprice.png',
        // ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Research Intern',
        company: 'University of Windsor',
        duration: 'Jan 2024 - Apr 2024',
    },
    {
        title: 'Software Developer',
        company: 'Kode Creators Pvt Ltd',
        duration: 'Dec 2022 - Nov 2023',
    },
    {
        title: 'Software Engineer',
        company: 'DevKrutiTech Pvt Ltd',
        duration: 'Jan 2022 - Nov 2022',
    },
];
