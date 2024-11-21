# Correr app en desarrollo 

1. Clonar el repositorio 
2. Instalar dependencias 
```
npm install
```
4. Levantar base de datos 
```
docker compose up -d
```
5. Reemplazar archivo .env.template a .env
6. Renombrar variables de entorno 
7. Correr migrations de prisma 
```
npx prisma migrate dev
```
8. Correr app 
```
npm run dev
```

Sincronizar base de datos
```npx prisma db pull```