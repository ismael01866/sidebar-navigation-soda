import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { items } from './data.items';

import {
  Box,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react';

import { SidenavItem } from '../SidenavItem';

export function Categories() {
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
        <Text>Categories</Text>
        <Spacer />
      </SidenavItem>

      <VStack spacing={2} w={'full'} {...disclosureProps}>
        {items.map((item) => Item(item))}
      </VStack>
    </VStack>
  );

  function Item(props: {
    href: string;
    color: string;
    label: string;
    count: number;
  }) {
    const { href, color, label, count } = props;

    return (
      <SidenavItem key={href}>
        <Box bg={color} rounded={'sm'} boxSize={2} mr={5} />
        {label}
        <Spacer />
        <Text color={'text.lt'}>{count}</Text>
      </SidenavItem>
    );
  }
}
