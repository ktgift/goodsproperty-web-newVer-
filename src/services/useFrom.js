import {useState, useEffect} from 'react'

const useFrom = () => {
    const [values, setValues] = useState({
        firstname: '', 
        lastname: '', 
        phonenumber: '',
        email: '', 
        password: '', 
        confirmPassword: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [e.target.name]: e.target.values
        })
    }
}