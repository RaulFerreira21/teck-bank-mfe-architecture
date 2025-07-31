import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppLogin } from './app/app';

bootstrapApplication(AppLogin, appConfig)
  .catch((err) => console.error(err));
