// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "@nativescript/angular/platform";
import {NativeScriptModule} from "@nativescript/angular/nativescript.module"
import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { appComponents, appRoutes } from "./app/app-routing.module";
import {HttpClientModule} from "@angular/common/http";

import { AppModule } from "./app/app.module";

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
//platformNativeScriptDynamic().bootstrapModule(AppModule);
@NgModule({
    declarations: [AppComponent, ...appComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);