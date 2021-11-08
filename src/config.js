// config.js
module.exports = {
  github: {
    username: 'Vatsal272120', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'vatsalpatel272120',
    twitter: '',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    devto: '',
    website: 'https://vatsal272120.github.io',
    phone: '+91 9023665633',
    email: 'vatsalpatel1073@gmai.com',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Vue.js',
    'Node.js',
    'Jquery',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Tailwind',
    'Bootstrap',
    'Firebase',
    'Django',
    'Flask',
    'Redux',
  ],
  experiences: [
    {
      company: 'A1 Acids Pvt Ltd',
      position: 'Contract Web Developer',
      from: 'October 2019',
      to: 'Present',
    },
    {
      company: 'Suburban Medical Center',
      position: 'React Developer',
      from: 'January 2017',
      to: 'July 2019',
    },
    {
      company: 'Orangetoolz',
      position: 'Jr. Full Stack Engineer',
      from: 'July 2019',
      to: 'December 2019',
    },
    {
      company: 'Techvillage',
      position: 'Jr. Software Engineer',
      from: 'January 2019',
      to: ' June 2019',
    },
  ],

  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-6DS1T18LSB', // Please remove this and use your own tag id
  },
  hotjar: {
    id: '', //  Please remove this and use your own id
    snippetVersion: 6,
  },
  themeConfig: {
    default: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should we use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded default
    respectPrefersColorScheme: true,

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
    ],
  },
};
