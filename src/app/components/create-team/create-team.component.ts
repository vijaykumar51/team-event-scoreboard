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
  public selectAll: boolean = false;
  constructor(private teamService: TeamService) {
    Players.names.forEach(name => {
      this.players.push({ name, selected: false });
    });
  }

  ngOnInit() {}

  public formTeams() {
    this.teamService.formTeams([]);
  }

  public selectAllPlayers() {
    let newSelectValue = this.selectAll ? true : false;
    this.players.forEach(player => {
      console.info((player["selected"] = newSelectValue));
    });
  }
}
