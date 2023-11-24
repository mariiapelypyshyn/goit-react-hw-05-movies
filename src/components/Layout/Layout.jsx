import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Layout/Layout.module.css';

const Layout = ({children}) => {
  return (
       <div>
      <header className={css.header}>
        <NavLink className={css.headerLink} to="/">Home</NavLink>
        <NavLink className={css.headerLink} to="/movies">Movies</NavLink>
      </header>
          <main>{ children }</main>
          </div>
  )
}

export default Layout
