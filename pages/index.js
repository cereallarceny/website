import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';

import Page from '../components/page';

import patrick from '../static/patrick.jpg';

const Basic = styled.div(
  css({
    backgroundColor: 'white',
    color: 'cornflowerblue',
    border: '1px solid lightgreen',
    padding: '1rem 0.5rem'
  })
);

export default () => (
  <Page>
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
        }
      `}
    />
    <Basic>Hello!</Basic>
    <img src={patrick} alt="Patrick Cason" />
  </Page>
);
