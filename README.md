# Frontend ConectaCare

## 1. Descripción General
ConectaCare es una aplicación web frontend desarrollada en React que permite gestionar y registrar diferentes tipos de cuidados médicos y de salud. La aplicación está diseñada para facilitar el seguimiento y registro de diversos aspectos del cuidado de pacientes, con sistema de autenticación, gestión de pacientes y registro completo de actividades de cuidado.

## 2. Tecnologías Utilizadas
- **Frontend**: React.js con Hooks (useState, useEffect, useCallback, useContext)
- **Bundler**: Vite
- **Routing**: React Router DOM
- **Formularios**: React Hook Form
- **Gestión de Estado**: Context API
- **Estilos**: CSS personalizado + Tailwind CSS
- **Testing**: Cypress (E2E)
- **Proxy**: Configuración Vite para backend

## 3. Estructura del Proyecto

```
ConectaCare/
├── node_modules/
├── public/
│   ├── images/
│   │   ├── consultation.jpg
│   │   ├── nurse-pc.jpg
│   │   ├── nurse-signup.jpg
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
│   │   ├── MessageAlert.jsx
│   │   ├── NoticeSend.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── componentsLayout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── componentsMainLayout/
│   │   │   │   └── MainHome.jsx
│   │   │   └── componentsPages/
│   │   │       ├── ButtonHome.jsx
│   │   │       ├── ButtonLink.jsx
│   │   │       ├── InfoCard.jsx
│   │   │       ├── ButtonPdf.jsx
│   │   │       └── StickyActions.jsx
│   │   ├── componentsPatient/
│   │   │   ├── ButtonChoose.jsx
│   │   │   ├── MainPatient.jsx
│   │   │   └── PatientBox.jsx
│   │   ├── componentsRecord/
│   │   │   ├── EditFormWrapper.jsx
│   │   │   ├── PlaceholderCard.jsx
│   │   │   ├── RecordCard.jsx
│   │   │   ├── RecordList.jsx
│   │   │   ├── ShowFields.jsx
│   │   │   ├── ViewEditRecords.jsx
│   │   │   └── search/
│   │   │       ├── GlobalSearchBar.jsx
│   │   │       └── SearchBar.jsx
│   │   ├── componentsSettings/
│   │   │   └── MainSettings.jsx
│   │   ├── forms/
│   │   │   ├── componentsForms/
│   │   │   │   ├── ButtonForm.jsx
│   │   │   │   ├── ButtonSubmit.jsx
│   │   │   │   ├── FormInput.jsx
│   │   │   │   ├── FormSelect.jsx
│   │   │   │   └── FormTextarea.jsx
│   │   │   ├── FoodForms.jsx
│   │   │   ├── MedicationForms.jsx
│   │   │   ├── HygieneForms.jsx
│   │   │   ├── MonitoringForms.jsx
│   │   │   └── MedicalHistoryForms.jsx
│   │   ├── login/
│   │   │   └── LoginInput.jsx
│   │   └── search/
│   │       ├── SearchBar.jsx
│   │       └── TypeFilter.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── PatientContext.jsx
│   ├── hooks/
│   │   ├── useGlobalSearch.js
│   │   ├── useRecords.js
│   │   └── useTypeFilter.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Form.jsx
│   │   ├── Login.jsx
│   │   ├── Patient.jsx
│   │   ├── Records.jsx
│   │   ├── Settings.jsx
│   │   └── SignUp.jsx
│   ├── utils/
│   │   ├── apiCreatePatient.js
│   │   ├── apiGet.js
│   │   ├── apiLogin.js
│   │   ├── apiPatients.js
│   │   ├── apiPost.js
│   │   ├── apiPut.js
│   │   ├── apiRegister.js
│   │   ├── formatValue.js
│   │   ├── id.js
│   │   └── selectedPatient.js
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```


## 4. Componentes Principales

### 4.1 Sistema de Autenticación
1. **Login (Login.jsx)**
   - Sistema de autenticación con email/password
   - Integración con backend `/auth/login`
   - Persistencia de sesión con localStorage
   - Validación de formularios con React Hook Form

2. **SignUp (SignUp.jsx)**
   - Registro de nuevos usuarios
   - Validación compleja de contraseñas
   - Confirmación de contraseña
   - Integración con backend `/auth/register`

3. **ProtectedRoute**
   - Protección de rutas privadas
   - Redirección automática al login
   - Verificación de tokens de sesión

### 4.2 Gestión de Pacientes
1. **Patient (Patient.jsx)**
   - Lista de pacientes registrados
   - Selección de paciente activo
   - Edición de información de pacientes

2. **Settings (Settings.jsx)**
   - Creación de nuevos pacientes
   - Edición de pacientes existentes
   - Cálculo automático de edad basado en fecha de nacimiento
   - Formularios con validación completa

### 4.3 Páginas Principales
1. **Home (Home.jsx)**
   - Página principal post-autenticación
   - Navegación a todas las funcionalidades
   - Incluye Header con botón de logout

2. **Form (Form.jsx)**
   - Página para registrar diferentes tipos de cuidados
   - Maneja 5 tipos de formularios diferentes
   - Sistema dinámico de paciente seleccionado

3. **Records (Records.jsx)**
   - Visualización y edición de registros
   - Sistema de búsqueda global y por tipo
   - Filtros avanzados
   - Interfaz de edición in-place

### 4.4 Formularios de Cuidados
Los formularios disponibles incluyen:

1. **Formulario de Alimentación (FoodForms.jsx)**
   - Registro de comidas, porciones, líquidos y alergias
   - Validación de campos requeridos
   - Asociación automática con el paciente seleccionado

2. **Formulario de Higiene (HygieneForms.jsx)**
   - Registro de actividades de higiene personal
   - Campos para tipo de higiene, frecuencia y observaciones

3. **Formulario de Historia Médica (MedicalHistoryForms.jsx)**
   - Registro de antecedentes médicos
   - Diagnósticos, procedimientos y alergias médicas

4. **Formulario de Medicamentos (MedicationForms.jsx)**
   - Gestión de medicamentos del paciente
   - Dosificación, horarios y efectos secundarios

5. **Formulario de Monitoreo (MonitoringForms.jsx)**
   - Signos vitales y mediciones corporales
   - Peso diario, presión arterial, temperatura, etc.

### 4.5 Sistema de Búsqueda y Filtros
1. **Búsqueda Global (GlobalSearchBar.jsx)**
   - Búsqueda en tiempo real a través de todos los registros
   - Hook personalizado useGlobalSearch
   - Resultados filtrados por tipo de cuidado

2. **Filtros por Tipo (TypeFilter.jsx)**
   - Filtrado específico por tipo de cuidado
   - Hook personalizado useTypeFilter
   - Integración con sistema de búsqueda

### 4.6 Contextos y Estado Global
1. **AuthContext**
   - Gestión global del estado de autenticación
   - Funciones de login/logout
   - Persistencia de sesión

2. **PatientContext**
   - Gestión del paciente actualmente seleccionado
   - Compartición de datos entre componentes
   - Persistencia con localStorage

### 4.7 Tipos de Registros
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

### 5.1 Sistema de Autenticación
- Registro de nuevos usuarios con validación completa
- Login con email y contraseña
- Persistencia de sesión con localStorage
- Protección de rutas privadas
- Logout seguro con limpieza de datos

### 5.2 Gestión de Pacientes
- Creación de nuevos pacientes
- Edición de información existente
- Cálculo automático de edad basado en fecha de nacimiento
- Selección de paciente activo para todas las operaciones
- Persistencia del paciente seleccionado

### 5.3 Gestión de Registros
- Creación de nuevos registros asociados al paciente seleccionado
- Visualización de registros existentes con formato mejorado
- Edición en tiempo real de registros
- Sistema de búsqueda global y filtros por tipo
- Validación completa de formularios

### 5.4 Navegación y UX
- Sistema de rutas protegidas con React Router
- Navegación intuitiva entre todas las secciones
- Mensajes de confirmación y error contextuales
- Interfaz responsive y accesible
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
- Node.js (versión 14 o superior)
- npm
- Backend FastAPI ejecutándose en http://localhost:8000

### 7.2 Pasos de Instalación
1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno si es necesario
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### 7.3 Acceso
- Aplicación disponible en: http://localhost:5173
- Requiere registro/login para acceder a las funcionalidades

## 8. Arquitectura y Estado de la Aplicación

### 8.1 Gestión de Estado
- **AuthContext**: Estado global de autenticación
- **PatientContext**: Gestión del paciente seleccionado
- **React Hooks**: useState, useEffect, useCallback para estado local
- **localStorage**: Persistencia de datos críticos

### 8.2 Estructura de Datos
- Estado separado para cada tipo de registro:
  - registrosComida
  - registrosMedicacion  
  - registrosHigiene
  - registrosMonitoreo
  - registrosHistoriaMedica
- Sistema dinámico de IDs basado en paciente seleccionado

### 8.3 Comunicación con Backend
- APIs REST con FastAPI
- Endpoints de autenticación (/auth/login, /auth/register)
- CRUD completo para pacientes y registros
- Manejo de errores HTTP (422, 400, 500)

## 9. Características Técnicas

### 9.1 Frontend
- React 18 con componentes funcionales
- React Hook Form para validación de formularios
- React Router DOM para navegación
- Context API para estado global
- Tailwind CSS para estilos
- Vite como bundler y servidor de desarrollo

### 9.2 Desarrollo
- Configuración de proxy para desarrollo
- Hot reload automático
- Estructura modular y escalable

## 10. Mejores Prácticas Implementadas

### 10.1 Arquitectura
- Componentes modulares y reutilizables
- Separación clara de responsabilidades
- Context API para estado compartido
- Custom hooks para lógica reutilizable

### 10.2 Seguridad
- Protección de rutas con autenticación
- Validación de formularios en frontend y backend
- Manejo seguro de datos sensibles
- Limpieza de estado al logout

### 10.3 UX/UI
- Interfaz intuitiva y responsive
- Feedback inmediato al usuario
- Cálculos automáticos (edad, etc.)
- Persistencia de selecciones importantes

### 10.4 Mantenimiento
- Código bien documentado
- Estructura de archivos organizada
- Tests automatizados
- Manejo consistente de errores
