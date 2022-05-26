import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SciencePage() {
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
                RAS - Reticular Activating System
              </Text>
              <br />{' '}
              <Text color={'blue.200'} as={'span'}>
                The Science Behind
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.800'}>
            To understand what the reticular activating system does, we first have to know what it is! The reticular activating system, or RAS, is a piece of the brain that starts close to the top of the spinal column and extends upwards around two inches. It has a diameter slightly larger than a pencil. All of your senses (except smell, which goes to our brain's emotional center) are wired directly to this bundle of neurons that's about the size of your little finger.
            Often, the RAS is compared to a filter or a nightclub bouncer that works for your brain. It makes sure your brain doesn't have to deal with more information than it can handle. Thus, the reticular activating system plays a big role in the sensory information you perceive daily.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.800'}>
            Function
            While it may be a fairly small part of your brain, the RAS has a very important role: it's the gatekeeper of information that is let into the conscious mind. This little bit of brain matter is responsible for filtering the massive amounts of information your sensory organs are constantly throwing at it and selecting the ones that are most important for your conscious mind to pay attention to. Why do we need this little gatekeeper? Well, your senses are constantly feeding so much information to your brain that you can't possibly pay attention to all of it. The RAS never gets a break!
            Try to see just how much information you pick up every minute. Take ten seconds and listen to every sound around you that you can perceive...you'll be surprised at what you miss on a regular basis, but this is because your RAS decides what is important and what can be safely ignored. This doesn't just happen with sounds. Our skin is roughly 20 square feet that abounds with around a million nerve cells detecting pressure, pain, temperature, and location. And a human eye captures more than 300 megapixels of visual information every second!
            Despite all of this sensory information, it's estimated that the conscious mind can only handle slightly more than 100 pieces of information every second. There's a tremendous amount of paring down that needs to happen between your senses and your conscious mind. Your RAS is the way evolution has decided to handle this excessive information problem. It is uniquely suited to distinguish between relevant and irrelevant pieces of information. For example, it distinguishes between the honk of a car right next to you and one far down the street, or it tells a husband, 'Unless you want a fight, you better pay attention to what your wife just said!'
            Not only does it do all of that, the RAS also plays an important role in motivation and goal setting. Not bad for something tiny nestled close to your brain stem!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://i0.wp.com/theteenmentor.com/wp-content/uploads/2019/05/Reprogram-your-brain-jane-fuller-the-teen-mentor.jpg?fit=1592%2C1194&ssl=1'
            }
          />
        </Flex>
      </Stack>
    );
  }
  