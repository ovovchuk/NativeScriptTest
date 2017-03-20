import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {
  NativeScriptFormsModule, NativeScriptRouterModule, ModalDialogService,
  NSModuleFactoryLoader
} from "nativescript-angular";

import { AppComponent } from "./app.component";
import { routes, navigableComponents } from "./app.routing";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { WeeksModalComponent } from "./weeks-modal/weeks-modal.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigableComponents,
    ActionBarComponent,
    WeeksModalComponent
  ],
  entryComponents: [WeeksModalComponent],
  providers: [
    ModalDialogService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
