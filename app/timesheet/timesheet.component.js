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
            fullscreen: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWVzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQUNwRSwwQ0FBeUM7QUFFekMsNERBQThEO0FBQzlELG9DQUFzQztBQUN0Qyw2REFBMEQ7QUFDMUQsOEVBQTJFO0FBTzNFLElBQWEsa0JBQWtCO0lBRzdCLDRCQUFvQixNQUFjLEVBQ2QsWUFBZ0MsRUFDaEMsS0FBdUI7UUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUMzQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLHNDQUFTLEdBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLGlDQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO1FBQ0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxVQUFDLE1BQU07WUFDdEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxLQUFLLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILHdFQUF3RTtRQUN4RSxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0MsaUJBQWlCO1FBQ2pCLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSx1Q0FBVSxHQUFqQjtRQUNFLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG9CQUFvQixFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO1FBQ0UsSUFBSSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQywyQ0FBbUIsRUFBRSxPQUFPLENBQUM7YUFDdEQsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0tBQ2pELENBQUM7cUNBSTRCLGVBQU07UUFDQSx5Q0FBa0I7UUFDekIsdUJBQWdCO0dBTGhDLGtCQUFrQixDQXNEOUI7QUF0RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0ICogYXMgVGltZURhdGVQaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC10aW1lZGF0ZXBpY2tlclwiO1xuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBXZWVrc01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3dlZWtzLW1vZGFsL3dlZWtzLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiQXBwVGltZXNoZWV0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInRpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJ0aW1lc2hlZXQvdGltZXNoZWV0LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGltZXNoZWV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXRlbXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMgPSBbXCJXZWVrIDFcIiwgXCJXZWVrIDJcIiwgXCJXZWVrIDNcIiwgXCJXZWVrIDRcIiwgXCJXZWVrIDVcIl07XG4gIH1cblxuICBwdWJsaWMgY29uZmlndXJlKGRhdGVQaWNrZXI6IERhdGVQaWNrZXIpIHtcbiAgICBkYXRlUGlja2VyLnllYXIgPSAyMDE3O1xuICAgIGRhdGVQaWNrZXIubW9udGggPSAyO1xuICAgIGRhdGVQaWNrZXIuZGF5ID0gMTc7XG4gICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMjAxNywgMiwgMSk7XG4gICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjAxNywgMiwgMzEpO1xuICB9XG5cbiAgcHVibGljIGJhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3REYXRlKCkge1xuICAgIGxldCBtQ2FsbGJhY2sgPSAoKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBhbGVydChcInRoZSB0aW1lIGlzIFwiICsgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vSW5pdGlhbGl6ZSB0aGUgUGlja2VyTWFuYWdlciAoLmluaXQoeW91ckNhbGxiYWNrLCB0aXRsZSwgaW5pdGlhbERhdGUpKVxuICAgIFRpbWVEYXRlUGlja2VyLmluaXQobUNhbGxiYWNrLCBudWxsLCBudWxsKTtcblxuICAgIC8vU2hvdyB0aGUgZGlhbG9nXG4gICAgVGltZURhdGVQaWNrZXIuc2hvd0RhdGVQaWNrZXJEaWFsb2coKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93RGlhbG9nKCkge1xuICAgIERpYWxvZ3MuYWN0aW9uKFwiWW91ciBtZXNzYWdlXCIsIFwiQ2FuY2VsIGJ1dHRvbiB0ZXh0XCIsIFtcIk9wdGlvbjFcIiwgXCJPcHRpb24yXCJdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RXZWVrKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge30sXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICB9O1xuXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFdlZWtzTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbih3ZWVrID0+IGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgd2VlayBcIiArIHdlZWspKTtcbiAgfVxufVxuIl19