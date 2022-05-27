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
        axios.get(`${process.env.REACT_APP_SERVER_URL}/user`)
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
                <Text fontSize={'3xl'} fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            
                    {props.user?.username}
                </Text>
                <Text 
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
            
                    <Link href={'#'} color={'blue.400'}>
                    </Link>
                    "I have sworn upon the altar of god, eternal hostility against every form of tyranny over the mind of man."
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
                borderWidth="4px"
                borderRadius="lg"
                w={{ sm: '100%', md: '1200px' }}
                height={{ sm: '476px', md: '40rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('clear', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <img src="/images/Memory+Palace+Example.png" alt="hi" />
                <Stack
                flex={1}
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                <Text fontSize={'5xl'} fontWeight={600} color={'orange.100'}>
                        Palaces
                </Text>
                </Heading>
                <Text fontWeight={600} color={'white.500'} size="sm" mb={4}>
            
                
                </Text>

                <Text
                    textAlign={'center'}
                    color={useColorModeValue('white.700', 'white.400')}
                    px={3}>
                    
                    <ul>
                        <li>
                            <Text fontSize={'3xl'} fontWeight={600}   color={'white'}>{props.user?.palaces[0]?.title}</Text>
                        </li>
                        <li>
                            <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[1]?.title}</Text>
                        </li>
                        <li>
                            <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[2]?.title}</Text>
                        </li>
                        <li>
                            <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[3]?.title}</Text>
                        </li>
                        <li>
                            <Text fontSize={'3xl'} fontWeight={600}  color={'white'}>{props.user?.palaces[4]?.title}</Text>
                                                
                        </li>
                    </ul>
                </Text>
                
                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    </Stack>
                        <Stack
                        width={'50%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'flex-end'}
                        alignItems={'center'}>
                        
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