import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import Navbar from '../Navbar/Navbar'
import { EDIT_USER, ORDERS } from '../Data/orders'
import { useParams } from 'react-router-dom'

const NewUser = () => {
  const { id } = useParams()
  const [orders, setOrders] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [editUser] = useMutation(EDIT_USER, {
    update: (cache, data) => {
      console.log(data)
    }
  })

  const { loading, error, data } = useQuery(ORDERS)
  
  useEffect(() => {
    if (data) {
      setName(data.users.find(item => item.id == id).name)
      setSurname(data.users.find(item => item.id == id).surname)
      setAge(data.users.find(item => item.id == id).age)
      setEmail(data.users.find(item => item.id == id).email)
      setPhone(data.users.find(item => item.id == id).phone)
    }
  }, [data])


  const hendleClick = () => {
    if (name == '' || surname == '' || age == '' || email == '' || phone == '') {
      alert('Please fill all the fields')
      return;
    }
    editUser({ variables: { name: name, surname: surname, age: Number(age), email: email, phone: phone, id: id } })
    alert('User changed ✅')
    window.location.href = "/"
  }

  return (
    <>
      <Navbar />
      <div className='restaurant'>
        <div className="login-box">
          <h2>Edit User</h2>
          <form>

            <div className="flex">
              <div className="user-box box-2">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
                <label>First Name</label>
              </div>

              <div className="user-box box-2">
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" name="surname" />
                <label>Last Name</label>
              </div>
            </div>

            <div className="user-box">
              <input value={age} onChange={(e) => setAge(e.target.value)} type="number" name="age" />
              <label>Age</label>
            </div>

            <div className="user-box">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
              <label>Email</label>
            </div>

            <div className="user-box">
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone" />
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