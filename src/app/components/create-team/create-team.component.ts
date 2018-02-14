import { Component, OnInit } from "@angular/core";
import { TeamService } from "../../services/team.service";
import { Players } from "../../config/players";

@Component({
  selector: "app-create-team",
  templateUrl: "./create-team.component.html",
  styleUrls: ["./create-team.component.css"]
})
export class CreateTeamComponent implements OnInit {
  private players: Array<string> = [];
  constructor(private teamService: TeamService) {
    this.players = Players.names;
  }

  ngOnInit() {}
}
