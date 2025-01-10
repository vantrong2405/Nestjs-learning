import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      isGlobal: true,
    }),
    UsersModule
  ],
  controllers: [AppController],// check trong controllers
  providers: [AppService],// provider functions methods 
})
export class AppModule { }
