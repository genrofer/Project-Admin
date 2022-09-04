import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import Navbar from '../Navbar/Navbar'
import { ADD_USER } from '../Data/orders'

const NewUser = () => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [newUser] = useMutation(ADD_USER, {
    update: (cache, data) => {
      console.log(data)
    }
  })

  const hendleClick = () => {
    if (name == '' || surname == '' || age == '' || email == '' || phone == '') {
      alert('Please fill all the fields')
      return;
    }
    newUser({ variables: { name: name, surname: surname, age: Number(age), email: email, phone: phone } })
    alert('User added ✅')
    window.location.href = "/"
  }

  return (
    <>
      <Navbar />
      <div className='restaurant'>
        <div className="login-box">
          <h2>New User</h2>
          <form>

            <div className="flex">
              <div className="user-box box-2">
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" />
                <label>First Name</label>
              </div>

              <div className="user-box box-2">
                <input onChange={(e) => setSurname(e.target.value)} type="text" name="surname" />
                <label>Last Name</label>
              </div>
            </div>

            <div className="user-box">
              <input onChange={(e) => setAge(e.target.value)} type="number" name="age" />
              <label>Age</label>
            </div>

            <div className="user-box">
              <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
              <label>Email</label>
            </div>

            <div className="user-box">
              <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" />
              <label>Phone</label>
            </div>

            <a onClick={hendleClick} type='submit' href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </>

  )
}

export default NewUser