"use strict";
var core_1 = require("@angular/core");
var User_1 = require("../shared/User");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.user = new User_1.User();
    }
    LoginComponent.prototype.onImageTap = function () {
        console.log("Hello World again!");
    };
    LoginComponent.prototype.login = function () {
        console.log("Logged In..." + this.user.email + ":" + this.user.password);
        this.router.navigate(["/timesheet"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "AppLogin",
        templateUrl: "login/login.component.html",
        styleUrls: ["login/login.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFDMUMsdUNBQXNDO0FBQ3RDLDBDQUF5QztBQU96QyxJQUFhLGNBQWM7SUFHekIsd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sbUNBQVUsR0FBakI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQ3pDLENBQUM7cUNBSTRCLGVBQU07R0FIdkIsY0FBYyxDQWUxQjtBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL1VzZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkFwcExvZ2luXCIsXG4gIHRlbXBsYXRlVXJsOiBcImxvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibG9naW4vbG9naW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIHVzZXI6IFVzZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cblxuICBwdWJsaWMgb25JbWFnZVRhcCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkIGFnYWluIVwiKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZCBJbi4uLlwiICsgdGhpcy51c2VyLmVtYWlsICsgXCI6XCIgKyB0aGlzLnVzZXIucGFzc3dvcmQpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90aW1lc2hlZXRcIl0pO1xuICB9XG59XG4iXX0=