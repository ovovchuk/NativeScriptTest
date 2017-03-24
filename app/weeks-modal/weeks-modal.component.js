"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var WeeksModalComponent = (function () {
    function WeeksModalComponent(params) {
        this.params = params;
    }
    WeeksModalComponent.prototype.ngOnInit = function () {
        this.weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    };
    WeeksModalComponent.prototype.selectWeek = function (weeksPicker) {
        console.log(this.weeks[weeksPicker.selectedIndex]);
        this.params.closeCallback(this.weeks[weeksPicker.selectedIndex]);
    };
    return WeeksModalComponent;
}());
WeeksModalComponent = __decorate([
    core_1.Component({
        selector: "weeks-modal",
        templateUrl: "weeks-modal/weeks-modal.component.html",
        styleUrls: ["weeks-modal/weeks-modal.component.css"]
    }),
    __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams])
], WeeksModalComponent);
exports.WeeksModalComponent = WeeksModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2Vla3MtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFFbEQsNkRBQXlEO0FBT3pELElBQWEsbUJBQW1CO0lBRzlCLDZCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUFHLENBQUM7SUFFakQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLHdDQUFVLEdBQWpCLFVBQWtCLFdBQXVCO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO0tBQ3JELENBQUM7cUNBSTRCLHdDQUFpQjtHQUhsQyxtQkFBbUIsQ0FhL0I7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwid2Vla3MtbW9kYWxcIixcbiAgdGVtcGxhdGVVcmw6IFwid2Vla3MtbW9kYWwvd2Vla3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJ3ZWVrcy1tb2RhbC93ZWVrcy1tb2RhbC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFdlZWtzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB3ZWVrczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2Vla3MgPSBbXCJXZWVrIDFcIiwgXCJXZWVrIDJcIiwgXCJXZWVrIDNcIiwgXCJXZWVrIDRcIiwgXCJXZWVrIDVcIl07XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0V2Vlayh3ZWVrc1BpY2tlcjogTGlzdFBpY2tlcikge1xuICAgIGNvbnNvbGUubG9nKHRoaXMud2Vla3Nbd2Vla3NQaWNrZXIuc2VsZWN0ZWRJbmRleF0pO1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy53ZWVrc1t3ZWVrc1BpY2tlci5zZWxlY3RlZEluZGV4XSk7XG4gIH1cbn1cbiJdfQ==