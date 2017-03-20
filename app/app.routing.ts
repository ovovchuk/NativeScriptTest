import { LoginComponent } from "./login/login.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "timesheet", component: TimesheetComponent }
];

export const navigableComponents = [
  LoginComponent,
  TimesheetComponent
];
