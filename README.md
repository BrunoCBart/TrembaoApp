## Aplicativo de pedidos (Trembão Restaurante)

TrembaõApp é um aplicativo de de pedidos que procura resolver a dor do cliente de precisar ligar ou conversar pelo whatsapp para fazer o pedido, nesse site aplicação o cliente simplismente seleciona o que ele quer do menu e faz seu pedido inserindo seus dados.

### Como rodar a aplicação

Basta clonar o repositório com o comando:

```
git clone git@github.com:BrunoCBart/TrembaoApp.git
```

Entrar no repositório:

```
cd ./trembaoApp
```


<strong>O primeiro método requer que você tenha docker instalado [docker download](https://docs.docker.com/get-docker/)</strong>

Coloque os containers no ar com o seguinte comando:

```
npm run compose:up
```

Espere a criação dos containers e... Pronto! sua aplicação vai estar rodando aqui http://localhost:3000/

O segundo método você precisa ter mysql instalado [mysql download](https://www.mysql.com/downloads/)

Se assegure que o serviço do mysql está ligado com o comando:

```
sudo systemctl start mysql
```

Entre na pasta ./app/backend e crie um arquivo .env de acordo com o .env.example.

Depois de configurar o .env basta e no diretório raiz do backend rode o comando: 

```
npm run dev
```

Logo depois em um outro terminal vá até o diretório do frontend ./app/frontend e rode o comando:

```
npm start
```

Pronto agora sua aplicação está rodando aqui http://localhost:3000/

