
import {
Box,
chakra,
Container,
Link,
Stack,
Text,
useColorModeValue,
VisuallyHidden,
} from '@chakra-ui/react';

import { ReactNode } from 'react';




export default function SmallCentered() {
    return (
    <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        
        <Stack direction={'row'} spacing={6}>
        <Link href={'/science-loci'}>The Loci Technique</Link>
        <Link href={'/science-ras'}>RAS - The science</Link>
        <Link href={'https://www.linkedin.com/in/david-flores-9b0744236/'}>Contact us</Link>
        </Stack>
        </Container>
        
        <Box
        borderTopWidth={2}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={5}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 MindFiles. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
        
        </Stack>
        </Container>
        </Box>
    </Box>
    );
}