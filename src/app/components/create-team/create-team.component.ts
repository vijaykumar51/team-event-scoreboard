import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TeamService } from "../../services/team.service";
import { DataStoreService } from "../../services/data-store.service";
import { Players } from "../../config/players";

@Component({
  selector: "app-create-team",
  templateUrl: "./create-team.component.html",
  styleUrls: ["./create-team.component.css"]
})
export class CreateTeamComponent implements OnInit {
  public players: Array<object> = [];
  public selectedPlayers: Array<string> = [];
  public selectAll: boolean = false;

  public teamSizeOptions: Array<number> = [2, 3, 4, 5, 6];

  public teamSize: number = 4;
  public teams: Map<string, Array<string>> = new Map();
  constructor(
    private router: Router,
    private teamService: TeamService,
    private dataStoreService: DataStoreService
  ) {
    Players.names.forEach(name => {
      this.players.push({ name, selected: false });
    });
  }

  ngOnInit() {}

  public selectAllPlayers() {
    let newSelectValue = this.selectAll ? true : false;
    this.players.forEach(player => {
      player["selected"] = newSelectValue;
    });
  }

  public changePlayer(player) {
    if (!player.selected) {
      this.selectAll = false;
    }
  }

  public formTeams() {
    this.selectedPlayers = [];
    this.players.forEach(player => {
      if (player["selected"]) {
        this.selectedPlayers.push(player["name"]);
      }
    });
    this.teams = this.teamService.formTeams(
      this.teamSize,
      this.selectedPlayers
    );
    this.saveDataToStore();
    this.router.navigate(["/viewTeam"]);
  }

  private saveDataToStore() {
    this.dataStoreService.teamSize = this.teamSize;
    this.dataStoreService.teams = this.teams;
  }
}
