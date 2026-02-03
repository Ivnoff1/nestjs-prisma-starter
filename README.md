# 🚀 NestJS Prisma Starter

**NestJS Prisma Starter** es una forma recomendada de configurar **Prisma** en **NestJS** para las versiones más recientes del ecosistema. El proyecto sirve como guía práctica para integrar Prisma con PostgreSQL siguiendo buenas prácticas, una arquitectura modular y una configuración actualizada.

---

## 🆕 Novedades

* ✅ Actualizado a **Prisma v7.3.0**
* 🔌 Nuevo adaptador **@prisma/adapter-pg** para PostgreSQL
* 📦 Migración del gestor de paquetes a **pnpm** (npm sigue siendo compatible)
* 📁 El cliente de Prisma ahora se genera en `prisma/generated`
* ⚙️ Control explícito de migraciones mediante `prisma.config.ts`
* 🧩 Soporte para **múltiples archivos de schema** en Prisma (`multi-schema`)

---

## 🛠️ Tecnologías utilizadas

* **NestJS** – Framework progresivo para Node.js
* **Prisma ORM (7.3.0)** – ORM moderno y tipado
* **@prisma/adapter-pg** – Adaptador oficial para PostgreSQL
* **PostgreSQL** – Base de datos relacional
* **TypeScript** – Código seguro y escalable
* **pnpm** – Gestor de paquetes rápido y eficiente
* **Docker** – Opcional, para levantar PostgreSQL en contenedores

---

## 🚀 Instalación y configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Ivnoff1/nestjs-prisma-starter.git
cd nestjs-prisma-starter
```

---

### 2️⃣ Configurar variables de entorno

Debes crear un archivo `.env` basado en el ejemplo `.env.example`.

Variables mínimas requeridas:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
PORT=3000
```

⚠️ Asegúrate de que la URL de conexión a PostgreSQL sea correcta.

---

### 3️⃣ Instalar dependencias

Este proyecto utiliza **pnpm** por defecto:

```bash
pnpm install
```

Si necesitas actualizar dependencias:

```bash
pnpm up -L
```

También puedes usar **npm** si lo prefieres:

```bash
npm install
```

---

### 4️⃣ Generar el cliente de Prisma

Antes de iniciar el proyecto, es obligatorio generar el cliente de Prisma:

```bash
pnpm exec prisma generate
```

📁 El cliente se generará en:

```
prisma/generated
```

---

### 5️⃣ Iniciar el servidor

```bash
pnpm run start:dev
```

La API quedará disponible por defecto en:

```
http://localhost:3000
```

---

## 🧬 Migraciones con Prisma

Para ejecutar migraciones, debes modificar el archivo:

```
prisma.config.ts
```

### 🔒 Configuración por defecto (migraciones deshabilitadas)

```ts
import path from 'node:path'
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join('prisma'),
  migrations: {
    path: "prisma/migrations",
  },
});
```

---

### 🔓 Habilitar migraciones (requiere DATABASE_URL)

Descomenta esta configuración y asegúrate de tener bien definida la variable `DATABASE_URL` en tu `.env`:

```ts
import "dotenv/config";
import path from 'node:path'
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: path.join('prisma'),
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Luego podrás ejecutar migraciones normalmente:

```bash
pnpm exec prisma migrate dev --name init
```

---

## 🐳 PostgreSQL con Docker (opcional)

Si prefieres usar Docker para la base de datos:

```bash
docker-compose up -d
```

---

## 📂 Estructura del proyecto

````bash
📦 src
 ┣ 📂 prisma/                # Configuración general de Prisma
 ┣ 📂 prisma/generated       # Cliente generado de Prisma
 ┣ 📂 prisma/schema          # Schemas de Prisma (multi-schema)
 ┃ ┣ 📜 schema.prisma        # Schema principal
 ┃ ┣ 📜 *.prisma             # Schemas adicionales
 ┣ 📜 app.module.ts          # Módulo principal
 ┣ 📜 main.ts                # Punto de entrada
 ┗ 📜 .env.example           # Ejemplo de variables de entorno
```bash
📦 src
 ┣ 📂 prisma/           # Configuración y schema de Prisma
 ┣ 📂 prisma/generated  # Cliente generado de Prisma
 ┣ 📜 app.module.ts     # Módulo principal
 ┣ 📜 main.ts           # Punto de entrada
 ┗ 📜 .env.example      # Ejemplo de variables de entorno
````

---

## ✅ Recomendaciones

* No subas tu archivo `.env` al repositorio
* Genera el cliente de Prisma antes de iniciar el servidor
* Habilita migraciones solo cuando sea necesario
* Usa pnpm para una mejor performance y consistencia

---
