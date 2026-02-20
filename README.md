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

# ejecutar el archivo seed desde la carpeta backend:

npm run seed o npx prisma db seed.

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
cd frontend

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
cd backend

# ejecutar tests e2e
npm run test:e2e
```


## Fases hechas

## FASE 1 – Setup Backend
1. 
- Crear proyecto NestJS
- Instalar dependencias

cd /home/sjo/Documents/Tienda-de-camisetas-2

### Crear carpeta backend y inicializar npm
mkdir -p backend
cd backend
npm init -y

### Instalar dependencias esenciales de NestJS y utilidades
npm install @nestjs/common @nestjs/core @nestjs/platform-express @nestjs/config reflect-metadata rxjs class-transformer class-validator

### Dependencias de desarrollo
npm install -D typescript ts-node-dev @types/node

### (Opcional) instala la CLI localmente si quieres usarla después
npm install -D @nestjs/cli

### Creación de archivos
1. package.json (actualiza scripts)
2. tsconfig.json
3. env.example
4. src/main.ts
5. src/app.module.ts
6. src/app.controller.ts
7. src/app.service.ts

## Instrucciones para ejecutar:

 1. desde /home/sjo/Documents/Tienda-de-camisetas-2/backend
npm run start:dev
2. luego abrir http://localhost:3000 => debería devolver {"status":"ok"}

**IMPORTANTE:**
La versión de node debe ser superior a 16

2. 
- Crear el endpoint /health

GET http://localhost:3000/health => {"success":true,"message":"Service is healthy"}




## Fase 2
- Crear módulo products
- Crear endpoint GET /products (datos dummy)

- Test de integración
# Ejecutar desde la carpeta del backend
cd /home/sjo/Documents/Tienda-de-camisetas-2/backend

# Instalar dependencias para testing (Jest + ts-jest + tipos + Supertest + helper de Nest)
npm install -D jest@29 ts-jest@29 @types/jest@29 supertest @types/supertest @nestjs/testing

Ejecutar los test: npm run test:e2e

## FASE 3

- Cómo instalar Prisma:

# instalar Prisma (cli como dev) y el cliente
cd /home/sjo/Documents/Tienda-de-camisetas-2/backend
npm install -D prisma
npm install @prisma/client

# inicializar prisma (crea carpeta prisma/ y prisma/schema.prisma por defecto)
npx prisma init --datasource-provider postgresql

- **Qué se ha creado en esta fase:**

1. Creado: schema.prisma
Definí los modelos User, Product y Order, y el enum Role. Es la fuente de verdad para la BD con Prisma.
2. Creado: prisma.service.ts
Servicio que inicializa y cierra el cliente de Prisma. Comentarios simples añadidos para recordar su función.
3. Creado: prisma.module.ts
Módulo global que exporta PrismaService para inyección en otros módulos.
4. Modificado: .env.example
Añadí ejemplos de DATABASE_URL para Postgres y SQLite.


## Generar el cliente y aplicar migraciones

 1.  Generar el cliente Prisma (si cambias el schema)
npx prisma generate

Explicación breve: npx prisma generate genera el cliente de Prisma (paquete @prisma/client) a partir de tu schema.prisma. Ese cliente es el que usarás en el código para consultar la base de datos (PrismaClient). Ya que se ejecutó correctamente, el cliente está disponible y Prisma verificó tu schema.

2. 
-  Crear migración y aplicar (requiere DATABASE_URL válido con Postgres o usar SQLite). Creará la migración y aplicar (creará dev.db y las tablas)
-  Para Postgres:
npx prisma migrate dev --name init

-  Si usas SQLite (rápido para desarrollo)
npx prisma migrate dev --name init

**Resultado:** se crea dev.db, la tabla según schema y el cliente sigue disponible.

- Ver datos con Prisma Studio
npx prisma studio

## Integración de datos
- Borrar los datos dummy e introducirlos en la base de datos.
- Crear un seed para que popule la base de datos.

    ejecutar el archivo seed desde la carpeta backend:

    npm run seed o npx prisma db seed.


