import Opinion from '../components/opinion';

import patrick from '../static/headshot.jpg';

export default {
  name: 'Patrick Cason',
  avatar: patrick,
  social: [
    {
      type: 'github',
      link: 'https://github.com/cereallarceny'
    },
    {
      type: 'linkedin',
      link: 'https://linkedin.com/in/patrickcason/'
    },
    {
      type: 'medium',
      link: 'https://medium.com/@cereallarceny'
    },
    {
      type: 'stack-overflow',
      link: 'https://stackoverflow.com/users/591776/cereallarceny'
    }
  ],
  tagline: (
    <React.Fragment>
      I'm a <strong>software engineer</strong> and <strong>UI designer</strong>{' '}
      working <strong>remotely in Lisbon, Portugal</strong>.
    </React.Fragment>
  ),
  bio:
    "I've worked for the past 10 years as a technologist in the politics, finance, healthcare, hospitality, and music industries. In particular I'm interested in online privacy, open-source software, and ethical programming.",
  opinions: (
    <React.Fragment>
      A few strong opinions:
      <Opinion>
        People should own, host, and fully control all of their online
        information.
      </Opinion>
      <Opinion>
        The term "user experience" should not be used as an excuse to monitor
        and manipulate individuals.
      </Opinion>
      <Opinion>
        Technology should be designed to serve people, rewarding intuition and
        promoting non-addictive behavior.
      </Opinion>
    </React.Fragment>
  ),
  projects: [
    {
      borders: ['#e0bc88', '#0f0'],
      title: 'OpenMined',
      description:
        'An open-source community focused on researching, developing, and promoting tools for secure, privacy-preserving, value-aligned artificial intelligence',
      roles: [
        'Founding member and community manager',
        'Author of syft.js',
        'Developed website and manages dev-ops infrastructure'
      ],
      links: [
        {
          type: 'website',
          link: 'https://openmined.org'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/openminedorg'
        },
        {
          type: 'github',
          link: 'https://github.com/openmined'
        }
      ]
    },
    {
      borders: ['#e0bc88', '#0f0'],
      title: 'Scholar Raise',
      description:
        "A fintech service that helps people save for their child's college education using crowdfunding and automated investment management",
      roles: [
        'Chief Product Officer',
        'Responsible for all design, development, and infrastructure',
        'Leads a fully remote staff in weekly SCRUM meetings'
      ],
      links: [
        {
          type: 'website',
          link: 'https://scholarraise.com'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/scholarraise'
        },
        {
          type: 'facebook',
          link: 'https://facebook.com/scholarraise'
        },
        {
          type: 'instagram',
          link: 'https://instagram.com/scholarraise'
        }
      ]
    },
    {
      borders: ['#e0bc88', '#0f0'],
      title: 'Moonshot',
      description:
        'A mashup between an open-source collective, design studio, and a dev shop all roled into one',
      roles: [
        'Working on multiple open-source projects simultaneously',
        'Available for work - insert seed money, receive bacon'
      ],
      links: [
        {
          type: 'website',
          link: 'https://moonshot.is/awesome'
        },
        {
          type: 'github',
          link: 'https://github.com/mnsht'
        }
      ]
    }
  ]
};
