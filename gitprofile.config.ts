// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Hellojustjoe', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Joe Vincent',
    description: 'Joe Vincent - Portfolio',
    imageURL: 'https://avatars.githubusercontent.com/u/38983523?v=4',
  },
  social: {
    linkedin: 'hellojustjoe',
    twitter: 'hellojustjoe',
    mastodon: '',
    facebook: '',
    instagram: 'hellojustjoe',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'hellojustjoe',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+447516 306 457',
    email: 'hellojustjoe@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/HelloJustJoe/CV/blob/main/Joe%20Vincent%20CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'SQL',
    'Machine Learning',
    'Deep Learning',
    'MLOps',
    'Tableau',
    'Power BI',
    'Streamlit',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Self-employed',
      position: 'Python Tutor & Data Science and Analysis',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'hellojustjoe.github.io',
    },
    {
      company: 'CACI',
      position: 'InSite Analyst',
      from: 'September 2021',
      to: 'September 2023',
      companyLink: 'https://caci.co.uk',
    },
  ],
  certifications: [
    {
      name: 'Google Data Analytics Professional Certificate',
      body: 'Google & Coursera',
      year: 'January 2024',
      link: 'https://www.linkedin.com/in/hellojustjoe/details/certifications/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADzygh0BaAhxDnhn_OErMKeCmxIvDeL-ltQ',
    },
    {
      name: 'Microsoft Power BI Desktop for Business Intelligence',
      body: 'Udemy',
      year: 'March 2023',
      link: 'https://www.linkedin.com/in/hellojustjoe/details/certifications/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADzygh0BaAhxDnhn_OErMKeCmxIvDeL-ltQ',
    },
    {
      name: 'CompTIA Project+',
      body: 'CompTIA',
      year: 'March 2022',
      link: 'https://www.linkedin.com/in/hellojustjoe/details/certifications/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADzygh0BaAhxDnhn_OErMKeCmxIvDeL-ltQ',
    },
    {
      name: 'CompTIA A+',
      body: 'CompTIA',
      year: 'April 2021',
      link: 'https://www.linkedin.com/in/hellojustjoe/details/certifications/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADzygh0BaAhxDnhn_OErMKeCmxIvDeL-ltQ',
    },
  ],
  educations: [
    {
      institution: 'Le Wagon',
      degree: 'Data Science and AI Diploma',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'The Open University',
      degree: 'CoHE in Data Science',
      from: '2021',
      to: '2024',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Thanks for reading ❤️`,

  enablePWA: true,
};

export default CONFIG;
