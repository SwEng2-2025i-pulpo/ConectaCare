# Frontend ConectaCare

## 1. Descripción General
ConectaCare es una aplicación web frontend desarrollada en React que permite gestionar y registrar diferentes tipos de cuidados médicos y de salud. La aplicación está diseñada para facilitar el seguimiento y registro de diversos aspectos del cuidado de pacientes.

## 2. Tecnologías Utilizadas
- *Frontend*: React.js
- *Bundler*: Vite
- *Routing*: React Router DOM
- *Iconos*: Font Awesome
- *Estilos*: CSS personalizado

## 3. Estructura del Proyecto
ConectaCare/
├── node_modules/
├── public/
│   ├── images/
│   │   ├── consultation.jpg
│   │   ├── nurse.jpg
│   │   └── record.jpg
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── conectaCare.png
│   │       └── conectaCare.svg
│   ├── components/
│   │   ├── componentsLayout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── componentsMainLayout/
│   │   │   │   └── MainHome.jsx
│   │   │   └── componentsPages/
│   │   │       ├── ButtonHome.jsx
│   │   │       ├── ButtonLink.jsx
│   │   │       ├── InfoCard.jsx
│   │   │       └── StickyActions.jsx
│   │   ├── componentsRecord/
│   │   │   └── ViewEditRecords.jsx
│   │   └── forms/
│   │       ├── componentsForms/
│   │       │   ├── ButtonForm.jsx
│   │       │   ├── ButtonSubmit.jsx
│   │       │   ├── FormInput.jsx
│   │       │   ├── FormSelect.jsx
│   │       │   └── FormTextarea.jsx
│   │       ├── FoodForms.jsx
│   │       ├── MedicationForms.jsx
│   │       ├── HygieneForms.jsx
│   │       ├── MonitoringForms.jsx
│   │       └── MedicalHistoryForms.jsx
│   │   └── NoticeSend.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Form.jsx
│   │   └── Records.jsx
│   ├── utils/
│   │   ├── apiGet.js
│   │   ├── apiPost.js
│   │   └── apiPut.js
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js


## 4. Componentes Principales

### 4.1 Páginas
1. **Home (Home.jsx)**
   - Página principal de la aplicación
   - Incluye Header, MainHome y Footer

2. **Form (Form.jsx)**
   - Página para registrar diferentes tipos de cuidados
   - Maneja 5 tipos de formularios diferentes
   - Cada formulario tiene su propio estado y manejo de datos

3. **Records (Records.jsx)**
   - Página para visualizar y editar registros
   - Permite ver todos los tipos de registros
   - Incluye funcionalidad de edición

### 4.2 Tipos de Registros
1. *Alimentación*
   - Campos: fechaHora, comidaDelDia, descripcionAlimento, observaciones

2. *Medicación*
   - Campos: fechaHora, nombreMedicamento, dosisAdministrada, estadoCumplimiento, viaAdministracion, observaciones

3. *Higiene*
   - Campos: fechaHora, tipoHigiene, condicionPersona, estadoCumplimiento, nivelAsistencia, observaciones

4. *Monitoreo*
   - Campos: fechaHora, pesoKg, presionSanguinea, frecuenciaCardiaca, observaciones

5. *Historia Médica*
   - Campos: fechaHora, descripcionSintoma, observaciones

## 5. Funcionalidades Principales

### 5.1 Gestión de Registros
- Creación de nuevos registros
- Visualización de registros existentes
- Edición de registros
- Estado local para cada tipo de registro

### 5.2 Navegación
- Sistema de rutas implementado con React Router
- Navegación entre Home, Form y Records
- Acciones rápidas mediante StickyActions

### 5.3 Estado de la Aplicación
- Gestión de estado mediante React Hooks (useState)
- Estado separado para cada tipo de registro:
  - registrosComida
  - registrosMedicacion
  - registrosHigiene
  - registrosMonitoreo
  - registrosHistoriaMedica
- Manejo de estado de edición

## 6. Componentes de UI

### 6.1 Layout
- *Header*: Navegación principal
- *Footer*: Información de pie de página
- *StickyActions*: Acciones rápidas accesibles

### 6.2 Formularios
- *ButtonForm*: Componente base para formularios
- Formularios específicos para cada tipo de registro:
  - FoodForms
  - MedicationForms
  - HygieneForms
  - MonitoringForms
  - MedicalHistoryForms

### 6.3 Visualización
- *ViewEditRecords*: Componente para ver y editar registros
- Campos personalizados según tipo de registro

## 7. Instalación y Ejecución

### 7.1 Requisitos Previos
- Node.js
- npm

### 7.2 Pasos de Instalación
1. Clonar el repositorio
2. Instalar dependencias:
   bash
   npm install
   
3. Iniciar el servidor de desarrollo:
   bash
   npm run dev
   

### 7.3 Acceso
- La aplicación estará disponible en: http://localhost:5173

## 8. Características Técnicas
- Componentes funcionales de React
- Hooks para gestión de estado
- Sistema de rutas para navegación
- Componentes reutilizables
- Estilos modulares

## 9. Mejores Prácticas Implementadas
- Componentes modulares y reutilizables
- Separación clara de responsabilidades
- Manejo de estado eficiente
- Interfaz de usuario intuitiva