import { bootstrapApplication } from '@angular/platform-browser';
import { AppLogin } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppLogin, config);

export default bootstrap;
