# desafio
Desafio Bry

## Backend
### Rotas -> router/api.php
GET     /empresas       // Retorna todas as empresas

GET     /empresas/1     // Retorna empresa com id 1

DELETE  /empresas/1     // Remove empresa com id 1

POST    /empresas       // Cria uma empresa

PUT     /empresas/1     // Atualiza empresa com id 1

DELETE  /empresas/1/funcionarios/1      // Remove conexão entre a empresa 1 e o funcionário 1

POST    /empresas/1/funcionarios/       // Cria conexão entre a empresa 1 e o funcionário informado.

// O mesmo para funcionários

### Migrates app/database/migrations
Definições da tabela funcionarios e empresas

### Controllers app/Http/Controllers
Funções para responder as requições da api REST

### Seeds app/database/seeds
Criação de usuários e empresas falsas

## Frontend
### Services app/service
crud -> operações basicas para requisão http

validation -> verificar entradas do usuário

### Views app/views
home -> Tela inicial                                rota-> / 

empresas-crud -> Tela inicial de empresas           rota-> /empresas

funcionarios-crud -> Tela inicial de funcionario    rota-> /funcionarios

### Componentes app/components

template -> Tela basica que fica sempre visivel -> hearder - footer - nav

empresas -> 

* empresas-funcionarios -> Lista de funcionarios da empresa (funções de adicionar e remover funcionarios)

* empresas-create -> Formulario para criação de empresa

* empresas-delete -> Remover empresa

* empresas-read -> Lista todas as empresas

* empresas-update -> Ver/Atualizar informações da empresas

Componentes funcionarios/* são parecidos com componentes de empresas




