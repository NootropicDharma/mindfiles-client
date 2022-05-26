import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; // para redireccionar
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
    
    export default function CreateRoomPage(props) {
    console.log(props)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rooms, setRooms] = useState([])
    const [palaces, setPalaces] = useState([])
    const [Id, setId] = useState("")
    const [roomid, setroomId] = useState('')
    const {id} = useParams()

    const navigate = useNavigate() // para redireccionar , conviertes en una constante 
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/palacesbyuser/${props.user?._id}`)
        .then( palaces => {
            setPalaces(palaces.data)
        })
        .catch(console.log)
    }, [])
    
    useEffect (()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/roomsbypalace/${Id}`)
        .then(rooms=>{
            setRooms(rooms.data)
            console.log(rooms.data)
        })
        console.log('obtener los rooms del palace', Id )
    },[Id])

    


    function handleSubmit(event) {
    // console.log({title,description, roomId})
      axios.post(`${process.env.REACT_APP_SERVER_URL}/newroommemory`, {title,description,roomId: Id}) //como es post recibe un segunto parametro data 
    .then( nuevoProjecto => {
        navigate('/allpalaces')
    })
    .catch(console.log)
    }


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
                Add a memory
            </Heading>
            <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                placeholder="agrega un titulo"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={title} // this is the important part 
                onChange={(evento)=> setTitle(evento.target.value)}
                />
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel>description</FormLabel>
                <Input
                placeholder="agrega un titulo"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={description} // this is the important part 
                onChange={(evento)=> setDescription(evento.target.value)}
                />
            </FormControl>
            <select placeholder="Seleccionar palacio" onChange={(event) => setId(event.target.value) } >
                <option>Selecciona un palacio</option>
                { 
                    palaces.map( palace => {
                        return <option value={palace._id} key={palace._id}>{palace.title}</option>
                    })
                }
            </select>
            <select placeholder="Seleccionar room" onChange={(event) => setroomId(event.target.value) } >
                <option>Selecciona tu room</option>
                { 
                    rooms.map( room => {
                        return <option value={room._id} key={room._id}>{room.title}</option>
                    })
                }
            </select>

            <Stack spacing={6}>
                <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                    bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                Submit
                </Button>
            </Stack>
            </Stack>
        </Flex>
        );
    }