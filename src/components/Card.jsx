import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const IMAGE =
    'https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064';

export default function PalaceSimple(props) {
    console.log('aqui esta',props)
    const {losdatos} = props;
    return (
        
            <Link to={`/palaces/${losdatos._id}`}>
            <Center py={12}>
                <Box
                role={'group'}
                p={6}
                maxW={'600px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'300px'}
                    _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${IMAGE})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                    }}
                    _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                    }}>
                    <Image
                    rounded={'lg'}
                    height={300}
                    width={600}
                    objectFit={'cover'}
                    src={IMAGE}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    Palace
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {losdatos.title}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        rooms: {losdatos.numberOfRooms}
                    </Text>
                    <Text textDecoration={'row'} color={'gray.600'}>
                        
                    </Text>
                    </Stack>
                    <Button colorScheme='purple'>details</Button>
                </Stack>
                </Box>
            </Center>
        </Link>
        );
    }