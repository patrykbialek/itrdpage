import { bootstrap }    from 'angular2/platform/browser'
import { AppComponent } from './app.component'
import { HTTP_PROVIDERS } from 'angular2/http';
import { TRANSLATE_PROVIDERS } from 'ng2-translate/ng2-translate';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    TRANSLATE_PROVIDERS
]);

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */