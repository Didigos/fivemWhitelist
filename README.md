# Allowlist

Este projeto é uma aplicação web fullstack composta por um frontend em React (Vite) e um backend em Node.js. O objetivo é gerenciar uma lista de players permitidos (whitelist) com autenticação de usuários.

## Estrutura do Projeto

- **frontend/**  
  Interface web desenvolvida em React, com autenticação, páginas de termos, painel do usuário e layout moderno.

- **backend/**  
  API Node.js responsável pelo gerenciamento dos dados, autenticação e integração com o frontend.

## Funcionalidades

- Autenticação de usuários (contexto e sessionStorage)
- Painel do usuário
- Página de termos de uso
- Gerenciamento de sites permitidos
- Estrutura modular para fácil expansão

## Como rodar o projeto

1. Instale as dependências:
	```bash
	cd backend
	npm install
	cd ../frontend
	npm install
	```

2. Inicie o backend:
	```bash
	cd backend
	node services/index.js
	```

3. Inicie o frontend:
	```bash
	cd frontend
	npm run dev
	```

## Configuração

- Adicione suas variáveis de ambiente nos arquivos `.env` conforme os exemplos em `.env.example`.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests com sugestões, correções ou novas funcionalidades!
