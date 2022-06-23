import { Grid, GridItem, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Header, Content, Sidenav } from './components';

export function Layout() {
  return (
    <Grid
      minH={'100vh'}
      gridTemplateColumns={'auto 1fr'}
      gridTemplateRows={'auto 1fr'}
      templateAreas={`"header header" "nav main"`}
    >
      <GridItem
        area={'header'}
        bgColor={'bg.base'}
        borderBottom={'1px solid'}
        borderColor={'border.base'}
      >
        <Header />
      </GridItem>

      <GridItem area={'nav'} bg={'bg.lt'} w={'3xs'}>
        <Sidenav />
      </GridItem>

      <GridItem area={'main'}>
        <Content />
      </GridItem>
    </Grid>
  );
}
