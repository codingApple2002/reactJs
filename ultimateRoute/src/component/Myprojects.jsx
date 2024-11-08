import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Myprojects() {
  return (
    <div className='w-full flex justify-center'>
        <div className='bg-gray-400 text-white w-60 rounded-xl'>
            <li>
                <NavLink to='/myprojects/bg-changer'>
                    Bg-changer
                </NavLink>
            </li>
            <li>
                <NavLink to='/myprojects/password-Generater'>
                    password-Generater
                </NavLink>
            </li>
            <li>
                <NavLink to='/myprojects/Currencyproject'>
                    Currency-project
                </NavLink>
            </li>
        </div>
    </div>
  )
}

export default Myprojects