import { Component, OnInit } from "@angular/core";
import { TeamService } from "../../services/team.service";
import { Players } from "../../config/players";

@Component({
  selector: "app-create-team",
  templateUrl: "./create-team.component.html",
  styleUrls: ["./create-team.component.css"]
})
export class CreateTeamComponent implements OnInit {
  private players: Array<object> = [];
  constructor(private teamService: TeamService) {
    Players.names.forEach(name => {
      this.players.push({ name, selected: false });
    });
  }

  ngOnInit() {}

  public formTeams() {
    console.info("formTeams");
    this.teamService.formTeams([]);
  }
}
