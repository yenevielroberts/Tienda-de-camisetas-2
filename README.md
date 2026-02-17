# Tienda de Camisetas - Mini Fullstack App

Proyecto de ejemplo para aprender NestJS + Prisma + React (TypeScript) paso a paso.
El objetivo es construir una API con autenticación JWT y un frontend en React.

## Arquitectura
- backend/  - NestJS (API REST)
  - modular, DTOs, Guards, Prisma (pendiente)
- frontend/ - React + TypeScript (Vite)
- .env files para configuración
- Tests con Jest / Supertest (pendiente)

## Endpoint

/ => { status:	"ok"}
/health => {
    success:true,
    message:"Service is healthy"
}

## Requisitos
- Node.js >= 16 (recomendado 18+). Recomiendo usar nvm.
- npm

## Estado actual
- Backend básico con endpoint de salud:
  - GET /health => { "success": true, "message": "Service is healthy" }

## Cómo ejecutar (desarrollo)

1. Instalar/usar Node recomendado (ejemplo con nvm)
```bash
# instalar nvm si no lo tienes
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# instalar y usar LTS
nvm install --lts
nvm use --lts
```

2. Backend
```bash
cd /home/sjo/Documents/Tienda-de-camisetas-2/backend
npm install
# Crear .env a partir de .env.example y ajustar si es necesario
cp .env.example .env

npm run start:dev
# servidor en http://localhost:3000
# comprobar: GET http://localhost:3000/health
```


## Notas y próximos pasos
- Configurar Prisma y la base de datos (Postgres por defecto, opción SQLite).
- Implementar módulo `products` y CRUD.
- Añadir autenticación (register/login), roles y protección de rutas.
- Añadir tests de integración con Jest/Supertest.

Si quieres, procedemos con el siguiente paso (por ejemplo: "Crear módulo products" o "Configurar Prisma").  