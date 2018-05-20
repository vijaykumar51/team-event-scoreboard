import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { UploadPlayersDataComponent } from "./components/upload-players-data/upload-player-data.component";
import { CreateTeamComponent } from "./components/create-team/create-team.component";
import { ViewTeamComponent } from "./components/view-team/view-team.component";
import { TeamCardComponent } from "./components/team-card/team-card.component";

import { TeamCheckGuard } from "./guard/team-check.guard";

import { TeamService } from "./services/team.service";
import { DataStoreService } from "./services/data-store.service";

const routes = [
  { path: "", redirectTo: "uploadData", pathMatch: "full" },
  { path: "uploadData", component: UploadPlayersDataComponent },
  { path: "createTeam", component: CreateTeamComponent },
  {
    path: "viewTeam",
    component: ViewTeamComponent,
    canActivate: [TeamCheckGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadPlayersDataComponent,
    CreateTeamComponent,
    TeamCardComponent,
    ViewTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [DataStoreService, TeamCheckGuard, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
