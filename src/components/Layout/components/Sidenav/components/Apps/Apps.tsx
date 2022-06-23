import { items } from './data.items';

import { Icon, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';

import { IconType } from 'react-icons';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SidenavItem } from '../SidenavItem';

export function Apps() {
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
        <Text>Applications</Text>
        <Spacer />
      </SidenavItem>

      <VStack spacing={2} w={'full'} {...disclosureProps}>
        {items.map((item) => Item(item))}
      </VStack>
    </VStack>
  );

  function Item(props: {
    href: string;
    icon: IconType;
    iconColor: string;
    label: string;
    count: number;
  }) {
    const { href, icon, iconColor, label, count } = props;

    return (
      <SidenavItem key={href} leftIcon={<Icon as={icon} color={iconColor} />}>
        {label}
        <Spacer />
        <Text color={'text.lt'}>{count}</Text>
      </SidenavItem>
    );
  }
}
