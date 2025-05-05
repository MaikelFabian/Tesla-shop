import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // Establece el prefijo global para todas las rutas
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina automáticamente las propiedades que no tienen decoradores
      forbidNonWhitelisted: true, // Lanza un error si se encuentran propiedades no permitidas
      //transform: true, // Transforma automáticamente los datos para que sean objetos tipados según sus clases DTO
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();