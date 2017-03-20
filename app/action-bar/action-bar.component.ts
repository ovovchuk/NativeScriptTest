import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "AppActionBar",
  templateUrl: "action-bar/action-bar.component.html",
  styleUrls: ["action-bar/action-bar.component.css"]
})
export class ActionBarComponent {
  @Input() isBackActive = false;

  constructor(private router: Router) {}

  public onBackTap() {
    this.router.navigate([""]);
  }
}
