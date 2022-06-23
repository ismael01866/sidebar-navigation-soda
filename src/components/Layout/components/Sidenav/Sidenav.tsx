import { StackDivider, VStack } from '@chakra-ui/react';

import { Apps, Home, Categories, Team } from './components';

export function Sidenav() {
  return (
    <VStack
      px={4}
      py={8}
      divider={<StackDivider borderColor="border.lt" />}
      spacing={4}
    >
      <Home />
      <Categories />
      <Apps />
      <Team />
    </VStack>
  );
}
