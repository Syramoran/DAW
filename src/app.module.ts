import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { EncuestaModule } from './modules/encuesta.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        password: configService.get('database.password'),
        username: configService.get('database.username'),
        entities: [],
        database: configService.get('database.database'),
        synchronize: configService.get('database.synchronize'),
        logging: configService.get('database.logging'),
      }),
    }),
    EncuestaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
