# Tienda de Camisetas - Mini Fullstack App

Proyecto de ejemplo para aprender NestJS + Prisma + React (TypeScript) paso a paso.
El objetivo es construir una API con autenticación JWT y un frontend en React.

## Arquitectura
- backend/  - NestJS (API REST)
  - modular, DTOs, Guards, Prisma
- frontend/ - React + TypeScript (Vite)
- .env files para configuración
- Tests con Jest / Supertest

## Endpoint
- GET / => { status: "ok" }
- GET /health => { success: true, message: "Service is healthy" }
- GET /products => devuelve una lista de productos (datos dummy)

## Requisitos
- Node.js >= 16 (recomendado 18+). Recomiendo usar nvm.
- npm

## Cómo ejecutar (desarrollo)

A continuación pasos para levantar backend y frontend en tu máquina (Linux). Ejecuta comandos desde la raíz del proyecto.

1) Preparar Node (recomendado: nvm)
```bash
# instalar nvm si no lo tienes
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# instalar y usar LTS (por ejemplo v18/20)
nvm install --lts
nvm use --lts
```

2) Backend (NestJS + Prisma)
```bash
# ir al backend
cd /home/sjo/Documents/Tienda-de-camisetas-2/backend

# instalar dependencias
npm install

# copiar variables de ejemplo y ajustarlas
cp .env.example .env
# editar .env si necesitas cambiar DATABASE_URL o JWT_SECRET
# por defecto .env.example usa SQLite: DATABASE_URL="file:./dev.db"

# generar cliente Prisma (necesario siempre que cambies el schema)
npx prisma generate

# crear y aplicar migración (SQLite por defecto en .env.example)
npx prisma migrate dev --name init

# (opcional) abrir Prisma Studio para inspeccionar datos
npx prisma studio

# iniciar servidor en modo desarrollo
npm run start:dev

# la API estará en http://localhost:3000
# comprobar: GET http://localhost:3000/health
```

Notas para usar PostgreSQL en lugar de SQLite:
- Si prefieres Postgres, edita `backend/.env` y pon una URL válida que empiece con `postgresql://` o `postgres://`.
- Asegúrate de que la base existe.
- Luego ejecuta `npx prisma migrate dev --name init` para crear las tablas.

3) Frontend (React + Vite)
```bash
# ir al frontend
cd /home/sjo/Documents/Tienda-de-camisetas-2/frontend

# instalar dependencias
npm install

# (opcional) copiar .env y ajustar VITE_API_URL si quieres apuntar al backend
cp .env.example .env
# dentro de .env usa VITE_API_URL=http://localhost:3000

# iniciar servidor de desarrollo
npm run dev

# abre http://localhost:5173 en tu navegador
```

4) Tests de integración (Jest + Supertest)
```bash
# desde backend
cd /home/sjo/Documents/Tienda-de-camisetas-2/backend

# ejecutar tests e2e
npm run test:e2e
```
