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
        // console.log("data", props.user)
        const [title, setTitle] = useState('')
        const [Id, setId] = useState("")
        const [palaces,setPalaces] = useState([])
        const {id} = useParams()

        const navigate = useNavigate() // para redireccionar , conviertes en una constante 

        //Pidamos al back los palace que existen
        useEffect(() => {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/palacesbyuser/${props.user?._id}`)
            .then( palaces => {
                setPalaces(palaces.data)
            })
            .catch(console.log)
        }, [])
        
        useEffect (()=>{
            console.log('obtener los rooms del palace', Id )
        },[Id])

        function handleSubmit(event) {
            console.log({title, Id})
            axios.post(`${process.env.REACT_APP_SERVER_URL}/newroom`, {title, palaceId: Id}) //como es post recibe un segunto parametro data 
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
                        New Room
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
            {/* <FormControl id="rooms" isRequired>
                <FormLabel>id</FormLabel>
                <Input 
                placeholder="agrega tu descripcion" 
                type="text"
                value={palaceId}
                onChange={(evento)=> setId(evento.target.value)}
                />
                
            </FormControl> */}
            <h2>{ Id }</h2>


            {/* SELECT  */}
            <select placeholder="Seleccionar palacio" onChange={(event) => setId(event.target.value) } >
                <option>Selecciona un palacio</option>
                { 
                    palaces.map( palace => {
                        return <option value={palace._id} key={palace._id}>{palace.title}</option>
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