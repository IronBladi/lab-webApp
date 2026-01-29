# Lab WebApp

## 1. Propósito del Sistema
**Lab WebApp** es una plataforma educativa en desarrollo que provee una **API REST** para la gestión de usuarios, cursos e inscripciones académicas.

El sistema permite:
- Registro y autenticación segura de usuarios
- Gestión de cursos
- Inscripción de estudiantes a cursos
- Seguimiento del progreso académico

El objetivo principal es servir como base backend escalable para una aplicación educativa moderna.

Corrección Kevin:
- Se eliminó cualquier referencia a frontend, dashboards o UI,
  ya que el repositorio actual contiene únicamente backend.

---

## 2. Arquitectura Tecnológica
La aplicación sigue una arquitectura **cliente-servidor**, con enfoque en el **Backend desacoplado**.

Corrección Rodrigo:
- Se ajustó la descripción arquitectónica para reflejar un backend API REST
  sin frontend versionado.

### Backend
- **Node.js + Express**: Servidor y API REST ✅ Validado por humano
- **Sequelize ORM**: Mapeo objeto-relacional ✅ Validado por humano
- **JWT**: Autenticación basada en tokens ✅ Validado por humano
- **bcrypt**: Encriptación de contraseñas ✅ Validado por humano
- **nodemailer**: Envío de correos electrónicos ✅ Validado por humano
- **Base de Datos**: Relacional (configurable vía Sequelize)

Corrección Stiven:
- No se especifica PostgreSQL/MySQL para evitar asumir motores
  no definidos explícitamente en la configuración actual.

#### Estructura principal
Corrección Wisberth:
- La estructura documentada fue contrastada manualmente
  con las carpetas reales del repositorio (`controllers`, `models`, `routes`).
