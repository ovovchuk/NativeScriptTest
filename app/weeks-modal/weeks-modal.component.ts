import { Component, OnInit } from "@angular/core";
import { ListPicker } from "ui/list-picker";
import { ModalDialogParams } from "nativescript-angular";

@Component({
  selector: "weeks-modal",
  templateUrl: "weeks-modal/weeks-modal.component.html"
})
export class WeeksModalComponent implements OnInit {
  weeks: string[];

  constructor(private params: ModalDialogParams) {}

  ngOnInit(): void {
    this.weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
  }

  public selectWeek(weeksPicker: ListPicker) {
    console.log(this.weeks[weeksPicker.selectedIndex]);
    this.params.closeCallback(this.weeks[weeksPicker.selectedIndex]);
  }
}
