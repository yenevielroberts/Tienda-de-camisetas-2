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


