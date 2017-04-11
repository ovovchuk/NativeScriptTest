"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TimeDatePicker = require("nativescript-timedatepicker");
var Dialogs = require("ui/dialogs");
var nativescript_angular_1 = require("nativescript-angular");
var weeks_modal_component_1 = require("../weeks-modal/weeks-modal.component");
var TimesheetComponent = (function () {
    function TimesheetComponent(router, modalService, vcRef) {
        this.router = router;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.isFlashLightOn = false;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        this.items = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    };
    TimesheetComponent.prototype.configure = function (datePicker) {
        datePicker.year = 2017;
        datePicker.month = 2;
        datePicker.day = 17;
        datePicker.minDate = new Date(2017, 2, 1);
        datePicker.maxDate = new Date(2017, 2, 31);
    };
    TimesheetComponent.prototype.back = function () {
        this.router.navigate([""]);
    };
    TimesheetComponent.prototype.selectDate = function () {
        var mCallback = (function (result) {
            if (result) {
                alert("the time is " + result);
            }
        });
        //Initialize the PickerManager (.init(yourCallback, title, initialDate))
        var initialDate = new Date(2017, 3, 7);
        TimeDatePicker.init(mCallback, null, initialDate);
        //Show the dialog
        TimeDatePicker.showDatePickerDialog();
    };
    TimesheetComponent.prototype.showDialog = function () {
        Dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]).then(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    TimesheetComponent.prototype.selectWeek = function () {
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(weeks_modal_component_1.WeeksModalComponent, options)
            .then(function (week) { return console.log("Selected week " + week); });
    };
    TimesheetComponent.prototype.flashlight = function () {
        var cam = this.getCamera();
        var params = cam.getParameters();
        if (this.isFlashLightOn) {
            params.setFlashMode(android.hardware.Camera.Parameters.FLASH_MODE_OFF);
            cam.setParameters(params);
            cam.stopPreview();
            cam.release();
            this.isFlashLightOn = false;
        }
        else {
            params.setFlashMode(android.hardware.Camera.Parameters.FLASH_MODE_TORCH);
            cam.setParameters(params);
            cam.startPreview();
            this.isFlashLightOn = true;
        }
    };
    TimesheetComponent.prototype.getCamera = function () {
        if (!this.isFlashLightOn) {
            this.camera = android.hardware.Camera.open();
        }
        return this.camera;
    };
    return TimesheetComponent;
}());
TimesheetComponent = __decorate([
    core_1.Component({
        selector: "AppTimesheet",
        templateUrl: "timesheet/timesheet.component.html",
        styleUrls: ["timesheet/timesheet.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        nativescript_angular_1.ModalDialogService,
        core_1.ViewContainerRef])
], TimesheetComponent);
exports.TimesheetComponent = TimesheetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWVzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQUNwRSwwQ0FBeUM7QUFFekMsNERBQThEO0FBQzlELG9DQUFzQztBQUN0Qyw2REFBMEQ7QUFDMUQsOEVBQTJFO0FBTzNFLElBQWEsa0JBQWtCO0lBSzdCLDRCQUFvQixNQUFjLEVBQ2QsWUFBZ0MsRUFDaEMsS0FBdUI7UUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUxuQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQU0vQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLHNDQUFTLEdBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLGlDQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO1FBQ0UsSUFB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QUM7cUNBTTRCLGVBQU07UUFDQSx5Q0FBa0I7UUFDekIsdUJBQWdCO0dBUGhDLGtCQUFrQixDQW1GOUI7QUFuRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0ICogYXMgVGltZURhdGVQaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC10aW1lZGF0ZXBpY2tlclwiO1xuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBXZWVrc01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3dlZWtzLW1vZGFsL3dlZWtzLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiQXBwVGltZXNoZWV0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInRpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJ0aW1lc2hlZXQvdGltZXNoZWV0LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGltZXNoZWV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXRlbXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIGlzRmxhc2hMaWdodE9uID0gZmFsc2U7XG4gIHByaXZhdGUgY2FtZXJhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IFtcIldlZWsgMVwiLCBcIldlZWsgMlwiLCBcIldlZWsgM1wiLCBcIldlZWsgNFwiLCBcIldlZWsgNVwiXTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maWd1cmUoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcikge1xuICAgIGRhdGVQaWNrZXIueWVhciA9IDIwMTc7XG4gICAgZGF0ZVBpY2tlci5tb250aCA9IDI7XG4gICAgZGF0ZVBpY2tlci5kYXkgPSAxNztcbiAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgyMDE3LCAyLCAxKTtcbiAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDE3LCAyLCAzMSk7XG4gIH1cblxuICBwdWJsaWMgYmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdERhdGUoKSB7XG4gICAgbGV0IG1DYWxsYmFjayA9ICgocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGFsZXJ0KFwidGhlIHRpbWUgaXMgXCIgKyByZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9Jbml0aWFsaXplIHRoZSBQaWNrZXJNYW5hZ2VyICguaW5pdCh5b3VyQ2FsbGJhY2ssIHRpdGxlLCBpbml0aWFsRGF0ZSkpXG4gICAgbGV0IGluaXRpYWxEYXRlID0gbmV3IERhdGUoMjAxNywgMywgNyk7XG4gICAgVGltZURhdGVQaWNrZXIuaW5pdChtQ2FsbGJhY2ssIG51bGwsIGluaXRpYWxEYXRlKTtcblxuICAgIC8vU2hvdyB0aGUgZGlhbG9nXG4gICAgVGltZURhdGVQaWNrZXIuc2hvd0RhdGVQaWNrZXJEaWFsb2coKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93RGlhbG9nKCkge1xuICAgIERpYWxvZ3MuYWN0aW9uKFwiWW91ciBtZXNzYWdlXCIsIFwiQ2FuY2VsIGJ1dHRvbiB0ZXh0XCIsIFtcIk9wdGlvbjFcIiwgXCJPcHRpb24yXCJdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RXZWVrKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge30sXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICB9O1xuXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFdlZWtzTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbih3ZWVrID0+IGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgd2VlayBcIiArIHdlZWspKTtcbiAgfVxuXG4gIHB1YmxpYyBmbGFzaGxpZ2h0KCkge1xuICAgIGxldCBjYW0gPSB0aGlzLmdldENhbWVyYSgpO1xuICAgIGxldCBwYXJhbXMgPSBjYW0uZ2V0UGFyYW1ldGVycygpO1xuXG4gICAgaWYgKHRoaXMuaXNGbGFzaExpZ2h0T24pIHtcbiAgICAgIHBhcmFtcy5zZXRGbGFzaE1vZGUoYW5kcm9pZC5oYXJkd2FyZS5DYW1lcmEuUGFyYW1ldGVycy5GTEFTSF9NT0RFX09GRik7XG4gICAgICBjYW0uc2V0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgICAgY2FtLnN0b3BQcmV2aWV3KCk7XG4gICAgICBjYW0ucmVsZWFzZSgpO1xuICAgICAgdGhpcy5pc0ZsYXNoTGlnaHRPbiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMuc2V0Rmxhc2hNb2RlKGFuZHJvaWQuaGFyZHdhcmUuQ2FtZXJhLlBhcmFtZXRlcnMuRkxBU0hfTU9ERV9UT1JDSCk7XG4gICAgICBjYW0uc2V0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgICAgY2FtLnN0YXJ0UHJldmlldygpO1xuICAgICAgdGhpcy5pc0ZsYXNoTGlnaHRPbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYW1lcmEoKSB7XG4gICAgaWYgKCF0aGlzLmlzRmxhc2hMaWdodE9uKSB7XG4gICAgICB0aGlzLmNhbWVyYSA9IGFuZHJvaWQuaGFyZHdhcmUuQ2FtZXJhLm9wZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jYW1lcmE7XG4gIH1cbn1cbiJdfQ==