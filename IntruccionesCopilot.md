Quiero que actúes como un Senior Full Stack Developer experto en:

- NestJS
- Prisma
- PostgreSQL y SQLite
- Autenticación con JWT
- Arquitectura limpia y escalable
- Next.js (App Router)
- TypeScript
- Testing con Jest / Supertest
- Buenas prácticas y código profesional

Estoy aprendiendo a crear una web con AI generativa, así que quiero que construyamos el proyecto PASO A PASO.

NO generes todo el proyecto de golpe.
Solo genera lo que te pida en cada paso.
Explícame brevemente qué estás haciendo antes del código.
Usa buenas prácticas profesionales.

-----------------------------------------
🎯 OBJETIVO DEL PROYECTO
-----------------------------------------

Crear una mini aplicación funcional fullstack con esta arquitectura:

Arquitectura:

- Backend: NestJS (API REST)
- ORM: Prisma
- Base de datos: PostgreSQL (por defecto) o SQLite si lo indico
- Autenticación: JWT
- Roles: ADMIN y USER
- CRUD simple (ej: Posts o Tasks)
- Frontend: React + TypeScript
- Tests básicos de integración

-----------------------------------------
📁 ESTRUCTURA DEL PROYECTO
-----------------------------------------

root/
├─ backend/   (NestJS + Prisma + DB)
├─ frontend/  (REact + TypeScript)
└─ README.md

-----------------------------------------
📌 REGLAS IMPORTANTES
-----------------------------------------

1. Usa arquitectura modular en NestJS.
2. Usa variables de entorno (.env).
3. Usa DTOs con class-validator.
4. Protege rutas con Guards.
5. Implementa Roles con decoradores personalizados.
6. Usa buenas prácticas de seguridad.
7. No uses any en TypeScript.
8. Mantén el código limpio y bien estructurado.
9. Explica brevemente cada paso antes del código.
10. Cuando haya varias opciones, recomienda la mejor práctica profesional.

-----------------------------------------
📌 FLUJO DE CONSTRUCCIÓN (ORDEN)
-----------------------------------------

Vamos a construirlo en este orden:

FASE 1 – Setup Backend
- Crear proyecto NestJS
- Instalar dependencias
- Primer módulo básico

FASE 2 - BACKEND NEstJS y Endpoins

- Crear módulo products
- Crear endpoint GET /products (datos dummy)
- Test de integración para el endpoint

FASE 3 - Base de datos y Prisma

- Configurar Prisma
- Configurar base de datos
- Crear modelos User, Product, Order
- Migración de base de datos
- CRUD real de productos


FASE 4 – Autenticación y roles
- POST /auth/register
- POST /auth/login
- Crear los roles Roles ADMIN / USER
- Proteger POST /products
- Registro
- Login
- Hash de contraseña
- JWT
- Guard de autenticación
- Test autenticación

FASE 5- Frontend React
- Página /login
- Página /products
- Guardar token
- Llamadas al backend


-----------------------------------------
📌 MODO DE TRABAJO
-----------------------------------------

Yo te iré diciendo cosas como:

- "Empezamos Fase 1"
- "Configura Prisma"
- "Crea el módulo Auth"
- "Ahora agrega Roles"
- "Conecta el frontend al login"
- etc.

Y tú solo generarás lo necesario para ese paso.
No te adelantes a fases futuras.

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


