import styled from '@emotion/styled';
import { Flex, Box, Heading, Text } from '@rebass/emotion';

import ExternalLink from '../external-link';
import Icon from '../icon';

const RolesList = styled.ul({});

const Role = styled.li({});

export default ({ borders, title, description, roles, links }) => (
  <Flex>
    {borders.map(color => (
      <Box key={color} bg={color} width={8} />
    ))}
    <Box>
      <Heading as="h3">{title}</Heading>
      <Text>{description}</Text>
      <RolesList>
        {roles.map(role => {
          if (React.isValidElement(role)) return <Role key={role}>{role}</Role>;

          return (
            <Role key={role}>
              <Text>{role}</Text>
            </Role>
          );
        })}
      </RolesList>
      <Flex>
        {links.map(({ type, link }) => (
          <ExternalLink key={link} to={link}>
            <Icon type={type} />
          </ExternalLink>
        ))}
      </Flex>
    </Box>
  </Flex>
);
