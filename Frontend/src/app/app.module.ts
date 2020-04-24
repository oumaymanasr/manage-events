import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { FormationangularService } from "./theme/pages/formationangular/formationangular.service";
import { DataTableModule } from 'primeng/primeng';
import { QuickSidebarservice } from './theme/layouts/quick-sidebar/chat.service';






@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,



    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,

    ],
    providers: [ScriptLoaderService, FormationangularService, QuickSidebarservice],
    bootstrap: [AppComponent]
})
export class AppModule { }