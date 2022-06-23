import {
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  Spacer
} from '@chakra-ui/react';

export function Header() {
  return (
    <Flex px={8} py={4}>
      <Spacer />
      <HStack spacing={4}>
        {Array(3)
          .fill('')
          .map((_, idx) => (
            <Skeleton key={idx} bgColor={'bg.dker'} h={5} w={5} speed={0} />
          ))}
        <Spacer />
        <SkeletonCircle speed={0} />
        <Skeleton h={8} w={20} speed={0} />
      </HStack>
    </Flex>
  );
}
