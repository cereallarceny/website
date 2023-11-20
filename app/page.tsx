import Image from 'next/image';
import Link from 'next/link';

import Tooltip from './Tooltip';

import styles from './page.module.css';

import headshot from '../public/me.jpg';
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';
import stackOverflow from '../public/stack-overflow.svg';
import resume from '../public/resume.svg';

// Define the content for the site
const data = {
  name: 'Patrick Cason',
  content: () => (
    <>
      <span>👋 I&apos;m a freelance</span>{' '}
      <Tooltip
        text="software developer"
        parentStyles={styles.highlight}
        childStyles={styles.tooltip}
      >
        15 years and counting, baby!
      </Tooltip>
      <span>,</span>{' '}
      <Tooltip
        text="UI designer"
        parentStyles={styles.highlight}
        childStyles={styles.tooltip}
      >
        design + code === 🦄
      </Tooltip>
      <span>,</span>{' '}
      <Tooltip
        text="engineering manager"
        parentStyles={styles.highlight}
        childStyles={styles.tooltip}
      >
        5 years experience managing up to 80 people
      </Tooltip>
      <span>, and</span>{' '}
      <Tooltip
        text="entrepreneur"
        parentStyles={styles.highlight}
        childStyles={styles.tooltip}
      >
        CTO @{' '}
        <Link href="https://raisefinancial.com" target="_blank" rel="external">
          Raise Financial
        </Link>
      </Tooltip>{' '}
      <span>working remote in Nashville, Tennessee.</span>
    </>
  ),
  social: [
    {
      name: 'GitHub',
      image: github,
      url: 'https://github.com/cereallarceny',
    },
    {
      name: 'LinkedIn',
      image: linkedin,
      url: 'https://www.linkedin.com/in/patrickcason/',
    },
    {
      name: 'Stack Overflow',
      image: stackOverflow,
      url: 'https://stackoverflow.com/users/591776/cereallarceny',
    },
    {
      name: 'Resume',
      image: resume,
      url: '/resume-patrick-cason.pdf',
    },
  ],
};

// The page itself
const Page = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.gradient} />
      <div className={styles.image}>
        <Image src={headshot} alt={data.name} priority fill />
      </div>
      <h1 className={styles.name}>{data.name}</h1>
      <div className={styles.content}>{data.content()}</div>
      <ul className={styles.social}>
        {data.social.map(({ name, image, url }) => (
          <li key={name}>
            <Link href={url} target="_blank" rel="external" prefetch={false}>
              <Image src={image} alt={name} className={styles.socialImage} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default Page;
