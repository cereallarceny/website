import { useState } from 'react';
import { Flex, Image, Box, Heading, Text, Button } from '@rebass/emotion';
import AnimateHeight from 'react-animate-height';

import Page from '../components/page';
import Project from '../components/project';
import ExternalLink from '../components/external-link';
import Icon from '../components/icon';

import content from '../content/homepage';

const { name, avatar, social, tagline, bio, opinions, projects } = content;

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
          <Button
            variant="learnMore"
            width={['100%', 'auto']}
            my={3}
            onClick={() => {
              if (showBio) {
                if (showOpinions) {
                  setShowOpinions(false);

                  setTimeout(() => setShowBio(false), 500);
                } else {
                  setShowBio(false);
                }
              } else {
                setShowBio(true);
              }
            }}
          >
            <Text as="span">{showBio ? 'Close' : 'Learn more'}</Text>
          </Button>
        </Box>
        <AnimateHeight
          height={showBio ? 'auto' : 0}
          animateOpacity
          opacityDelay={500}
        >
          <Text fontSize={3} color="mediumGray" lineHeight="normal">
            {bio}
          </Text>
          <Button
            variant="learnMore"
            width={['100%', 'auto']}
            my={3}
            onClick={() => setShowOpinions(!showOpinions)}
          >
            <Text as="span">
              {showOpinions ? 'Hide opinions' : 'Show opinions'}
            </Text>
          </Button>
        </AnimateHeight>
        <AnimateHeight
          height={showOpinions ? 'auto' : 0}
          animateOpacity
          opacityDelay={500}
        >
          <Text fontSize={3} color="darkGray" lineHeight="normal">
            {opinions}
          </Text>
        </AnimateHeight>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Page>
  );
};
