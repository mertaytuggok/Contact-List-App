import React, { useEffect, useState } from 'react'
import List from './List'
import Form from './Form/Form'
import './styles.css'


const Contacts = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
    }, [contacts])
    return (

        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form contacts={contacts} addContacts={setContacts} />
        </div>
    )
}

export default Contacts