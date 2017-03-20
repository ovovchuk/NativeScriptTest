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
        templateUrl: "weeks-modal/weeks-modal.component.html"
    }),
    __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams])
], WeeksModalComponent);
exports.WeeksModalComponent = WeeksModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2Vla3MtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFFbEQsNkRBQXlEO0FBTXpELElBQWEsbUJBQW1CO0lBRzlCLDZCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUFHLENBQUM7SUFFakQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLHdDQUFVLEdBQWpCLFVBQWtCLFdBQXVCO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksbUJBQW1CO0lBSi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsd0NBQXdDO0tBQ3RELENBQUM7cUNBSTRCLHdDQUFpQjtHQUhsQyxtQkFBbUIsQ0FhL0I7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwid2Vla3MtbW9kYWxcIixcbiAgdGVtcGxhdGVVcmw6IFwid2Vla3MtbW9kYWwvd2Vla3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBXZWVrc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgd2Vla3M6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndlZWtzID0gW1wiV2VlayAxXCIsIFwiV2VlayAyXCIsIFwiV2VlayAzXCIsIFwiV2VlayA0XCIsIFwiV2VlayA1XCJdO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFdlZWsod2Vla3NQaWNrZXI6IExpc3RQaWNrZXIpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLndlZWtzW3dlZWtzUGlja2VyLnNlbGVjdGVkSW5kZXhdKTtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMud2Vla3Nbd2Vla3NQaWNrZXIuc2VsZWN0ZWRJbmRleF0pO1xuICB9XG59XG4iXX0=