# Enterprise Next.js Containerized Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-v3.21-0D597F?logo=alpinelinux&logoColor=white)](https://alpinelinux.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18--Alpine-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)

Aplicación web empresarial construida con Next.js (App Router, TypeScript, Tailwind CSS) y contenerizada mediante Docker utilizando una arquitectura multi-stage sobre Alpine Linux para entornos de alta disponibilidad y producción reproducible.

---

## 1. Arquitectura de Contenerización Multi-Stage

El archivo `Dockerfile` implementa un patrón de construcción en 3 fases independientes para garantizar aislamiento, seguridad y una imagen final ultraligera (<50 MB):

| Etapa | Imagen Base | Responsabilidad |
| :--- | :--- | :--- |
| `deps` | `node:18-alpine` | Instalación limpia de dependencias de producción y desarrollo mediante `npm ci` con compatibilidad `libc6-compat` para Alpine. |
| `builder` | `node:18-alpine` | Compilación del código fuente con `npm run build` y generación de artefactos independientes (`output: 'standalone'`). |
| `runner` | `node:18-alpine` | Entorno de ejecución de producción mínimo. Copia exclusivamente los archivos del bundle standalone, define usuario de sistema sin privilegios (`nextjs:nodejs`), expone el puerto 3000 y arranca con `node server.js`. |

---

## 2. Requisitos Previos

- Docker Engine 24.0+ o Docker Desktop
- Git
- (Opcional para desarrollo local sin Docker) Node.js 18+ y npm 10+

---

## 3. Instrucciones de Construcción y Ejecución con Docker

### 3.1 Construcción de la Imagen

Ejecuta el siguiente comando en la raíz del proyecto para generar la imagen Docker:

```bash
docker build -t aplicacion-dockerizada .
```

### 3.2 Ejecución del Contenedor

Para inicializar el contenedor en segundo plano vinculando el puerto 3000:

```bash
docker run -d -p 3000:3000 --name aplicacion-dockerizada aplicacion-dockerizada
```

### 3.3 Verificación de Estado y Logs

Consulta los registros de arranque del contenedor:

```bash
docker logs aplicacion-dockerizada
```

Verifica la disponibilidad del servicio mediante HTTP:

```bash
curl -I http://localhost:3000
```

Acceso desde el navegador: `http://localhost:3000`

### 3.4 Detención y Limpieza

Para detener y eliminar el contenedor en ejecución:

```bash
docker stop aplicacion-dockerizada
docker rm aplicacion-dockerizada
```

---

## 4. Comandos de Operación Docker

| Acción | Comando |
| :--- | :--- |
| Construir imagen | `docker build -t aplicacion-dockerizada .` |
| Ejecutar contenedor | `docker run -d -p 3000:3000 --name aplicacion-dockerizada aplicacion-dockerizada` |
| Ver registros | `docker logs -f aplicacion-dockerizada` |
| Detener contenedor | `docker stop aplicacion-dockerizada` |
| Iniciar contenedor detenido | `docker start aplicacion-dockerizada` |
| Eliminar contenedor | `docker rm aplicacion-dockerizada` |
| Inspeccionar tamaño de imagen | `docker images aplicacion-dockerizada` |

---

## 5. Configuración de Exclusiones (.dockerignore)

El archivo `.dockerignore` previene la transferencia de archivos innecesarios al contexto de compilación del daemon de Docker:

- `node_modules` (evita inconsistencias de binarios nativos del host)
- `.next` (fuerza una compilación reproducible en el contenedor)
- `.git` y `.gitignore` (protección de metadatos de control de versiones)
- `.env*` (protección de variables de entorno locales)
- Archivos temporales, logs y configuraciones de editor (`.vscode`, `.idea`, `*.log`)

---

## 6. Variables de Entorno del Contenedor

El contenedor expone las siguientes variables preconfiguradas:

| Variable | Valor por Defecto | Propósito |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Optimiza Next.js y React para rendimiento de producción |
| `PORT` | `3000` | Puerto interno en el que escucha el servidor Node.js |
| `HOSTNAME` | `0.0.0.0` | Permite el enlace de red hacia interfaces externas del contenedor |
| `NEXT_TELEMETRY_DISABLED` | `1` | Desactiva la telemetría anónima durante el build y runtime |

---

## 7. Ejecución en Entorno Local (Sin Docker)

Si se desea ejecutar en el host durante el ciclo de desarrollo:

```bash
# Instalación de dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilación de producción local
npm run build

# Ejecución de producción local
npm start
```

---

## 8. Estructura del Repositorio

```text
.
├── .dockerignore           # Exclusiones de contexto para el build de Docker
├── Dockerfile              # Construcción multi-stage (deps -> builder -> runner)
├── README.md               # Documentación técnica de arquitectura y ejecución
├── next.config.mjs         # Configuración de Next.js (output: standalone)
├── package.json            # Dependencias y scripts del proyecto
├── postcss.config.mjs      # Configuración de PostCSS
├── src
│   └── app
│       ├── globals.css     # Estilos globales y variables tipográficas
│       ├── layout.tsx      # Estructura raíz con fuentes Inter y Arial fallback
│       └── page.tsx        # Interfaz de presentación de plataforma empresarial
├── tailwind.config.ts      # Configuración de Tailwind CSS y familias tipográficas
└── tsconfig.json           # Configuración del compilador TypeScript
```
