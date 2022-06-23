import { Button } from '@chakra-ui/react';

export function SidenavItem(props: any) {
  const { ...others } = props;

  return (
    <Button
      fontWeight={'bold'}
      iconSpacing={4}
      size={'xs'}
      variant={'ghost'}
      w={'full'}
      {...others}
    ></Button>
  );
}
