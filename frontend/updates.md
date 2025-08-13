INFORMAÇÕES SOBRE A APLICAÇÃO
Um website para servidor de fivem (GTA5)
 - banco de dados mongoDB
 - Sistema de whitelist (liberação de acesso ao servidor e discord)
 - Integração com o Discord (login e gerenciamento de cargos)
 - Integração com banco de dados mySQL do servidor do jogo
 - Painel de administração (gerenciamento de whitelist)
 - Painel de usuario, com dados das ultimas whitelist feitas

criar um componente para o botão receber os dados;
retirar a quantidade de botões que tem no header, e reduzir para um só

dificuldades que encontrei no front end

JWT
tive uma pequena dificuldade de entender o conceito na aplicação prática, porém depois de ver alguns vídeos consegui pegar.

header
meu primeiro obstaculo na criação do header foi deixar ele persistente em todas as páginas
uma solução através da minha pesquisa que encontrei foi a  configuração de um layout pelo
react-router-dom atracés da tag "outlet"...no qual ele define as rotas filhas e pais, assim eu criei um arquivo de layout e em seguida configurei no meu main.jsx para "abraçar" todas as rotas em que o header deverá persistir.

login persistente
toda vez que a pessoa fechava a página ela estava continuando com o "login" ex; o nome de usuario na mensagem "Seja bem vindo Didigos" e o avatar, pois as informações do token estavam persistindo, por que o mesmo estava armazenado no localStorage
e o componente responsável por mostrar na tela que a pessoal estava logada era o "header".
Como resolvi:
para resolver esse problema eu alterei o local que o token fica, para o SessionStorage, com
isso tenho um pouco mais de segurança, pois toda vez que o usuario fechar completamente a janela da aplicação o token é excluido do sessionStorage, forçando novamente um login com o discorde geração de um novo token de acesso, porém não foi o suficiente fazer só isso, eu precisava que o frontend mostrasse isso para o usuario no header (saisse a mensagem de bem vindo), para isso tive que utilizart o  context API, ou seja, um estado global que é compartilhado com todos os componentes que ele estiver "abraçando", para isso criei um arquivo chamado loginContext.jsx no qual adicionei a lógica deste estado no qual recebe do token os dados que são passados no seu payload e uma lógica que sempre que a página é carregada ele faz este armazenamento novamente, pois quando você recarrega a página (f5) o componente é desmontado e a informação é deletada, mesmo que o token permaneça no sessionStorage após a tualização.


