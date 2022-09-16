import React, { useEffect, useState } from 'react'


const initialFormValues = { fullName: "", phone_number: "" }
const Form = ({ addContacts, contacts }) => {

    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addContacts([...contacts, form])
    }

    return (

        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='fullName'
                    placeholder='Fullname'
                    value={form.fullName}
                    onChange={onChangeInput} />
            </div>
            <div>
                <input
                    name='phone_number'
                    placeholder='Phone Number'
                    value={form.phone_number}
                    onChange={onChangeInput} />
            </div>
            <div className='btn'>
                <button disabled={!form.fullName && !form.phone_number}>Add</button>
            </div>
        </form>

    )
}

export default Form