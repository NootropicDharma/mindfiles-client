import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AddIcon, ChevronDownIcon, DeleteIcon, EditIcon, SettingsIcon } from '@chakra-ui/icons';
import './DetailPage.css'

import {
    Box,
    Heading,
    Link,
    Text,
    useColorModeValue,
    Container,
    Skeleton,
    Button,
    IconButton,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    PopoverBody,
    Popover,
    Portal,
    useToast,
    MenuButton,
    MenuList,
    MenuItem,
    Menu

} from '@chakra-ui/react';

import {Link as Clicky} from 'react-router-dom'




const DetailPage = (props) => {
    const [datos, setDatos] = useState({})
    //toggle
    const [cargo, setCargo] = useState(false)
    const {id} = useParams()
    const toast = useToast()
    const navigate = useNavigate()
    const {user} = props
    console.log(props)
    
    useEffect (()=>{
        axios.get(`http://localhost:5005/api/palaces/${id}`)
        .then(detail => {
            setDatos(detail.data)
            setCargo(true)

        })
        .catch(err=>console.log(err))
    },[id]); // because it gets updated everytime 

    function handleDelete(){
      axios.delete(`http://localhost:5005/api/palaces/${id}`)
        .then(() =>{
        
                toast({
                  title: 'Account deleted.',
                  description: "We have deleted your account.",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })
                navigate('/allpalaces')
              })
      }
    
        
  return (
      <div className='capi'>
        <Container maxW={'7xl'} p="12">
          <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center">
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    borderRadius="lg"
                    src={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycmM_uUD4aZ5wrQDffQw3DB-aNXReqPdhQw&usqp=CAU'
                    }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link> */}
                <table>
          <caption>{user?.palaces[0]?.title}</caption>
          <thead>
            <tr>
        <th>Rooms</th>
        <th>Room number</th>
        <th>Memory</th>
        <th>Note</th>
        <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
        <td>laundry room</td>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>dogs house</td>
        <td>2</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Dad's room</td>
        <td>3</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Backyard</td>
        <td>4</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Babies room</td>
        <td>5</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Camp</td>
        <td>6</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Storage</td>
        <td>7</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Bathroom</td>
        <td>8</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Livingroom</td>
        <td>9</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
            <tr>
        <td>Kitchen</td>
        <td>10</td>
        <td></td>
        <td></td>
        <td></td>
            </tr>
          </tbody>
          
        </table>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                  )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}>
              <Skeleton height='20px' isLoaded={cargo}>
                  <Heading marginTop="1">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    {datos.title}
                    rooms 
                    </Link>
                  </Heading>
                  <Text
                    as="p"
                    marginTop="2"
                    color={useColorModeValue('gray.700', 'gray.200')}
                    fontSize="lg">
                  </Text>
                  <Popover>
                        <PopoverTrigger>
                        <IconButton
                  variant="outline"
                  colorScheme="blue"
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<SettingsIcon/>}
                  />
                        </PopoverTrigger>
                      <Portal>
                        <PopoverContent>
                          <PopoverCloseButton />
                          <PopoverBody>
                          <Menu>
          {({ isOpen }) => (
            <>
        <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
          {isOpen ? '' : 'Settings'}
        </MenuButton>
        <MenuList>
          <MenuItem>
                  <Clicky to ={`/edit/${id}`}>
                  {/* aqui es lo mismo si pones id o _id por que ay params arriba  */}
                    <IconButton
                    variant="outline"
                    colorScheme="green"
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<EditIcon/>}
                    /> edit details
                  </Clicky></MenuItem>
          <MenuItem>
            <Clicky to ={`/createroom`}>
                  {/* aqui es lo mismo si pones id o _id por que ay params arriba  */}
                    <IconButton
                    variant="outline"
                    colorScheme="green"
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<AddIcon/>}
                    /> add rooms
            </Clicky>
          </MenuItem>
            <MenuItem>
              <Clicky to ={`/creatememory`}>
                    {/* aqui es lo mismo si pones id o _id por que ay params arriba  */}
                      <IconButton
                      variant="outline"
                      colorScheme="green"
                      aria-label='Call Sage'
                      fontSize='20px'
                      icon={<AddIcon/>}
                      /> add memories
              </Clicky>
            </MenuItem>
              <MenuItem>
                <Clicky to ={`/createnote`}>
                      {/* aqui es lo mismo si pones id o _id por que ay params arriba  */}
                        <IconButton
                        variant="outline"
                        colorScheme="green"
                        aria-label='Call Sage'
                        fontSize='20px'
                        icon={<AddIcon/>}
                        /> create new Note
                </Clicky>
              </MenuItem>
          <MenuItem>
          <Button colorScheme='red' onClick={handleDelete}> {<DeleteIcon/>}</Button>
          </MenuItem>
        </MenuList>
            </>
          )}
        </Menu>
        
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                  </Popover>
              </Skeleton>
            </Box>
          </Box>
        
        </Container>
      </div>
      
  );
};

export default DetailPage;

