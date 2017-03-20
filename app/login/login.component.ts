import { Component } from "@angular/core";
import { User } from "../shared/User";
import { Router } from "@angular/router";

@Component({
  selector: "AppLogin",
  templateUrl: "login/login.component.html",
  styleUrls: ["login/login.component.css"]
})
export class LoginComponent {
  user: User;

  constructor(private router: Router) {
    this.user = new User();
  }

  public onImageTap() {
    console.log("Hello World again!");
  }

  public login() {
    console.log("Logged In..." + this.user.email + ":" + this.user.password);
    this.router.navigate(["/timesheet"]);
  }
}
