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
    console.log('que hay' ,user)
    
    useEffect (()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/palaces/${id}`)
        .then(detail => {
            setDatos(detail.data)
            setCargo(true)

        })
        .catch(err=>console.log(err))
    },[id]); // because it gets updated everytime 

    function handleDelete(){
      axios.delete(`${process.env.REACT_APP_SERVER_URL}/palaces/${id}`)
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
                <table>
         
{/* 
        {
          user.user?.map( (info) => {
            console.log('el mapeo',info)
            return <div>
                      <tbody>
                      <tr>
                      <td>{info.palaces}</td>
                      <td>{}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      </tr>
                      </tbody>
                  </div>
          })
        } */}


          <thead>
            <tr>
        <th></th>
        <th>Room type</th>
        <th>Memory</th>
        <th>Note</th>
        <th>description</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
        <td>1</td>
        <td>{user?.palaces[0]?.rooms[0]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[0]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
          {user?.palaces[0]?.rooms[0]?.memories[0]?.notes[0]?.BookTitle}
        </td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[0]?.memories[0]?.description}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[1]?.description}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[2]?.description}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[3]?.description}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[4]?.description}</li>
            <li>{user?.palaces[0]?.rooms[0]?.memories[5]?.description}</li>
          </ul>
        </td>
            </tr>
            <tr>
        <td>2</td>
        <td>{user?.palaces[0]?.rooms[1]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[1]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[1]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[1]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[1]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[1]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[1]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[1]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[1]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[1]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[1]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[1]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[1]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[1]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>3</td>
        <td>{user?.palaces[0]?.rooms[2]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[2]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[2]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[2]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[2]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[2]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[2]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[1]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[2]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[2]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[2]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[2]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[2]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[2]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>4</td>
        <td>{user?.palaces[0]?.rooms[3]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[3]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[3]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[3]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[3]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[3]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[3]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[1]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[4]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>5</td>
        <td>{user?.palaces[0]?.rooms[4]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[4]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[4]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[4]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[4]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[4]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[4]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[4]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[4]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[4]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>6</td>
        <td>{user?.palaces[0]?.rooms[5]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[5]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[5]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[5]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[5]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[5]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[5]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[5]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[5]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[5]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[5]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[5]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[5]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[5]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>7</td>
        <td>{user?.palaces[0]?.rooms[6]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[6]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[6]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[6]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[6]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[6]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[6]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[6]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[6]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[6]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[6]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[6]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[6]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[6]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>8</td>
        <td>{user?.palaces[0]?.rooms[7]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[7]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[7]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[7]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[7]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[7]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[7]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[7]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[7]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[7]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[7]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[7]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[7]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[7]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>9</td>
        <td>{user?.palaces[0]?.rooms[8]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[8]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[8]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[8]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[8]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[8]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[8]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[8]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[8]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[8]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[8]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[8]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[8]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[8]?.memories[5]?.description}</li>
        </ul>
        </td>
            </tr>
            <tr>
        <td>10</td>
        <td>{user?.palaces[0]?.rooms[9]?.title}</td>
        <td>
          <ul>
            <li>{user?.palaces[0]?.rooms[9]?.memories[0]?.title}</li>
            <li>{user?.palaces[0]?.rooms[9]?.memories[1]?.title}</li>
            <li>{user?.palaces[0]?.rooms[9]?.memories[2]?.title}</li>
            <li>{user?.palaces[0]?.rooms[9]?.memories[3]?.title}</li>
            <li>{user?.palaces[0]?.rooms[9]?.memories[4]?.title}</li>
            <li>{user?.palaces[0]?.rooms[9]?.memories[5]?.title}</li>
          </ul>
        </td>
        <td>
        {user?.palaces[0]?.rooms[9]?.memories[0]?.notes[0]?.BookTitle}</td>
        <td>
        <ul>
          <li>{user?.palaces[0]?.rooms[9]?.memories[0]?.description}</li>
          <li>{user?.palaces[0]?.rooms[9]?.memories[1]?.description}</li>
          <li>{user?.palaces[0]?.rooms[9]?.memories[2]?.description}</li>
          <li>{user?.palaces[0]?.rooms[9]?.memories[3]?.description}</li>
          <li>{user?.palaces[0]?.rooms[9]?.memories[4]?.description}</li>
          <li>{user?.palaces[0]?.rooms[9]?.memories[5]?.description}</li>
        </ul>
        </td>
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

