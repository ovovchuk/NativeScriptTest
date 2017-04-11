import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";
import { DatePicker } from "ui/date-picker";
import * as TimeDatePicker from "nativescript-timedatepicker";
import * as Dialogs from "ui/dialogs";
import { ModalDialogService } from "nativescript-angular";
import { WeeksModalComponent } from "../weeks-modal/weeks-modal.component";

@Component({
  selector: "AppTimesheet",
  templateUrl: "timesheet/timesheet.component.html",
  styleUrls: ["timesheet/timesheet.component.css"]
})
export class TimesheetComponent implements OnInit {
  items: string[];
  private isFlashLightOn = false;
  private camera: any;

  constructor(private router: Router,
              private modalService: ModalDialogService,
              private vcRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.items = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
  }

  public configure(datePicker: DatePicker) {
    datePicker.year = 2017;
    datePicker.month = 2;
    datePicker.day = 17;
    datePicker.minDate = new Date(2017, 2, 1);
    datePicker.maxDate = new Date(2017, 2, 31);
  }

  public back() {
    this.router.navigate([""]);
  }

  public selectDate() {
    let mCallback = ((result) => {
      if (result) {
        alert("the time is " + result);
      }
    });

    //Initialize the PickerManager (.init(yourCallback, title, initialDate))
    let initialDate = new Date(2017, 3, 7);
    TimeDatePicker.init(mCallback, null, initialDate);

    //Show the dialog
    TimeDatePicker.showDatePickerDialog();
  }

  public showDialog() {
    Dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]).then(result => {
      console.log("Dialog result: " + result);
    });
  }

  public selectWeek() {
    let options = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcRef
    };

    this.modalService.showModal(WeeksModalComponent, options)
      .then(week => console.log("Selected week " + week));
  }

  public flashlight() {
    let cam = this.getCamera();
    let params = cam.getParameters();

    if (this.isFlashLightOn) {
      params.setFlashMode(android.hardware.Camera.Parameters.FLASH_MODE_OFF);
      cam.setParameters(params);
      cam.stopPreview();
      cam.release();
      this.isFlashLightOn = false;
    } else {
      params.setFlashMode(android.hardware.Camera.Parameters.FLASH_MODE_TORCH);
      cam.setParameters(params);
      cam.startPreview();
      this.isFlashLightOn = true;
    }
  }

  private getCamera(): android.hardware.Camera {
    if (!this.isFlashLightOn) {
      this.camera = android.hardware.Camera.open();
    }

    return this.camera;
  }
}
