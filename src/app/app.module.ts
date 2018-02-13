import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CreateTeamComponent } from "./components/create-team/create-team.component";

const routes = [
  { path: "", redirectTo: "createTeam", pathMatch: "full" },
  { path: "createTeam", component: CreateTeamComponent }
];

@NgModule({
  declarations: [AppComponent, CreateTeamComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
