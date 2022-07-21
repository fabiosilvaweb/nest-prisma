import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedocOptions, RedocModule } from 'nestjs-redoc';
import defaultTheme from './docs/theme';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS')
    .setDescription('documentação')
    .setVersion('1.0')
    .addSecurity('ApiKeyAuth', {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    })
    .addSecurityRequirements('ApiKeyAuth')
    .setBasePath('/api/v1')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });

  SwaggerModule.setup('api', app, document);

  const redocOptions: RedocOptions = {
    title: 'Nest using Prisma',
    logo: {
      url: 'https://redocly.github.io/redoc/petstore-logo.png',
      backgroundColor: '#F0F0F0',
      altText: 'Nest using Prisma',
    },
    theme: defaultTheme,
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    tagGroups: [
      {
        name: 'Resources',
        tags: ['Books'],
      },
    ],
  };

  await RedocModule.setup('/docs', app, document, redocOptions);

  await app.listen(3000);
}

bootstrap();
