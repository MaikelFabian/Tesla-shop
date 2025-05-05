import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port : parseInt(process.env.DB_PORT ?? '5432'),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      //lo que hace es que cuando se hace un cambio en la base de datos se sincroniza automaticamente solo en desarrollo
      //en produccion no se recomienda porque puede perder datos
      autoLoadEntities: true,
      synchronize: true,
      


    }),
    ProductsModule,
    // 
  ],
})
export class AppModule {}
