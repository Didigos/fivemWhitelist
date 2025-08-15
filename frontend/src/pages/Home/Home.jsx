import { useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { jwtDecode } from "jwt-decode";
import style from './home.module.css'
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/user/control")
  }


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      sessionStorage.setItem("token", token); //armazena o token na sessão atual
      const payload = jwtDecode(token)
      setUser({
        username: payload.username,
        avatar: payload.avatar,
        id: payload.id
      })
      window.history.replaceState({}, document.title, "/"); //apaga o token da URL
    }
  }, []);

  return (
    <main className={style.img__section} >
      <div className={style.img__container}>
        <img src="./fivemLogo.svg" alt="" />
      </div>
      <div className={style.text__container}>
        <p>
          <span style={{ color: "#f1f1f1" }}>ALFACORE </span>
          <span style={{ color: "#2C651D" }}>ROLEPLAY</span>
        </p>
        <span className={style.home__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Eum illum expedita cupiditate placeat quod pariatur reiciendis, 
          dolorum voluptates! Laudantium doloribus provident alias magnam 
          illo tempora aliquid architecto dolores eaque ex?</span>
      </div>
    <section className={style.btn__container}>
      <button className={`${style.btn__discord} ${style.btn__default}`}>DISCORD</button>
      <button onClick={handleClick} className={`${style.btn__whitelist} ${style.btn__default}`}>WHITELIST</button>
    </section>
    </main>
  );
};

export default Home;
