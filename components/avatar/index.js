import styled from '@emotion/styled';
import { Box, Image } from '@rebass/emotion';

const ImageContainer = styled(Box)({
  position: 'relative',
  '&:after': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: 'inset 0px 0px 0px 8px rgba(255, 255, 255, 0.5)',
    borderRadius: 9999,
    content: '""'
  }
});

const size = {
  width: [80, 96],
  height: [80, 96]
};

export default ({ src, alt }) => (
  <ImageContainer {...size} mr={3}>
    <Image src={src} alt={alt} borderRadius={9999} {...size} />
  </ImageContainer>
);
