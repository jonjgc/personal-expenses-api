# Personal Expenses API

API RESTful para gerenciamento de despesas pessoais, construída com NestJS, Prisma e PostgreSQL.

## Pré-requisitos
- Node.js 18.x ou superior
- PostgreSQL
- npm ou yarn

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/jonjgc/personal-expenses-api.git
   cd personal-expenses-api

## Instale as dependências:
```bash
  npm install
```

## Configure o banco de dados PostgreSQL e atualize o arquivo .env
```bash
  DATABASE_URL="postgresql://postgres:postgres@localhost:5432/expenses_db?schema=public"
```

## Execute as migrações do Prisma:
```bash
  npx prisma migrate dev
```

## Inicie o servidor:
```bash
  npm run start:dev
```

## Endpoints

- **POST /auth/login**  
  Gera um token JWT.  
  Exemplo de resposta:  
  ```json
  {
    "userId": "1",
    "username": "user"
  }
  ```

**POST /expenses**: Cria uma nova despesa.

**GET /expenses**: Lista todas as despesas (suporta filtros ?month=05&year=2025).

**GET /expenses/:id**: Retorna uma despesa pelo ID.

**PATCH /expenses/:id**: Atualiza uma despesa.

**DELETE /expenses/:id**: Remove uma despesa.

# Documentação

Acesse a documentação da API em /api após iniciar o servidor.

# Este projeto contem:

**Autenticação com JWT**
**Documentação com o Swagger**
**Validações Robustas com DTO**

# Para testar o projeto

**Inicie o servidor**

```bash
  npm run start:dev
```
**Acesse```http://localhost:3000/api``` para ver a documentação Swagger**
**Os testes foram feitos usando a ferramenta Insomnia**






