import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CreateTeamComponent } from "./components/create-team/create-team.component";
import { ViewTeamComponent } from "./components/view-team/view-team.component";

import { TeamService } from "./services/team.service";

const routes = [
  { path: "", redirectTo: "createTeam", pathMatch: "full" },
  { path: "createTeam", component: CreateTeamComponent },
  { path: "viewTeam", component: ViewTeamComponent }
];

@NgModule({
  declarations: [AppComponent, CreateTeamComponent, ViewTeamComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
