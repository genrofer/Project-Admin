import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
     const navigate = useNavigate()

     const savePdf = () => {
          const element = document.querySelectorAll(".hideItem")

          for (var i = 0; i < element.length; i++) {
               element[i].classList.add("none")
          }

          setTimeout(() => {
               for (var i = 0; i < element.length; i++) {
                    element[i].classList.remove("none")
               }
          }, 1000);

          let orders = document.querySelector("#orders")
          window.print()
     }

     return (
          <div className='navbar hideItem'>
               <div onClick={() => navigate("/")} className="navbar-item">All Users</div>
               <div onClick={() => navigate("/adduser")} className="navbar-item">New User</div>
               <button onClick={savePdf} className='navbar-item'>Save PDF</button>
               <br />
          </div>
     )
}

export default Navbar