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
    
    export default function CreateNote(props) {
    console.log(props)
    const [BookTitle, setBookTitle] = useState('')
    const [Pages, setPages] = useState('')
    const [What, setWhat] = useState('')
    const [Where, setWhere] = useState('')
    const [When, setWhen] = useState('')
    const [Who, setWho] = useState('')
    
    const [Id, setId] = useState("")
    const [roomId, setroomId] = useState('')
    const [memoryId, setmemoryId] = useState('')

    const [rooms, setRooms] = useState([])
    const [palaces, setPalaces] = useState([])
    const [memories, setMemories] = useState ([])

    const {id} = useParams()

    const navigate = useNavigate() 
    
    // para redireccionar , conviertes en una constante 

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/palacesbyuser/${props.user?._id}`)
        .then( palaces => {
            setPalaces(palaces.data)
        })
        .catch(console.log)
    }, [])
    
    useEffect (()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/roomsbypalace/${Id}`)
        .then(rooms =>{
            setRooms(rooms.data)
        })
        console.log('obtener los rooms del palace', Id )
    },[Id])

    useEffect (()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/memoriesbyroom/${roomId}`)
        .then(memories =>{
            setMemories(memories.data)
            
        })
        console.log('obtener las memories del ROOMID' )
    },[roomId])

    


    function handleSubmit(event) {
    // console.log({title,description, roomId})
      axios.post(`${process.env.REACT_APP_SERVER_URL}/newroommemory`, {BookTitle,Pages,What,Where,When,Who,memoryId: Id}) //como es post recibe un segunto parametro data 
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
                New Book note
            </Heading>
            <FormControl id="title" isRequired>
                <FormLabel>BookTitle</FormLabel>
                <Input
                placeholder="agrega un titulo"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={BookTitle} // this is the important part 
                onChange={(evento)=> setBookTitle(evento.target.value)}
                />
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel>Pages</FormLabel>
                <Input
                placeholder="Pages"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={Pages} // this is the important part 
                onChange={(evento)=> setPages(evento.target.value)}
                />
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel>What</FormLabel>
                <Input
                placeholder="What"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={What} // this is the important part 
                onChange={(evento)=> setWhat(evento.target.value)}
                />
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel>Where</FormLabel>
                <Input
                placeholder="Where"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={Where} // this is the important part 
                onChange={(evento)=> setWhere(evento.target.value)}
                />
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel>When</FormLabel>
                <Input
                placeholder="When"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={When} // this is the important part 
                onChange={(evento)=> setWhen(evento.target.value)}
                />
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel>Who</FormLabel>
                <Input
                placeholder="Who"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={Who} // this is the important part 
                onChange={(evento)=> setWho(evento.target.value)}
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
            <select placeholder="Seleccionar memory" onChange={(event) => setmemoryId(event.target.value) } >
                <option>Select your memory</option>
                { 
                    memories.map( memory => {
                        return <option value={memory._id} key={memory._id}>{memory.title}</option>
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