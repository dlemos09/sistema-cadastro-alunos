# 🎓 Sistema de Cadastro de Alunos e Matrículas

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-v5-black?style=flat-square&logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-v6-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![Vite](https://img.shields.io/badge/Vite-v7-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](LICENSE)

Um **sistema web moderno e responsivo** para gerenciar alunos e matrículas em instituições de ensino.
Arquitetura full-stack com separação clara entre frontend e backend, seguindo as melhores práticas de desenvolvimento.

[Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Como Usar](#-exemplos-de-uso) • [API](#-api-endpoints) • [Documentação](#-documentação-técnica)

</div>

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Documentação Técnica](#-documentação-técnica)
- [API Endpoints](#-api-endpoints)
- [Banco de Dados](#-banco-de-dados)
- [Design System](#-design-system)
- [Responsividade](#-responsividade)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Troubleshooting](#-troubleshooting)
- [Exemplos de Uso](#-exemplos-de-uso)
- [Deployment](#-deployment)
- [Referências](#-referências)
- [Autor](#-autor)
- [Licença](#-licença)
- [Suporte](#-suporte)

---

## 🎯 Visão Geral

O **Sistema de Cadastro de Alunos e Matrículas** é uma aplicação full-stack moderna que fornece uma interface intuitiva para:

✅ **Gerenciar Alunos**

- Cadastro de novos alunos com validação de dados
- Listagem completa com busca por nome ou CPF
- Soft delete com histórico de atividades
- Validação automática de CPF e email únicos

✅ **Gerenciar Matrículas**

- Criar matrículas com validação de elegibilidade
- Visualizar histórico completo de matrículas
- Inativar matrículas quando necessário
- Impedir duplicatas (um aluno = uma matrícula ativa)
- Data automática de matrícula e inativação

✅ **Interface Profissional**

- Design responsivo (mobile, tablet, desktop)
- Sidebar dinâmica com navegação intuitiva
- Sistema de cores moderno e consistente
- Mensagens de feedback em tempo real
- Loading states durante operações

---

## 💻 Tecnologias

### 🔙 Backend

```
├── Runtime: Node.js (v18+)
├── Framework: Express.js v5
├── ORM: Prisma v6
├── Database: PostgreSQL / SQLite
├── Dev Tools: Nodemon
├── Middleware: CORS
└── Config: dotenv
```

### 🎨 Frontend

```
├── Library: React v19
├── Build Tool: Vite v7
├── Routing: React Router DOM v7
├── HTTP: Axios v1.13
├── Icons: React Icons v5.5
└── Styling: CSS3 + Design System
```

### 🛠 DevTools

```
├── Version Control: Git
├── Code Quality: ESLint
├── Package Manager: npm
└── Database Client: Prisma Studio
```

---

## ✨ Funcionalidades

### 👥 Módulo Alunos

| Funcionalidade  | Descrição                                           | Status |
| --------------- | --------------------------------------------------- | ------ |
| Cadastrar Aluno | Criar novo aluno com nome, email e CPF              | ✅     |
| Validar Dados   | CPF com 11 dígitos, email único, dados obrigatórios | ✅     |
| Listar Alunos   | Mostrar todos os alunos ativos                      | ✅     |
| Buscar Aluno    | Pesquisar por nome ou CPF (case-insensitive)        | ✅     |
| Inativar Aluno  | Soft delete mantendo histórico                      | ✅     |
| Status Ativo    | Apenas alunos ativos aparecem na lista              | ✅     |

### 📝 Módulo Matrículas

| Funcionalidade        | Descrição                                        | Status |
| --------------------- | ------------------------------------------------ | ------ |
| Criar Matrícula       | Matricular aluno com data automática             | ✅     |
| Validar Elegibilidade | Verificar se aluno existe e tem matrícula ativa  | ✅     |
| Histórico             | Visualizar todas as matrículas (ativas/inativas) | ✅     |
| Inativar              | Desativar matrícula com data de inativação       | ✅     |
| Status Badge          | Visualização clara de matrícula ativa/inativa    | ✅     |

### 🎨 Interface

| Recurso         | Implementação                                     | Status |
| --------------- | ------------------------------------------------- | ------ |
| Responsividade  | Mobile (480px), Tablet (768px), Desktop (1024px+) | ✅     |
| Menu Hamburger  | Sidebar dobrável no mobile                        | ✅     |
| Dark Mode Ready | Paleta de cores preparada para temas              | ✅     |
| Animações       | Transições suaves e feedback visual               | ✅     |
| Acessibilidade  | Semântica HTML5, labels, ARIA                     | ✅     |
| Loading States  | Indicadores visuais durante operações             | ✅     |

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter:

| Requisito            | Versão   | Download                                      |
| -------------------- | -------- | --------------------------------------------- |
| Node.js              | v18+     | [nodejs.org](https://nodejs.org/)             |
| npm                  | v9+      | (vem com Node.js)                             |
| Git                  | Qualquer | [git-scm.com](https://git-scm.com/)           |
| PostgreSQL ou SQLite | -        | [postgresql.org](https://www.postgresql.org/) |

### ✅ Verificar Instalação

```bash
# Verificar Node.js
node --version
# Esperado: v18.0.0 ou superior

# Verificar npm
npm --version
# Esperado: v9.0.0 ou superior

# Verificar Git
git --version
# Esperado: git version 2.x.x
```

---

## 🚀 Instalação

### 📥 Passo 1: Clonar ou Baixar o Projeto

```bash
# Clone do repositório
git clone https://github.com/seu-usuario/cadastroAluno.git

# Ou entre na pasta se já foi baixada
cd cadastroAluno
```

### 📥 Passo 2: Instalar Dependências do Backend

```bash
cd backend
npm install
```

Dependências instaladas:

- `@prisma/client` - Cliente do ORM
- `prisma` - CLI do Prisma
- `express` - Framework web
- `cors` - Middleware CORS
- `dotenv` - Variáveis de ambiente
- `nodemon` - Hot reload (dev)
- `@types/node` - TypeScript types (dev)

### 📥 Passo 3: Instalar Dependências do Frontend

```bash
cd ../frontend
npm install
```

Dependências instaladas:

- `react` - Biblioteca UI
- `react-dom` - Renderização DOM
- `react-router-dom` - Roteamento
- `axios` - HTTP client
- `react-icons` - Componentes de ícones
- `vite` - Build tool (dev)
- `@vitejs/plugin-react` - Plugin Vite (dev)
- `eslint` - Linter (dev)

---

## ⚙️ Configuração

### 🔧 Backend Configuration

#### 1️⃣ Criar arquivo `.env`

Na pasta `backend/`, crie um arquivo chamado `.env`:

```bash
cd backend
# Windows
type nul > .env

# Linux/Mac
touch .env
```

#### 2️⃣ Configurar variáveis de ambiente

**Para Desenvolvimento (SQLite):**

```env
# Database
DATABASE_URL="file:./dev.db"

# Server
PORT=3000
NODE_ENV="development"
```

**Para Produção (PostgreSQL):**

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/cadastro_aluno"

# Server
PORT=3000
NODE_ENV="production"
```

#### 3️⃣ Criar o Banco de Dados

```bash
# Executar migrações
npx prisma migrate dev --name init

# Ou apenas gerar cliente sem executar
npx prisma generate
```

Isto criará:

- Arquivo de banco de dados (SQLite) ou conexão (PostgreSQL)
- Cliente Prisma gerado
- Tabelas Aluno e Matrícula

#### 4️⃣ (Opcional) Visualizar BD no Prisma Studio

```bash
npx prisma studio
# Abre interface web em http://localhost:5555
```

### 🎨 Frontend Configuration

Não é necessária configuração especial. Verifique apenas:

**Arquivo: `src/services/api.js`**

```javascript
// Certifique-se que a URL base está correta
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
```

Se usar porta diferente no backend, atualize aqui.

---

## 🎬 Como Executar

### 🚀 Opção 1: Abrir em 2 Terminais

#### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

Esperado:

```
Server is running on port 3000
```

#### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

Esperado:

```
  VITE v7.2.4  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### 🌐 Acessar no Navegador

1. Abra o navegador
2. Acesse: **http://localhost:5173/**
3. Backend estará disponível em: **http://localhost:3000/api**

### ✅ Verificar se Está Funcionando

```bash
# Em outro terminal, testar a API
curl http://localhost:3000/alunos
# Deve retornar: []

curl http://localhost:3000/matriculas/historico
# Deve retornar: []
```

---

## 📁 Estrutura do Projeto

```
cadastroAluno/
│
├── 📄 README.md                    # Este arquivo
├── 📄 LICENSE                      # Licença do projeto
├── 📁 .git/                        # Controle de versão
│
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📄 app.js               # Configuração Express
│   │   ├── 📄 server.js            # Inicialização do servidor
│   │   │
│   │   ├── 📁 controllers/         # Lógica de negócio
│   │   │   ├── 📄 aluno.controller.js
│   │   │   │   ├── criarAluno()
│   │   │   │   ├── listarAlunos()
│   │   │   │   ├── buscarAlunos()
│   │   │   │   └── excluirAluno()
│   │   │   │
│   │   │   └── 📄 matricula.controller.js
│   │   │       ├── criarMatricula()
│   │   │       ├── listarHistoricoMatriculas()
│   │   │       └── inativarMatricula()
│   │   │
│   │   ├── 📁 routes/              # Definição de rotas
│   │   │   ├── 📄 aluno.routes.js
│   │   │   │   POST   /alunos
│   │   │   │   GET    /alunos
│   │   │   │   GET    /alunos/buscar
│   │   │   │   DELETE /alunos/:id
│   │   │   │
│   │   │   └── 📄 matricula.routes.js
│   │   │       POST   /matriculas
│   │   │       GET    /matriculas/historico
│   │   │       PATCH  /matriculas/:id/inativar
│   │   │
│   │   └── 📁 prisma/
│   │       └── 📄 client.js        # Cliente Prisma
│   │
│   ├── 📁 prisma/
│   │   ├── 📄 schema.prisma        # Definição do banco de dados
│   │   └── 📁 migrations/          # Histórico de migrações
│   │       ├── migration.lock
│   │       └── [timestamp]_[name]/
│   │           └── migration.sql
│   │
│   ├── 📄 package.json             # Dependências e scripts
│   ├── 📄 .env                     # Variáveis de ambiente (criar)
│   └── 📄 .env.example             # Template de .env
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📄 App.jsx              # Componente raiz
│   │   ├── 📄 main.jsx             # Ponto de entrada
│   │   │
│   │   ├── 📁 components/
│   │   │   └── 📄 sidebar.jsx      # Menu de navegação
│   │   │       ├── Menu Hamburger
│   │   │       ├── Navbar com Links
│   │   │       └── Botão Fechar
│   │   │
│   │   ├── 📁 layouts/
│   │   │   └── 📄 MainLayout.jsx   # Layout principal
│   │   │       ├── Sidebar
│   │   │       └── Content area
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── 📁 home/
│   │   │   │   └── 📄 home.jsx     # Página inicial
│   │   │   │
│   │   │   ├── 📁 alunos/
│   │   │   │   ├── 📄 alunos.jsx   # Gerenciar alunos
│   │   │   │   │   ├── Formulário
│   │   │   │   │   ├── Busca
│   │   │   │   │   └── Grid de cards
│   │   │   │   └── 📄 alunos.css
│   │   │   │
│   │   │   └── 📁 matriculas/
│   │   │       ├── 📄 matriculas.jsx        # Criar matrícula
│   │   │       │   ├── Busca de aluno
│   │   │       │   ├── Lista de resultados
│   │   │       │   └── Botão matricular
│   │   │       ├── 📄 matriculasHistorico.jsx # Histórico
│   │   │       │   ├── Grid de cards
│   │   │       │   └── Status badges
│   │   │       └── 📄 matriculas.css
│   │   │
│   │   ├── 📁 services/
│   │   │   └── 📄 api.js           # Configuração Axios
│   │   │       └── baseURL: http://localhost:3000
│   │   │
│   │   └── 📁 styles/
│   │       ├── 📄 global.css       # Design system global
│   │       │   ├── Design Tokens
│   │       │   ├── Cores e Tipografia
│   │       │   ├── Reset CSS
│   │       │   └── Componentes (btn, card, badge)
│   │       └── 📄 layout.css       # Estilos do layout
│   │           ├── Sidebar
│   │           ├── Menu
│   │           └── Media queries
│   │
│   ├── 📁 public/                  # Arquivos estáticos
│   ├── 📄 index.html               # HTML principal
│   ├── 📄 vite.config.js           # Configuração Vite
│   ├── 📄 eslint.config.js         # Regras ESLint
│   ├── 📄 package.json
│   └── 📄 README.md
│
└── 📁 [outros arquivos de configuração]
```

---

## 📚 Documentação Técnica

### 🏗️ Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                  Cliente (React)                     │
│  ┌──────────────────────────────────────────────┐   │
│  │          React Components (Pages)            │   │
│  │  ├─ Home                                     │   │
│  │  ├─ Alunos (Create, List, Delete)          │   │
│  │  └─ Matrículas (Create, List, Update)      │   │
│  └──────────────────────────────────────────────┘   │
│                      ↓ (Axios)                       │
└─────────────────────────────────────────────────────┘
                        ↓ HTTP
┌─────────────────────────────────────────────────────┐
│                API REST (Express)                    │
│  ┌──────────────────────────────────────────────┐   │
│  │         Routes (API Endpoints)               │   │
│  │  ├─ POST   /alunos                           │   │
│  │  ├─ GET    /alunos                           │   │
│  │  ├─ GET    /alunos/buscar                    │   │
│  │  ├─ DELETE /alunos/:id                       │   │
│  │  ├─ POST   /matriculas                       │   │
│  │  ├─ GET    /matriculas/historico             │   │
│  │  └─ PATCH  /matriculas/:id/inativar          │   │
│  └──────────────────────────────────────────────┘   │
│                      ↓ (Prisma)                      │
│  ┌──────────────────────────────────────────────┐   │
│  │    Controllers (Business Logic)              │   │
│  │  ├─ alunoController                          │   │
│  │  └─ matriculaController                      │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                        ↓ SQL
┌─────────────────────────────────────────────────────┐
│              PostgreSQL / SQLite                     │
│  ┌──────────────────────────────────────────────┐   │
│  │           Database Schema                    │   │
│  │  ├─ Aluno                                    │   │
│  │  │  ├─ id (PK)                               │   │
│  │  │  ├─ nome                                  │   │
│  │  │  ├─ email (UNIQUE)                        │   │
│  │  │  ├─ cpf (UNIQUE)                          │   │
│  │  │  ├─ ativo                                 │   │
│  │  │  └─ createdAt, updatedAt                  │   │
│  │  │                                           │   │
│  │  └─ Matricula                                │   │
│  │     ├─ id (PK)                               │   │
│  │     ├─ alunoId (FK)                          │   │
│  │     ├─ dataMatricula                         │   │
│  │     ├─ ativo                                 │   │
│  │     ├─ dataInativacao                        │   │
│  │     └─ createdAt, updatedAt                  │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### 🔄 Fluxo de Dados

#### Criação de Aluno

```
User Input → Formulário → handleSubmit() → api.post('/alunos')
                                                    ↓
                                          Express Router
                                                    ↓
                                      alunoController.criarAluno()
                                                    ↓
                                      Validar dados, Verificar duplicatas
                                                    ↓
                                      Prisma.aluno.create()
                                                    ↓
                                         Banco de Dados
                                                    ↓
                                      Resposta (201 Created)
                                                    ↓
                                          Atualizar lista
```

#### Criação de Matrícula

```
Busca Aluno → Lista de Alunos → Click "Matricular"
                                          ↓
                        api.post('/matriculas', {alunoId})
                                          ↓
                          matriculaController.criarMatricula()
                                          ↓
                ✓ Aluno existe?  ✓ Matrícula ativa?
                                          ↓
                       Prisma.matricula.create()
                                          ↓
                           Banco de Dados
                                          ↓
                            Resposta (201)
                                          ↓
                          Limpar form, Mensagem sucesso
```

---

## 🔌 API Endpoints

### Base URL

```
http://localhost:3000
```

### Autenticação

Não implementada (projeto educacional)

### Headers Padrão

```http
Content-Type: application/json
```

---

### Alunos

#### ➕ Criar Aluno

```http
POST /alunos
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "cpf": "12345678901"
}
```

**Resposta (201 Created)**

```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@example.com",
  "cpf": "12345678901",
  "ativo": true,
  "createdAt": "2026-02-07T10:30:00Z"
}
```

**Erros**

```json
// 400 Bad Request
{ "erro": "Campos obrigatórios" }

// 409 Conflict
{ "erro": "Email ou CPF já cadastrado" }
```

---

#### 📋 Listar Todos os Alunos

```http
GET /alunos
```

**Resposta (200 OK)**

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@example.com",
    "cpf": "12345678901",
    "ativo": true,
    "createdAt": "2026-02-07T10:30:00Z"
  }
]
```

**Query Parameters**

```
?search=joao  // Busca por nome ou CPF
```

---

#### 🔍 Buscar Aluno

```http
GET /alunos/buscar?termo=joao
```

**Resposta (200 OK)**

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@example.com",
    "cpf": "12345678901",
    "ativo": true,
    "createdAt": "2026-02-07T10:30:00Z"
  }
]
```

**Características**

- Case-insensitive (maiúscula/minúscula)
- Busca parcial no nome
- Busca exata no CPF
- Retorna apenas alunos ativos

---

#### 🗑️ Inativar Aluno (Soft Delete)

```http
DELETE /alunos/1
```

**Resposta (200 OK)**

```json
{
  "mensagem": "Aluno desativado com sucesso"
}
```

**Erros**

```json
// 404 Not Found
{ "erro": "Aluno não encontrado" }
```

---

### Matrículas

#### ➕ Criar Matrícula

```http
POST /matriculas
Content-Type: application/json

{
  "alunoId": 1
}
```

**Resposta (201 Created)**

```json
{
  "id": 1,
  "alunoId": 1,
  "dataMatricula": "2026-02-07T10:35:00Z",
  "ativo": true,
  "dataInativacao": null,
  "createdAt": "2026-02-07T10:35:00Z"
}
```

**Validações**

- ✅ alunoId é obrigatório
- ✅ Aluno deve existir no banco
- ✅ Aluno não pode ter matrícula ativa

**Erros**

```json
// 400 Bad Request
{ "erro": "Aluno é obrigatório" }

// 404 Not Found
{ "erro": "Aluno não encontrado. Não é possível criar matrícula." }

// 409 Conflict
{ "erro": "Aluno já possui matrícula ativa" }
```

---

#### 📚 Listar Histórico de Matrículas

```http
GET /matriculas/historico
```

**Resposta (200 OK)**

```json
[
  {
    "id": 1,
    "alunoId": 1,
    "dataMatricula": "2026-02-07T10:35:00Z",
    "ativo": true,
    "dataInativacao": null,
    "createdAt": "2026-02-07T10:35:00Z",
    "aluno": {
      "id": 1,
      "nome": "João Silva",
      "email": "joao@example.com",
      "cpf": "12345678901",
      "ativo": true,
      "createdAt": "2026-02-07T10:30:00Z"
    }
  }
]
```

**Retorna**

- ✅ Matrículas ativas
- ✅ Matrículas inativas
- ✅ Dados completos do aluno

---

#### 🔴 Inativar Matrícula

```http
PATCH /matriculas/1/inativar
```

**Resposta (200 OK)**

```json
{
  "mensagem": "Matrícula desativada com sucesso"
}
```

**Validações**

- ✅ Matrícula deve existir
- ✅ Não pode inativar matrícula já inativa

**Erros**

```json
// 404 Not Found
{ "erro": "Matrícula não encontrada" }

// 400 Bad Request
{ "erro": "Matrícula já está inativa" }
```

---

## 💾 Banco de Dados

### Schema Prisma

```prisma
datasource db {
  provider = "postgresql"  // ou "sqlite"
  url      = env("DATABASE_URL")
}

model Aluno {
  id         Int         @id @default(autoincrement())
  nome       String
  email      String      @unique
  cpf        String      @unique
  ativo      Boolean     @default(true)
  createdAt  DateTime    @default(now())
  matriculas Matricula[]
}

model Matricula {
  id             Int      @id @default(autoincrement())
  dataMatricula  DateTime
  createdAt      DateTime @default(now())
  ativo          Boolean  @default(true)
  dataInativacao DateTime?
  alunoId        Int
  aluno          Aluno    @relation(fields: [alunoId], references: [id])
}
```

### Migrações

```bash
# Ver todas as migrações
ls prisma/migrations/

# Criar migração manual
npx prisma migrate dev --name sua_migracao

# Rollback de última migração
npx prisma migrate resolve --rolled-back [migration-name]

# Reset banco de dados (PERDER DADOS!)
npx prisma migrate reset
```

---

## 🎨 Design System

### 🎭 Paleta de Cores

```css
/* Primárias */
--primary-50: #eff6ff --primary-100: #dbeafe --primary-200: #bfdbfe
  --primary-300: #93c5fd --primary-400: #60a5fa --primary-500: #3b82f6
  --primary-600: #2563eb /* Principal */ --primary-700: #1d4ed8
  --primary-800: #1e40af --primary-900: #1e3a8a /* Estados */ --success: #10b981
  --danger: #ef4444 --warning: #f59e0b --info: #3b82f6 /* Neutros */
  --background: #f8fafc --surface: #ffffff --border: #e2e8f0
  --text-primary: #0f172a --text-secondary: #475569 --text-muted: #64748b;
```

### 🧩 Componentes CSS

#### Botão

```html
<!-- Primário -->
<button class="btn btn-primary">Ação</button>

<!-- Secundário -->
<button class="btn btn-secondary">Ação</button>

<!-- Perigo -->
<button class="btn btn-danger">Deletar</button>

<!-- Sucesso -->
<button class="btn btn-success">Salvar</button>

<!-- Outline -->
<button class="btn btn-outline">Outline</button>

<!-- Sizes -->
<button class="btn btn-sm">Pequeno</button>
<button class="btn btn-lg">Grande</button>

<!-- Icon -->
<button class="btn-icon"><i>icon</i></button>
```

#### Card

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Título</h3>
  </div>
  <div class="card-body">Conteúdo</div>
  <div class="card-footer">
    <button class="btn btn-primary">Ação</button>
  </div>
</div>
```

#### Badge

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
```

#### Grid

```html
<!-- Grid automático -->
<div class="grid grid-2">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
</div>

<!-- Grid 3 colunas -->
<div class="grid grid-3">...</div>
```

---

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
< 480px      /* Mobile phones */
480px - 768px  /* Tablets */
768px - 1024px /* Small desktop */
1024px+      /* Desktop */
```

### Comportamentos

| Tamanho | Sidebar  | Menu      | Grid       | Layout |
| ------- | -------- | --------- | ---------- | ------ |
| Mobile  | Oculta   | Hamburger | 1 coluna   | Stack  |
| Tablet  | Fino     | Ícones    | 2 colunas  | Flex   |
| Desktop | Completo | Completo  | 3+ colunas | Grid   |

### Testes

```bash
# DevTools (F12)
# → Device Toolbar (Ctrl + Shift + M)
# → Testar em: 375px, 768px, 1024px, 1920px
```

---

## 🔧 Scripts Disponíveis

### Backend

```bash
# Desenvolvimento com hot reload
npm run dev

# Executar uma vez
node src/server.js

# Prisma Studio (gerenciar BD)
npx prisma studio

# Seed database (se existir)
npx prisma db seed
```

### Frontend

```bash
# Dev server com hot reload
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint código
npm run lint

# Fix lint automaticamente
npm run lint -- --fix
```

### Raiz

```bash
# Instalar dependências de ambos
npm install --prefix backend && npm install --prefix frontend

# Rodar ambos simultaneamente (requer npm-run-all)
npm install -g npm-run-all
npm-run-all --parallel "npm:dev:*"
```

---

## 🔍 Troubleshooting

### ❌ "EADDRINUSE: address already in use :::3000"

Porta 3000 já está em uso.

**Solução:**

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Ou usar porta diferente
PORT=3001 npm run dev
```

---

### ❌ "Cannot find module"

Node modules não foram instaladas corretamente.

**Solução:**

```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install

# Ou limpar cache npm
npm cache clean --force
npm install
```

---

### ❌ CORS Error (No 'Access-Control-Allow-Origin')

Frontend e backend em domínios diferentes.

**Verificar:**

1. Backend rodando em `http://localhost:3000`
2. Frontend rodando em `http://localhost:5173`
3. API config em `frontend/src/services/api.js`

**Solução:**

```javascript
// src/services/api.js
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
```

---

### ❌ "Prisma error: Database url is invalid"

Variável DATABASE_URL não está configurada.

**Solução:**

```bash
# Criar .env
cd backend

# Windows
type nul > .env

# Linux/Mac
touch .env

# Adicionar:
# DATABASE_URL="file:./dev.db"
```

---

### ❌ "Port 5173 already in use"

Porta do Vite já está em uso.

**Solução:**

```bash
# Usar porta diferente
npm run dev -- --port 5174

# Ou matar processo
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

---

### ❌ "Build failed"

Erro ao fazer build do Vite.

**Solução:**

```bash
# Limpar cache
rm -rf dist node_modules
npm install

# Tentar build novamente
npm run build

# Ou fazer preview do dev
npm run dev
```

---

## 🎯 Exemplos de Uso

### 📖 Cenário 1: Cadastrar um Aluno

1. Abra http://localhost:5173/
2. Clique em **"Alunos"** no menu lateral
3. Preencha o formulário:
   - **Nome**: João Silva
   - **Email**: joao@example.com
   - **CPF**: 12345678901
4. Clique em **"Cadastrar Aluno"**
5. ✅ Aluno aparece na lista abaixo

**Curl equivalente:**

```bash
curl -X POST http://localhost:3000/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@example.com",
    "cpf": "12345678901"
  }'
```

---

### 📖 Cenário 2: Matricular um Aluno

1. Clique em **"Matrículas"** no menu
2. No campo de busca, digite:
   - Nome: "João"
   - Ou CPF: "12345678901"
3. Clique em **"Buscar"**
4. Clique em **"Matricular"** no aluno desejado
5. ✅ Mensagem de sucesso aparece
6. Formulário é limpo

**Curl equivalente:**

```bash
curl -X POST http://localhost:3000/matriculas \
  -H "Content-Type: application/json" \
  -d '{"alunoId": 1}'
```

---

### 📖 Cenário 3: Visualizar Histórico

1. Clique em **"Histórico"** no menu
2. Veja todas as matrículas:
   - **Ativas** (badge verde)
   - **Inativas** (badge vermelha)
3. Clique em **"Inativar matrícula"** para desativar
4. ✅ Status muda para "Inativa"

**Curl equivalente:**

```bash
# Ver histórico
curl http://localhost:3000/matriculas/historico

# Inativar
curl -X PATCH http://localhost:3000/matriculas/1/inativar
```

---

### 📖 Cenário 4: Buscar Aluno

1. Na página de **Alunos**, vá para "Pesquisar alunos"
2. Digite nome ou CPF
3. Clique em **"Buscar"**
4. ✅ Lista é filtrada

**Curl equivalente:**

```bash
# Por nome
curl "http://localhost:3000/alunos?search=joao"

# Por CPF
curl "http://localhost:3000/alunos/buscar?termo=12345678901"
```

---

### 📖 Cenário 5: Inativar Aluno

1. Na lista de alunos, localize o aluno
2. Clique no botão 🗑️ (lixeira)
3. Confirme a ação
4. ✅ Aluno desaparece da lista (soft delete)

**Curl equivalente:**

```bash
curl -X DELETE http://localhost:3000/alunos/1
```

---

## 🚀 Deployment

### Backend Deployment

#### Opção 1: Render

1. Faça push do código para GitHub
2. Vá em [render.com](https://render.com/)
3. Clique em "New +" → "Web Service"
4. Conecte seu repositório
5. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Adicione `DATABASE_URL`
6. Deploy!

#### Opção 2: Railway

1. Instale CLI: `npm install -g railway`
2. `railway login`
3. `railway init`
4. `railway link` (banco PostgreSQL)
5. `railway up`

#### Opção 3: Heroku (descontinuado)

Heroku encerrou plano free em Nov/2022. Use Render ou Railway.

### Frontend Deployment

#### Opção 1: Vercel

```bash
# Instale Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Opção 2: Netlify

```bash
# Build
npm run build

# Deploy pasta `dist/`
# Ou use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Opção 3: GitHub Pages

```bash
# Build
npm run build

# Deploy para gh-pages
# Configure em package.json:
"homepage": "https://usuario.github.io/cadastroAluno"
```

---

## 📚 Referências

### Documentação Oficial

- **[Node.js Docs](https://nodejs.org/docs/)** - Runtime JavaScript
- **[Express.js Docs](https://expressjs.com/)** - Framework web
- **[Prisma Docs](https://www.prisma.io/docs/)** - ORM
- **[PostgreSQL Docs](https://www.postgresql.org/docs/)** - Banco de dados
- **[React Docs](https://react.dev/)** - Biblioteca UI
- **[React Router Docs](https://reactrouter.com/)** - Roteamento
- **[Vite Docs](https://vitejs.dev/)** - Build tool
- **[Axios Docs](https://axios-http.com/)** - HTTP client
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones

### Tutoriais

- [Express REST API Tutorial](https://dev.to/masonfang/7-express-tips-that-will-make-you-a-better-developer-32h)
- [Prisma Tutorial](https://www.prisma.io/docs/getting-started)
- [React Hooks Guide](https://react.dev/reference/react/hooks)
- [CSS Grid & Flexbox](https://web.dev/learn/css/)

### Ferramentas

- **[Insomnia](https://insomnia.rest/)** - Testar API
- **[Postman](https://www.postman.com/)** - Testar API
- **[VS Code](https://code.visualstudio.com/)** - Editor
- **[Git](https://git-scm.com/)** - Controle de versão

---

## 👨‍💻 Autor

**Douglas**

- 📧 Email: inaciolemos96@gmail.com 
- 📧 Email: dlfrontend09@gmail.com
- 🔗 GitHub: [@dlemos09](https://github.com/dlemos09)
- 💼 LinkedIn: [Douglas Lemos](www.linkedin.com/in/douglas-lemos-b66069252)

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

```
ISC License (ISC)

Copyright (c) 2026, Douglas

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
```

Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ❓ Suporte

### Encontrou um Bug?

1. Abra uma [Issue](https://github.com/seu-repo/issues)
2. Descreva o problema em detalhes
3. Inclua: versão do Node, SO, erro completo
4. Se possível, inclua screenshot/vídeo

### Tem uma Sugestão?

1. Abra uma [Discussion](https://github.com/seu-repo/discussions)
2. Descreva a feature desejada
3. Explique o caso de uso

### Precisa de Ajuda?

- 📚 Verifique a documentação acima
- 🔍 Veja a seção Troubleshooting
- 💬 Abra uma Discussion
- 📧 Envie um email

---

## 🙏 Agradecimentos

Agradecimentos especiais a:

- [Express.js](https://expressjs.com/) - Framework
- [Prisma](https://www.prisma.io/) - ORM
- [React](https://react.dev/) - Biblioteca UI
- [Vite](https://vitejs.dev/) - Build tool
- Comunidade open source

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere deixar uma estrela no GitHub!**

Desenvolvido em 2026

</div>
