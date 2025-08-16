import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from '../src/pages/Home/Home.jsx'
import Terms from './pages/Terms/Terms.jsx'
import Layout from './components/layout/Layout.jsx'
import UserPainel from './pages/userPainel/userPainel.jsx'
import { AuthProvider } from './AuthContext.jsx'
import Admin from './pages/Admin/Admin.jsx'
import Allowlist from './pages/Allowlist/Allowlist.jsx'
import RegisterUser from './pages/CadastroUsuario/RegisterUser.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/terms" element={<Terms />} />
          <Route path="/user/control" element={<UserPainel />} />
          <Route path="/user/admin" element={<Admin />} />
          <Route path="/user/allowlist" element={<Allowlist />} />
          <Route path="/user/register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
)

//sobre o aninhamento das rotas
// O aninhamento de rotas permite que você crie uma estrutura de navegação mais complexa e organizada em seu aplicativo. No exemplo acima, temos uma rota pai ("/") que renderiza o componente Layout. Dentro do Layout, temos duas rotas filhas: uma para a página inicial ("/") e outra para a página de termos ("/terms"). Isso significa que ambas as páginas compartilharão a mesma estrutura de layout definida no componente Layout.
// para isso criamos o componente Layout, que encapsula a estrutura comum das páginas.