import { Component } from "@angular/core";
import { DataStoreService } from "../../services/data-store.service";

@Component({
  selector: "app-view-team",
  styleUrls: ["./view-team.component.css"],
  templateUrl: "./view-team.component.html"
})
export class ViewTeamComponent {
  public teams: Map<string, Array<string>> = new Map();
  public teamNames: Array<string> = [];
  constructor(private dataStoreService: DataStoreService) {
    console.warn(this.dataStoreService.teams);
    this.teamNames = [];
    this.teams = this.dataStoreService.teams;
    this.teams.forEach((value: Array<string>, key: string) => {
      this.teamNames.push(key);
    });
    console.warn(this.teamNames);
  }
}
