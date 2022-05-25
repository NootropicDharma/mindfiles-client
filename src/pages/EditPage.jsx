import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'; // para redireccionar
import {
        Button,
        Flex,
        FormControl,
        FormLabel,
        Heading,
        Input,
        Stack,
        useColorModeValue,
} from '@chakra-ui/react';
    
export default function EditPage() {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [rooms, setRooms] = useState(0)

    const navigate = useNavigate() // para redireccionar , conviertes en una constante 

    function handleSubmit(event) {
    
    axios.put(`http://localhost:5005/api/palaces/${id}`, {title, numberOfRooms: rooms}) //como es post recibe un segunto parametro data 
        .then( nuevoProjecto => {
        navigate('/allpalaces')
        })
        .catch(console.log)
        }

        useEffect (()=>{
            console.log('obtener datos de', id)
            axios.get(`http://localhost:5005/api/palaces/${id}`)
            .then(datos =>{
                setTitle(datos.data.title)
                setRooms(datos.data.numberOfRooms)
            })
        },[id])


        return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            onSubmit={handleSubmit}
            >
            
            <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                new memory details 
            </Heading>
            <FormControl id="title" isRequired>
                <FormLabel>Palace name</FormLabel>
                <Input
                placeholder="agrega un titulo"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={title} // this is the important part 
                onChange={(evento)=> setTitle(evento.target.value)}
                />
            </FormControl>
            
            <FormControl id="Room" isRequired>
                <FormLabel>Rooms</FormLabel>
                <Input 
                placeholder="0-10" 
                type="number"
                value={rooms}
                onChange={(evento)=> setRooms(evento.target.value)}
                />
                
            </FormControl>
            <Stack spacing={6}>
                <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                    bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                save
                </Button>
            </Stack>
            </Stack>
        </Flex>
        );
    }