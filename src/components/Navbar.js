import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg " >
      <div className="navbar-brand">
        Github Поиск
    </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">Информация</NavLink>
        </li>
      </ul>
      <a
        className="btn btn-secondary my-sm-0"
        type="submit"
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=user`}
      >GetToken</a>
    </nav >
  )
}