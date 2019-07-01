import { Flex, Text } from '@rebass/emotion';

export default ({ children }) => (
  <Flex mt={2}>
    <Text fontWeight="bold" color="black">
      ›
    </Text>
    <Text pl={3}>{children}</Text>
  </Flex>
);
