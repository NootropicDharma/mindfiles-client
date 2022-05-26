// import axios from 'axios'
// import { useState, useEffect } from 'react'
import Card from '../components/Card'
import './AllPalacesPage.css'

function AllPalacesPage(props) {
console.log(props)
    // const [palaces, setPalaces] = useState([])

    // // useEffect(()=>{
    // //     axios.get(`${process.env.REACT_APP_SERVER_URL}/user`)
    // //     .then(misdatos =>{
    // //         console.log(misdatos.data)
    // //         setPalaces(misdatos.data)
    // //     })
    // //     .catch(err => console.log(err))
    // // }, [])


    return (
    <div className='grid'> MIND Palaces
        {
        props.user?.palaces.map (dato => {
            console.log(dato)
        return <Card key={dato._id} losdatos={dato}/> }) 
        }
    </div>
    )
}

export default AllPalacesPage