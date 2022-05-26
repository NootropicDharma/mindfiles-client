import {useState} from 'react'
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
  
  export default function NewPalace(props) {
    console.log(props)
    const [title, setTitle] = useState('')
    const [userId, setId] = useState('')
    const {id} = useParams()

    const navigate = useNavigate() // para redireccionar , conviertes en una constante 

    function handleSubmit(event) {
      console.log({title, userId})
      axios.post("http://localhost:5005/api/userpalacenew", {title, userId: props.user?._id}) //como es post recibe un segunto parametro data 
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
            New Project
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
          <FormControl id="rooms" isRequired>
            <FormLabel>id</FormLabel>
            <Input 
            placeholder="agrega tu descripcion" 
            type="text"
            value={userId}
            onChange={(evento)=> setId(evento.target.value)}
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
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }