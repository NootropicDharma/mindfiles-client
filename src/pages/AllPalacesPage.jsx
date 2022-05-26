// import axios from 'axios'
// import { useState, useEffect } from 'react'
import Card from '../components/Card'
import './AllPalacesPage.css'

function AllPalacesPage(props) {
console.log(props)


    return (
    <div className=''> MIND Palaces
        {
        props.user?.palaces.map (dato => {
            console.log(dato)
        return <Card key={dato._id} losdatos={dato}/> }) 
        }
    </div>
    )
}

export default AllPalacesPage