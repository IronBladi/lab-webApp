# ADR 001 – Estrategia de Autenticación con JWT

## Estatus
Aceptado

---

## Contexto
El sistema Lab WebApp requiere un mecanismo de autenticación seguro y escalable que permita:
- Identificar usuarios autenticados en una API REST
- Evitar el uso de sesiones persistentes en servidor
- Facilitar la integración futura con un frontend desacoplado
- Soportar crecimiento y posibles clientes externos (web o mobile)

Se evaluaron alternativas como sesiones tradicionales con cookies y autenticación basada en tokens.

---

## Decisión
Se decidió implementar **autenticación basada en JSON Web Tokens (JWT)**.

El flujo adoptado es:
1. El usuario se autentica mediante credenciales (email y contraseña).
2. El servidor valida las credenciales.
3. Se genera un JWT firmado con una clave secreta.
4. El token es enviado al cliente y utilizado en cada petición protegida mediante el encabezado `Authorization`.

Las contraseñas se almacenan de forma segura utilizando **bcrypt** para hashing.

---

## Consecuencias

### Ventajas
- Arquitectura sin estado (stateless), alineada con APIs REST.
- Escalabilidad horizontal sin manejo de sesiones en servidor.
- Fácil integración con frontend moderno (React u otros).
- Reducción de carga en el servidor.
- Mejora en la seguridad respecto a sesiones tradicionales mal configuradas.

### Desventajas
- Requiere una correcta gestión de expiración y renovación de tokens.
- En caso de compromiso del token, no puede revocarse fácilmente sin mecanismos adicionales.
- Mayor responsabilidad en el cliente para el almacenamiento seguro del token.

---

## Notas
Esta decisión está alineada con buenas prácticas modernas de desarrollo backend y permite una evolución futura del sistema hacia arquitecturas distribuidas o microservicios.
