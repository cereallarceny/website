import { Text } from '@rebass/emotion';
import avatar from '../static/headshot.jpg';

const Strong = ({ children }) => (
  <Text as="span" fontWeight={600}>
    {children}
  </Text>
);

export default {
  name: 'Patrick Cason',
  avatar,
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
      type: 'stack-overflow',
      link: 'https://stackoverflow.com/users/591776/cereallarceny'
    },
    {
      type: 'resume',
      link: '/static/resume.pdf'
    }
  ],
  tagline: (
    <React.Fragment>
      I'm a <Strong>software engineer</Strong> and <Strong>UI designer</Strong>{' '}
      working <Strong>remotely in Nashville, Tennessee</Strong>.
    </React.Fragment>
  ),
  bio:
    "I've worked for the past 15 years as a technologist in the politics, finance, healthcare, hospitality, and music industries. In particular I'm interested in digital privacy, open-source software, and ethical programming."
};
