import { Component, OnInit } from "@angular/core";
import { TeamService } from "../../services/team.service";
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
  constructor(private teamService: TeamService) {
    Players.names.forEach(name => {
      this.players.push({ name, selected: false });
    });
  }

  ngOnInit() {}

  public selectAllPlayers() {
    let newSelectValue = this.selectAll ? true : false;
    this.players.forEach(player => {
      console.info((player["selected"] = newSelectValue));
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
    let teams = this.teamService.formTeams(this.teamSize, this.selectedPlayers);
    console.warn(this.players);
  }
}
