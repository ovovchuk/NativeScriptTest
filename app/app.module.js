"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var action_bar_component_1 = require("./action-bar/action-bar.component");
var weeks_modal_component_1 = require("./weeks-modal/weeks-modal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptFormsModule,
            nativescript_angular_1.NativeScriptRouterModule,
            nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.navigableComponents, [
            action_bar_component_1.ActionBarComponent,
            weeks_modal_component_1.WeeksModalComponent
        ]),
        entryComponents: [weeks_modal_component_1.WeeksModalComponent],
        providers: [
            nativescript_angular_1.ModalDialogService
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRjtBQUNsRixnRkFBOEU7QUFDOUUsNkRBRzhCO0FBRTlCLGlEQUErQztBQUMvQyw2Q0FBNEQ7QUFDNUQsMEVBQXVFO0FBQ3ZFLDZFQUEwRTtBQXNCMUUsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBcEJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsOENBQXVCO1lBQ3ZCLCtDQUF3QjtZQUN4QiwrQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN6QztRQUNELFlBQVk7WUFDViw0QkFBWTtpQkFDVCxpQ0FBbUI7WUFDdEIseUNBQWtCO1lBQ2xCLDJDQUFtQjtVQUNwQjtRQUNELGVBQWUsRUFBRSxDQUFDLDJDQUFtQixDQUFDO1FBQ3RDLFNBQVMsRUFBRTtZQUNULHlDQUFrQjtTQUNuQjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtcbiAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICBOU01vZHVsZUZhY3RvcnlMb2FkZXJcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXZWVrc01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vd2Vla3MtbW9kYWwvd2Vla3MtbW9kYWwuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYWJsZUNvbXBvbmVudHMsXG4gICAgQWN0aW9uQmFyQ29tcG9uZW50LFxuICAgIFdlZWtzTW9kYWxDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbV2Vla3NNb2RhbENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1vZGFsRGlhbG9nU2VydmljZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=