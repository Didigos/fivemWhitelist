
import { Link, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";
import style from "../Header/Header.module.css";

const Header = () => {
  const { user } = useAuth()

  const handleLogOut = ()=>{
    sessionStorage.removeItem('token')
    window.redirect('http://localhost:5173/')
  }

  return (
    <header className={style.menu_header}>
      {user ? (
        <div className={style.header__discord}>
          <div className={style.header__discord__avatar}>
            <img
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
              alt="Header Image"
            />
          </div>
          <div className={style.header__discord__username}>
            <span>Seja Bem Vindo</span>
            <span>{user.username ? user.username : "Undefined"}</span>
          </div>
        </div>
      ) : null}
      {!user ? (
        <div className={`${style.menu__btn__login} ${style.menu__login__anim}`}>
          <Link className={style.menu__button} to="/terms">
            ENTRAR
          </Link>
        </div>
      ) : (
        <div className={style.menu__container}>
          <Link onClick={handleLogOut} className={style.menu__button__logout}>  
            SAIR
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
