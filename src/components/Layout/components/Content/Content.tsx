import {
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack
} from '@chakra-ui/react';

export function Content() {
  return (
    <HStack alignItems={'stretch'} p={8} spacing={8}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacingX={4}
        spacingY={8}
        w={'full'}
      >
        {Array(10)
          .fill('')
          .map((_, idx) => ContentItem(idx))}
      </SimpleGrid>

      {/* Aside */}

      <VStack
        display={{ base: 'none', md: 'initial' }}
        spacing={4}
        minW={'3xs'}
        w={'3xs'}
      >
        {Array(6)
          .fill('')
          .map((_, idx) => AsideItem(idx))}
      </VStack>
    </HStack>
  );

  function AsideItem(idx: number) {
    return (
      <HStack key={idx} w={'full'}>
        <SkeletonCircle boxSize={6} speed={0} />
        <SkeletonText
          endColor={'bg.dker'}
          flexGrow={1}
          noOfLines={1}
          speed={0}
        />
      </HStack>
    );
  }

  function ContentItem(idx: number) {
    return (
      <VStack key={idx} spacing={4}>
        <Skeleton bg={'bg.dk'} h={32} speed={0} w={'full'} />
        <SkeletonText endColor={'bg.dker'} noOfLines={2} speed={0} w={'full'} />
      </VStack>
    );
  }
}
