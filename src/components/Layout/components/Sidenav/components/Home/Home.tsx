import { items } from './data.items';

import { Icon, Spacer, VStack } from '@chakra-ui/react';

import { IconType } from 'react-icons';
import { SidenavItem } from '../SidenavItem';

export function Home() {
  return (
    <VStack spacing={2} w={'full'}>
      {items.map((item) => Item(item))}
    </VStack>
  );

  function Item(props: { href: string; icon: IconType; label: string }) {
    const { href, icon, label } = props;

    return (
      <SidenavItem key={href} leftIcon={<Icon as={icon} color={'text.lt'} />}>
        {label}
        <Spacer />
      </SidenavItem>
    );
  }
}
