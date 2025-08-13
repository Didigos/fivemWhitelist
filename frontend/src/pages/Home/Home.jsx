import { useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { jwtDecode } from "jwt-decode";
const Home = () => {
  const {setUser} = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    
    if (token) {
      sessionStorage.setItem("token", token); //armazena o token na sessão atual
     const payload = jwtDecode(token)
     console.log('home: ', payload)
      setUser({
      username: payload.username,
      avatar: payload.avatar
     })
      window.history.replaceState({}, document.title, "/"); //apaga o token da URL
    }
    console.log('peguei: ', sessionStorage.getItem('token'))
    console.log('não há token!')
  }, []);

  return <h1>PÁGINA INICIAL</h1>;
};

export default Home;
