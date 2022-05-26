import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SciencePage2() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: '',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.100',
                  zIndex: -1,
                }}>
                LOCI - Mind Palace
              </Text>
              <br />{' '}
              <Text color={'blue.200'} as={'span'}>
                What is Loci?
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.800'}>
            A Mind Palace (originally referred to as the Method of Loci), is a memory device used to commit a large amount of information to memory by combining visual and spatial memory. Loci is Latin for “places”, and the ancient Greeks are credited for creating this method.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.800'}>
            The memory palace technique is about changing your memories into images placed in a familiar mental location. The idea is that you can mentally walk through your Palace looking at your memories to recall them.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'full'}
            src={
              'https://artofmemory.com/static/2d24becb5650fd2fd542bbf662a50f00/dbdff/Ceos_Memory_Palace_Example.jpg'
            }
          />
        </Flex>
      </Stack>
    );
  }
  