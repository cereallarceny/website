import { useState } from 'react';
import { Flex, Image, Box, Heading, Text, Link } from '@rebass/emotion';
import AnimateHeight from 'react-animate-height';

import Page from '../components/page';
import Project from '../components/project';
import ExternalLink from '../components/external-link';
import Icon from '../components/icon';

import content from '../content/homepage';

const { name, avatar, social, tagline, bio, learnMore, projects } = content;

export default () => {
  const [showBio, setShowBio] = useState(false);
  const [showOpinions, setShowOpinions] = useState(false);

  return (
    <Page>
      <Box p={3}>
        <Flex alignItems="center" mb={3}>
          <Image
            src={avatar}
            alt={name}
            width={[72, 96]}
            height={[72, 96]}
            borderRadius={8}
            mr={3}
          />
          <Box>
            <Heading as="h1" fontSize={[4, 5]} mb={[2, 3]}>
              {name}
            </Heading>
            {social.map(({ type, link }) => (
              <ExternalLink key={link} to={link} mr={3}>
                <Icon type={type} />
              </ExternalLink>
            ))}
          </Box>
        </Flex>
        <Box>
          <Text fontSize={3} color="darkGray" lineHeight="tall">
            {tagline}
          </Text>
          <Link onClick={() => setShowBio(!showBio)}>Learn more</Link>
        </Box>
        <AnimateHeight
          height={showBio ? 'auto' : 0}
          animateOpacity
          opacityDelay={500}
        >
          <Text fontSize={3} color="mediumGray" lineHeight="normal">
            {bio}
          </Text>
        </AnimateHeight>
        {/* <Text fontSize={3} color="darkGray" lineHeight="normal">
          {learnMore}
        </Text> */}
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Page>
  );
};
