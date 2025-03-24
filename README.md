# 🚀 NestJS Prisma Starter  

**NestJS Prisma Starter** es un boilerplate listo para producción que te permite construir APIs REST robustas con **NestJS**, **Prisma** y **PostgreSQL**. Este proyecto está diseñado con una arquitectura modular y escalable, facilitando el desarrollo backend con buenas prácticas y una configuración optimizada.  

## 🛠️ Tecnologías utilizadas  
- **NestJS** - Framework progresivo para Node.js  
- **Prisma ORM** - ORM moderno y tipado para bases de datos  
- **PostgreSQL** - Base de datos relacional de alto rendimiento  
- **TypeScript** - Código seguro y escalable  
- **Docker** - Opcional, para levantar PostgreSQL en contenedores  

## 🚀 Instalación y configuración  

## 1️⃣ Clonar el repositorio  
```
git clone https://github.com/Ivnoff1/nestjs-prisma-starter.git
cd nestjs-prisma-starter
```
## 2️⃣ Instalar dependencias

npm install

## 3️⃣ Configurar las variables de entorno
DATABASE_URL=""
PORT=3000

Si prefieres usar Docker, levanta un contenedor con PostgreSQL:

docker-compose up -d

## 4️⃣ Configurar Prisma y la base de datos

npx prisma generate
npx prisma migrate dev --name init


5️⃣ Iniciar el servidor

npm run start:dev

📂 Estructura del proyecto

📦 src
 ┣ 📂 prisma/          # Configuración de Prisma
 ┣ 📜 app.module.ts    # Módulo principal
 ┣ 📜 main.ts          # Punto de entrada de la aplicación
 ┗ 📜 .env.example     # Ejemplo de variables de entorno