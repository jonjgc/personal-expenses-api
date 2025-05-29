# Personal Expenses API

API RESTful para gerenciamento de despesas pessoais, construída com NestJS, Prisma, PostgreSQL, autenticação com JWT, documentação com o Swagger e validações Robustas com DTO

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
  - **POST /expenses**: Cria uma nova despesa.
  - **GET /expenses**: Lista todas as despesas (suporta filtros ?month=05&year=2025).
  - **GET /expenses/:id**: Retorna uma despesa pelo ID.
  - **PATCH /expenses/:id**: Atualiza uma despesa.
  - **DELETE /expenses/:id**: Remove uma despesa.

# Documentação

Acesse a documentação da API em http://localhost:3000/api após iniciar o servidor.

# Para testar o projeto

**Inicie o servidor**

```bash
  npm run start:dev
```
**Acesse```http://localhost:3000/api``` para ver a documentação Swagger**

Teste os endpoints diretamente no Swagger:
Clique em Authorize e insira o token JWT no formato Bearer <token>.


# Passo a Passo para Testar a API com Swagger

## 1. Acesse a Interface do Swagger

### Inicie o servidor:
Certifique-se de que a API está rodando:
```bash
npm run start:dev
```
A API deve estar acessível em `http://localhost:3000`.

### Abra o Swagger:
No navegador, acesse:
```
http://localhost:3000/api
```
Você verá a interface do Swagger com a documentação da API, incluindo os endpoints agrupados por `auth` e `expenses`.

### Verifique a configuração:
Confirme que o Swagger exibe:
- **Título**: Personal Expenses API
- **Descrição**: API para gerenciamento de despesas pessoais
- **Endpoints**:
  - POST `/auth/login`
  - POST `/expenses`
  - GET `/expenses`
  - GET `/expenses/{id}`
  - PATCH `/expenses/{id}`
  - DELETE `/expenses/{id}`

Se os endpoints não aparecerem, verifique se o `main.ts` está configurado corretamente:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Personal Expenses API')
    .setDescription('API para gerenciamento de despesas pessoais')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

## 2. Configurar a Autenticação JWT

### Gerar o token com POST /auth/login:
```json
{
  "userId": "1",
  "username": "user"
}
```

### Configurar o token no Swagger:
Clique em **Authorize** e insira:
```
Bearer <INSIRA_O_TOKEN_AQUI>
```

## 3. Testar o Endpoint POST /expenses (Criar Despesa)
```json
{
  "title": "Almoço",
  "amount": 50.0,
  "category": "Alimentação",
  "date": "2025-05-28"
}
```

### Teste de erro:
```json
{
  "title": "",
  "amount": -10,
  "category": "Alimentação",
  "date": "2025-05-28"
}
```

## 4. Testar o Endpoint GET /expenses (Listar Todas as Despesas)

### Com filtro por data:
- month: 5
- year: 2025

### Filtro inválido:
- month = 13 → `400 Bad Request`

## 5. Testar o Endpoint GET /expenses/:id

### Teste de erro:
- ID inválido → `404 Not Found`

## 6. Testar o Endpoint PATCH /expenses/:id

```json
{
  "title": "Jantar",
  "amount": 75.0
}
```

### Teste de erro:
- amount: -10 → `400 Bad Request`

## 7. Testar o Endpoint DELETE /expenses/:id

### Teste de erro:
- ID já excluído → `404 Not Found`

## 8. Testar Autenticação

- Sem token → `401 Unauthorized`
- Token inválido → `401 Unauthorized`





      









