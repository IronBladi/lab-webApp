# Lab WebApp

## 1. Propósito del Sistema
**Lab WebApp** es una plataforma educativa en desarrollo que provee una **API REST** para la gestión de usuarios, cursos e inscripciones académicas.

El sistema permite:
- Registro y autenticación segura de usuarios
- Gestión de cursos
- Inscripción de estudiantes a cursos
- Seguimiento del progreso académico

El objetivo principal es servir como base backend escalable para una aplicación educativa moderna.

---

## 2. Arquitectura Tecnológica
La aplicación sigue una arquitectura **cliente-servidor**, con enfoque en el **Backend desacoplado**.

### Backend
- **Node.js + Express**: Servidor y API REST
- **Sequelize ORM**: Mapeo objeto-relacional
- **JWT**: Autenticación basada en tokens
- **bcrypt**: Encriptación de contraseñas
- **nodemailer**: Envío de correos electrónicos
- **Base de Datos**: Relacional (configurable vía Sequelize)

#### Estructura principal
