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
        this.items = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    }
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
        TimeDatePicker.init(mCallback, null, null);
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
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(weeks_modal_component_1.WeeksModalComponent, options)
            .then(function (week) { return console.log("Selected week " + week); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWVzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE0RDtBQUM1RCwwQ0FBeUM7QUFFekMsNERBQThEO0FBQzlELG9DQUFzQztBQUN0Qyw2REFBMEQ7QUFDMUQsOEVBQTJFO0FBTzNFLElBQWEsa0JBQWtCO0lBRzdCLDRCQUFvQixNQUFjLEVBQ2QsWUFBZ0MsRUFDaEMsS0FBdUI7UUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxzQ0FBUyxHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNwQixVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxpQ0FBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSx1Q0FBVSxHQUFqQjtRQUNFLElBQUksU0FBUyxHQUFHLENBQUMsVUFBQyxNQUFNO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCx3RUFBd0U7UUFDeEUsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNDLGlCQUFpQjtRQUNqQixjQUFjLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sdUNBQVUsR0FBakI7UUFDRSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDdEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBVSxHQUFqQjtRQUNFLElBQUksT0FBTyxHQUFHO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsMkNBQW1CLEVBQUUsT0FBTyxDQUFDO2FBQ3RELElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBbkRZLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDO3FDQUk0QixlQUFNO1FBQ0EseUNBQWtCO1FBQ3pCLHVCQUFnQjtHQUxoQyxrQkFBa0IsQ0FtRDlCO0FBbkRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBUaW1lRGF0ZVBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LXRpbWVkYXRlcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFdlZWtzTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vd2Vla3MtbW9kYWwvd2Vla3MtbW9kYWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJBcHBUaW1lc2hlZXRcIixcbiAgdGVtcGxhdGVVcmw6IFwidGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInRpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lc2hlZXRDb21wb25lbnQge1xuICBpdGVtczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHRoaXMuaXRlbXMgPSBbXCJXZWVrIDFcIiwgXCJXZWVrIDJcIiwgXCJXZWVrIDNcIiwgXCJXZWVrIDRcIiwgXCJXZWVrIDVcIl07XG4gIH1cblxuICBwdWJsaWMgY29uZmlndXJlKGRhdGVQaWNrZXI6IERhdGVQaWNrZXIpIHtcbiAgICBkYXRlUGlja2VyLnllYXIgPSAyMDE3O1xuICAgIGRhdGVQaWNrZXIubW9udGggPSAyO1xuICAgIGRhdGVQaWNrZXIuZGF5ID0gMTc7XG4gICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMjAxNywgMiwgMSk7XG4gICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjAxNywgMiwgMzEpO1xuICB9XG5cbiAgcHVibGljIGJhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3REYXRlKCkge1xuICAgIGxldCBtQ2FsbGJhY2sgPSAoKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBhbGVydChcInRoZSB0aW1lIGlzIFwiICsgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vSW5pdGlhbGl6ZSB0aGUgUGlja2VyTWFuYWdlciAoLmluaXQoeW91ckNhbGxiYWNrLCB0aXRsZSwgaW5pdGlhbERhdGUpKVxuICAgIFRpbWVEYXRlUGlja2VyLmluaXQobUNhbGxiYWNrLCBudWxsLCBudWxsKTtcblxuICAgIC8vU2hvdyB0aGUgZGlhbG9nXG4gICAgVGltZURhdGVQaWNrZXIuc2hvd0RhdGVQaWNrZXJEaWFsb2coKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93RGlhbG9nKCkge1xuICAgIERpYWxvZ3MuYWN0aW9uKFwiWW91ciBtZXNzYWdlXCIsIFwiQ2FuY2VsIGJ1dHRvbiB0ZXh0XCIsIFtcIk9wdGlvbjFcIiwgXCJPcHRpb24yXCJdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RXZWVrKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge30sXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgIH07XG5cbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoV2Vla3NNb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgIC50aGVuKHdlZWsgPT4gY29uc29sZS5sb2coXCJTZWxlY3RlZCB3ZWVrIFwiICsgd2VlaykpO1xuICB9XG59XG4iXX0=