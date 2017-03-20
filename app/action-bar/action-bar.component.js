"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ActionBarComponent = (function () {
    function ActionBarComponent(router) {
        this.router = router;
        this.isBackActive = false;
    }
    ActionBarComponent.prototype.onBackTap = function () {
        this.router.navigate([""]);
    };
    return ActionBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "isBackActive", void 0);
ActionBarComponent = __decorate([
    core_1.Component({
        selector: "AppActionBar",
        templateUrl: "action-bar/action-bar.component.html",
        styleUrls: ["action-bar/action-bar.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ActionBarComponent);
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlEO0FBQ2pELDBDQUF5QztBQU96QyxJQUFhLGtCQUFrQjtJQUc3Qiw0QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGekIsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFFTyxDQUFDO0lBRS9CLHNDQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUFU7SUFBUixZQUFLLEVBQUU7O3dEQUFzQjtBQURuQixrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7S0FDbkQsQ0FBQztxQ0FJNEIsZUFBTTtHQUh2QixrQkFBa0IsQ0FROUI7QUFSWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkFwcEFjdGlvbkJhclwiLFxuICB0ZW1wbGF0ZVVybDogXCJhY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJhY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBpc0JhY2tBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIHB1YmxpYyBvbkJhY2tUYXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgfVxufVxuIl19