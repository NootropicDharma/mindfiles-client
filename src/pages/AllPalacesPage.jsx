// import axios from 'axios'
// import { useState, useEffect } from 'react'
import Card from '../components/Card'

function AllPalacesPage(props) {
console.log(props)
    // const [palaces, setPalaces] = useState([])

    // // useEffect(()=>{
    // //     axios.get("http://localhost:5005/api/user")
    // //     .then(misdatos =>{
    // //         console.log(misdatos.data)
    // //         setPalaces(misdatos.data)
    // //     })
    // //     .catch(err => console.log(err))
    // // }, [])


    return (
    <div> MIND Palaces
        {
        props.user?.palaces.map (dato => {
            console.log(dato)
        return <Card key={dato._id} losdatos={dato}/> }) 
        }
    </div>
    )
}

export default AllPalacesPage