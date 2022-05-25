import {useState} from 'react'
import './PalacePage.css'
import {Button, Text, Textarea} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PalacePage = () => {
    const [What, setWhat] = useState('')
    const [Where, setWhere] = useState('')
    const [When, setWhen] = useState('')
    const [Who, setWho] = useState('')
    const navigate = useNavigate()
    function enviarDatos ()  {
        const newApt = {
            What,
            Where,
            When,
            Who
        }
        axios.post('http://localhost:5005/api/createnote', newApt)
        .then(respuesta => console.log(respuesta))
        .catch(err => console.log(err))
        navigate('/profile')



    }
    
    return (
    <div>
        
        <h1>Book Memory</h1>
        <form>
            <div className='what'>
                <Text mb='12px'>What</Text>
                <Textarea
                value={What}
                onChange={(event)=> setWhat(event.target.value)}
                placeholder='What'
                size='sm'
                />
            </div>

            <div className='what'>
                <Text mb='12px'>Where</Text>
                <Textarea
                value={Where}
                onChange={(event)=> setWhere(event.target.value)}
                placeholder='What'
                size='sm'
                />
            </div>

            <div className='what'>
                <Text mb='12px'>When</Text>
                <Textarea
                value={When}
                onChange={(event)=> setWhen(event.target.value)}
                placeholder='What'
                size='sm'
                />
            </div>

            <div className='what'>
                <Text mb='12px'>Who</Text>
                <Textarea
                value={Who}
                onChange={(event)=> setWho(event.target.value)}
                placeholder='What'
                size='sm'
                />
            </div>
            <Button variant='Contained' onClick={enviarDatos}>Save</Button>
        </form>



    </div>
)
}

export default PalacePage