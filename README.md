## DeliveryApp (Trembão restaurant)(en)
<strong>Under construction</strong>

TrembãoApp is an deliveryApp application that tries to solve the pain of some companies that uses whatsapp to make their orders, in this website the client simply selects what he needs from the menu and make their order inserting personal data.

### How to run the application

Clone the application with the following comamand:

```
git clone git@github.com:BrunoCBart/TrembaoApp.git
```

Go to the repository folder:

```
cd ./trembaoApp
```


<strong>The first method requires you to have docker installed [docker download](https://docs.docker.com/get-docker/)</strong>

Run the containers from the project's root folder:

```
npm run compose:up
```
<strong>Make sure there isn't anything running on ports 3000 and 4000</strong>

Wait for the creation of the containers and... Good! The application will be running here http://localhost:3000/

The second method requires you to have mysql installed [mysql download](https://www.mysql.com/downloads/)

Run the following command at the root folder to install all dependencies:

```
npm run install
```

Make sure mysql service is running by running the command:

```
sudo systemctl start mysql
```

Enter the folder ./app/backend and create an .env file according to .env.example.

After configuring .env all that is left is to run the following command: 

```
npm run dev
```

Right after open another terminal, go to frontend folder ./app/frontend and run the command:

```
npm start
```
Good! The application will be running here http://localhost:3000/

## How the application works(now)

The main page running at (/) http://localhost:3000/ route is the order form where the user can choose what they want and make their orders, at first glance it will seem that there is no options but we will get to that later.

The next route is running at (/admin) http://localhost:3000/admin, in this route you can log in as a admin user using the following credentials:

username as "admin"
password as "mysecretpw"

After you login with those credentials you will be redirected to a protected route called (/admin/dashboard) http://localhost:3000/admin/dashboard, on that route it will render the admin control panel where he can add the foods to the menu, edit them, create and delete them, he will also be able to create "food themes" and create his own food form for whichever food category he wants to sell (sandwiches, lunch box... etc).

When the admin adds a new food to the menu it will then appear as an option on the (/) http://localhost:3000/ route automatically via socket, so the user may be able to choose the options he wants and the admin can control the daily options.


## Aplicativo de pedidos (Trembão Restaurante)(pt)
<strong>Em construção</strong>


TrembãoApp é um aplicativo de de pedidos que procura resolver a dor do cliente de precisar ligar ou conversar pelo whatsapp para fazer o pedido, nesse site aplicação o cliente simplismente seleciona o que ele quer do menu e faz seu pedido inserindo seus dados.

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

Rode o seguinte comando para instalar todas as dependências:

```
npm run install
```

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

