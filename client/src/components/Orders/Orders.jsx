import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_USER } from '../Data/orders'
import "./Orders.css"
import Navbar from '../Navbar/Navbar'

import { ORDERS } from '../Data/orders'

const Orders = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const { loading, error, data } = useQuery(ORDERS)

  useEffect(() => {
    if (data) {
      console.log(data)
      setOrders(data.users)
    }
  }, [data])

  const [deleteUser] = useMutation(DELETE_USER, {
    update: (cache, data) => {
      console.log(data)
    }
  })

  const handleClick = (item) => {
    deleteUser({ variables: { id: item.target.parentElement.id} })
    alert('User deleted ✅')
    window.location.href = "/"
  }

  const editClick = (item) => {
    navigate(`/edit/${item.target.parentElement.id}`)
  }


  return (
    <div>
      <Navbar />
      <div className="orders">
        <table>
          <thead >
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>User Surname</th>
              <th>User Age</th>
              <th>User Email</th>
              <th>User Phone</th>
              <th className='modify hideItem'>Modify</th>
            </tr>
          </thead>

          <tbody>
            {
              orders?.map(item => (
                <tr key={item.id}>
                  <td className='order-id'>{item.id}</td>
                  <td className='item-product'>{item.name}</td>
                  <td className='item-person'>{item.surname}</td>
                  <td className='item-date'>{item.age}</td>
                  <td className='item-date'>{item.email}</td>
                  <td className='item-date'>{item.phone}</td>
                  <td id={item.id} className='item-date modify-col hideItem'>
                    <i onClick={(item) => editClick(item)} className="fa-sharp fa-solid fa-pen-to-square square"></i>
                    <i onClick={(item) => handleClick(item)} className="fa-solid fa-trash trash"></i>
                  </td>
                </tr>
              )).reverse()
            }
            
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Orders