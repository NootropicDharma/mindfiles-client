import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, Link as Linky } from 'react-router-dom'
import {Button as betton} from '@chakra-ui/react'
import './profile.css'
import {
Badge,
Button,
Center,
Flex,
Heading,
Image,
Link,
Stack,
Text,
useColorModeValue,
} from '@chakra-ui/react';

const Profile = (props) => {
    
    console.log(props)
    const {id} = useParams()
    const [info, setInfo] = useState({})
    
    useEffect (()=>{
        axios.get(`http://localhost:5005/api/user`)
        .then(detail => {
            setInfo(detail)
            
            

        })
        .catch(err=>console.log(err))
    },[]); // because it gets updated everytime 


    return (
    <div className='main'>
        
        
        
        <div className="border">
            <div className='divi'>
                <Link to="/new">
            
                </Link>
                <Center py={6}>
                <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '300px', md: '15rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                <Image
                    objectFit="cover"
                    boxSize="100%"
                    src={
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                />
                </Flex>
                <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
            
                </Heading>
                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            
                    {props.user?.username}
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
            
                    <Link href={'#'} color={'blue.400'}>
                    </Link>
                    {props.user?.bio}
                </Text>
                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
            
                    </Badge>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
            
                    </Badge>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
            
                    </Badge>
                    </Stack>
                    <Stack
                    width={'20%'}
                    mt={'2rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
            
                    <Linky to="/new"></Linky>
                    <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    Edit
                    </Button>
                </Stack>
                </Stack>
                </Stack>
                </Center>
            </div>
            <div className='divi2'>
                <Link to="/new">
            
                </Link>
                <Center py={6}>
                <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '800px' }}
                height={{ sm: '476px', md: '40rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('gray', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
            
                <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
            
                </Heading>
                <Text fontWeight={600} color={'white.500'} size="sm" mb={4}>
            
                Gustos y hobbies
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('white.700', 'white.400')}
                    px={3}>
                    Datos personales
                    <Text fontSize={'3xl'} fontWeight={600}   color={'white'}>{props.user?.palaces[0]?.title}</Text>
                    <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[1]?.title}</Text>
                    <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[2]?.title}</Text>
                    <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[3]?.title}</Text>
                    <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[4]?.title}</Text>
                </Text>
                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
            Libros Favoritos
                    </Badge>
                    <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
            Memorias Favoritas
                    </Badge>
                    </Stack>
                    <Stack
                    width={'50%'}
                    mt={'2rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Linky to="/new"></Linky>
                    <Linky to="/new">
                        <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'green.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Create a Place
                        </Button>
                    </Linky>
                </Stack>
                </Stack>
                </Stack>
                </Center>
            </div>
        </div>

    </div>
    )
}

export default Profile