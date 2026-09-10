import Image from 'next/image';
import Link from 'next/link';

import Tooltip from './Tooltip';

import styles from './page.module.css';

import headshot from '../public/headshot-alt2.jpeg';
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';
import stackOverflow from '../public/stack-overflow.svg';
import resume from '../public/resume.svg';

// Define the content for the site
const data = {
  name: 'Patrick Cason',
  content: () => (
    <>
      <span>👋 I&apos;m an</span>{' '}
      <Tooltip
        text="AI engineering leader"
        parentStyles={styles.highlight}
        childStyles={styles.tooltip}
      >
        View my {' '}
        <Link href="https://www.linkedin.com/in/patrickcason" target="_blank" rel="external">
          LinkedIn
        </Link>
      </Tooltip>
      <span>,</span>{' '}
      <Tooltip
        text="technical advisor"
        parentStyles={styles.highlight}
        childStyles={styles.tooltip}
      >
        <Link href="https://www.gofractional.com/member/patrick-cason" target="_blank" rel="external">
          Work
        </Link> with me
      </Tooltip>
      <span>, and</span>{' '}
      <Tooltip
        text="software engineer"
        parentStyles={styles.highlight}
        childStyles={styles.tooltip}
      >
        Check my{' '}
        <Link href="https://github.com/cereallarceny" target="_blank" rel="external">
          commits
        </Link>
      </Tooltip>{' '}
      <span>focused on RL environments and human data, based Nashville.</span>
    </>
  ),
  social: [
    // {
    //   name: 'LinkedIn',
    //   image: linkedin,
    //   url: 'https://www.linkedin.com/in/patrickcason/',
    // },
    // {
    //   name: 'GitHub',
    //   image: github,
    //   url: 'https://github.com/cereallarceny',
    // }
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
