import { Flex, Image, Box, Heading, Text } from '@rebass/emotion';

import Page from '../components/page';
import Project from '../components/project';
import ExternalLink from '../components/external-link';
import Icon from '../components/icon';

import content from '../content/homepage';

const { name, avatar, social, tagline, bio, learnMore, projects } = content;

export default () => (
  <Page>
    <Flex>
      <Image
        src={avatar}
        alt={name}
        width={128}
        height={128}
        borderRadius={8}
      />
      <Box>
        <Heading as="h1">{name}</Heading>
        {social.map(({ type, link }) => (
          <ExternalLink key={link} to={link}>
            <Icon type={type} />
          </ExternalLink>
        ))}
        <Text>{tagline}</Text>
        <Text>{bio}</Text>
        <Text>{learnMore}</Text>
      </Box>
    </Flex>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </Page>
);
