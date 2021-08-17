import { Flex, Box, Heading, Text } from '@rebass/emotion';

import Page from '../components/page';
import ExternalLink from '../components/external-link';
import Icon from '../components/icon';
import Avatar from '../components/avatar';

import content from '../content/homepage';

const { name, avatar, social, tagline, bio } = content;

export default () => {
  const paragraphProps = {
    fontSize: 3,
    color: 'darkGray',
    lineHeight: 'tall'
  };

  return (
    <Page>
      <Box p={[3, 4]} width={[1, null, 2 / 3, 1 / 2]}>
        <Flex alignItems="center" mb={3}>
          <Avatar src={avatar} alt={name} />
          <Box>
            <Heading as="h1" fontSize={[4, 5]} pb={2}>
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
          <Text {...paragraphProps}>{tagline}</Text>
          <Text {...paragraphProps} color="mediumGray" mt={3}>
            {bio}
          </Text>
        </Box>
      </Box>
    </Page>
  );
};
