# 🐾 PetCareManager - Frontend

Bienvenido/a al repositorio frontend de **PetCareManager**, una app pensada para facilitar la gestión de la información y los eventos de tus mascotas 🐶🐱.

---

## 🚀 ¿Cómo empezar?

### Requisitos previos
- Tener instalado **Docker Desktop**.
- Tener instalado **Node.js** (recomendado versión LTS).
- Tener instalado **npm** (viene incluido con Node.js).
- Tener configurada tu cuenta de **GitHub** para clonar repositorios.

---

### 1. Clonar el backend

Clona el repositorio del backend:

```bash
git clone git@github.com:PetCare-Manager/petcaremanager-backend-python.git
```
sigue las instrucciones del archivo README.md en la rama ```develop```

Así levantarás el contenedor de Docker necesario para el backend.

Deberás tener instalado ```docker``` y además el comando ```make```

### 2. Clonar el frontend

Clona este repositorio:

```bash
git clone git@github.com:PetCare-Manager/petcare-manager-front.git
```
Accede al proyecto:

```bash
cd petcare-manager-front
```
Instala las dependencias:

```bash
npm install
```

### 3. Variables de entorno
Debes crear un archivo .env en la raíz del proyecto con las siguientes variables (ejemplo):
```
EXPO_PUBLIC_BACK_URL=http://example.com/api
```
Nota: El archivo .env está incluido en .gitignore para que no se suba al repositorio.
También tienes disponible un archivo .env.example para saber qué variables necesitas configurar.

📚 Estructura del proyecto
```
├── 📁api
│   └── axiosInstance.ts
├── 📁app
│   ├── _layout.tsx
│   ├── 📁(tabs)
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── two.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   ├── index.tsx
│   └── modal.tsx
├── 📁assets
│   ├── 📁css
│   │   └── _tailwind.css
│   ├── 📁fonts
│   ├── 📁images
│   │   └── 📁breeds
│   └── 📁svg
├── 📁components
│   ├── 📁__tests__
│   ├── 📁commons
│   ├── 📁screens
│   ├── AddPetCard.tsx
│   ├── CreateEventButton.tsx
│   ├── Event.tsx
│   ├── ExternalLink.tsx
│   ├── PetCard.tsx
│   ├── PetList.tsx
│   ├── ProtectedRoute.tsx
├── 📁constants
│   └── Colors.ts
├── 📁context
│   ├── AuthContext.tsx
│   └── PetContext.tsx
├── 📁services
│   ├── authService.ts
│   ├── storageService.ts
│   └── userService.ts
├── 📁types
│   └── types.ts
├── 📁utils
│   ├── breeds.ts
│   ├── errorHandler.ts
│   └── validation.ts
├── .env
├── .env.example
└── .gitignore
```
**Se hara refactor**

### 🛠️ ¿Cómo trabajar en tu propia rama?
Para trabajar correctamente en tu feature:
Primero asignate la tarea desde el kanban y crea la rama remota desde la misma issue (fix/ feature/ update/ seguido del titulo de la issue)

Luego, en local:

```
git checkout develop
git fetch
git pull origin develop
git checkout nombre-de-tu-rama
```
Ve haciendo commits pequeños para no tener sustos.

Cuando termines tu tarea, crea un Pull Request hacia develop para solicitar la revisión de tus cambios.

💬 ¿Tienes dudas?
Puedes preguntar en nuestro servidor de Discord.
¡Estamos aquí para ayudarte! 🤝
