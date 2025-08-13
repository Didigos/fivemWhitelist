const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const axios = require('axios')
const app = express()
const port = 3000

// liberar acesso de outros dominios
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:5174', // coloque a URL do seu frontend
  credentials: true
}));
// para interpretar dados json
app.use(express.json())
// carregar variáveis de ambiente
require('dotenv').config()

//db connecting
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado ao banco de dados'))
    .catch((err) => { console.log(`Algo deu errado ${err}`) })

//schema mongoose
const userSchema = new mongoose.Schema({
    discordId: String,
    email: String,
    username: String,
    avatar: String,
    discriminator: String,
    isAdmin: Boolean,
    discordRole: String,
    status: String,
    currency: Number
}, { timestamps: true })

//model
const User = mongoose.model('User', userSchema)

//para receber os dados do discord
app.get('/api/discord', async (req, res) => {

    // ETAPA 1 = RECEBER O CODE E ENVIAR DE VOLTAR PARA O DISCORD COM AS INFORMAÇÕES
    try {
        const codeReceived = req.query.code

        if (!codeReceived) {
            return res.status(400).send('Código não fornecido')
        }

        const qs = require('querystring');

        const tokenResponse = await axios.post('https://discord.com/api/oauth2/token',
            qs.stringify({
                grant_type: 'authorization_code',
                code: codeReceived,
                redirect_uri: 'http://localhost:3000/api/discord',
                client_id: '1402453996458999991',
                client_secret: 'IIf9Wvl11QgeYmSoXcfRzxFnTFao2XIS'
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        // ETAPA 2 = RECEBER O TOKEN DE ACESSO E ENVIAR PARA PEGAR AS INFORMAÇÕES
        const tokenData = await tokenResponse.data;

        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`
            }
        })
        // ETAPA 3 =  MANIPULAR AS INFORMAÇÕES DE USUARIOS RECEBIDAS
        const userData = await userResponse.data
        const { id, email, username, avatar, discriminator } = userData
        console.log('id: ', id)
        console.log('avatar: ', avatar)
        console.log('username: ', username)

        // SALVAR OS DADOS NO BANCO DE DADOS
        try {
            const existingUser = await User.findOne({ discordId: id });

            if (existingUser) {
                console.log('Usuário já existe no banco de dados.');
            } else {
                const newUser = new User({
                    discordId: id,
                    email,
                    username,
                    avatar,
                    discriminator,
                    isAdmin: false,
                    discordRole: 'user',
                    status: 'active',
                    currency: 0
                });
                await newUser.save();
                console.log('Novo usuário salvo no banco de dados.');
            }
            //CRIANDO UM TOKEN JWT 
            const token = jwt.sign(
                { username, avatar, id },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRE }
            )

           res.redirect(`http://localhost:5173/?token=${token}`)
        } catch (error) {
            console.error('Erro ao salvar usuário no banco de dados:', error);
        }

    } catch (error) {
        console.error('Erro ao obter informações do usuário:', error)
        return res.status(500).send('Erro interno do servidor')
    }
})

app.get("/me", (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ user: decoded });
  } catch (err) {
    res.sendStatus(401);
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout feito com sucesso" });
});

app.listen(port, () => {
    console.log(`Server started in port ${port} http://localhost:3000`)
})