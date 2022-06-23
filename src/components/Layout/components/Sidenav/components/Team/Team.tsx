import { items } from './data.items';

import {
  Avatar,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SidenavItem } from '../SidenavItem';

export function Team() {
  const { isOpen, getDisclosureProps, getButtonProps } = useDisclosure({
    defaultIsOpen: true
  });

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return (
    <VStack spacing={4} w={'full'}>
      <SidenavItem
        color={'text.lt'}
        leftIcon={<Icon as={isOpen ? FaAngleDown : FaAngleUp} />}
        {...buttonProps}
      >
        <Text>Team</Text>
        <Spacer />
      </SidenavItem>

      <VStack spacing={2} w={'full'} {...disclosureProps}>
        {items.map((item) => Item(item))}
      </VStack>
    </VStack>
  );

  function Item(props: { href: string; label: string; src: string }) {
    const { href, label, src } = props;

    return (
      <SidenavItem key={href} gap={4}>
        <Avatar boxSize={4} src={src} />
        {label}
        <Spacer />
      </SidenavItem>
    );
  }
}
