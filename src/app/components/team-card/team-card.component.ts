import { Component, Input, OnInit } from "@angular/core";
import { DataStoreService } from "../../services/data-store.service";

@Component({
  selector: "app-team-card",
  styleUrls: ["./team-card.component.css"],
  templateUrl: "./team-card.component.html"
})
export class TeamCardComponent implements OnInit {
  @Input() public teamName: string;
  @Input() public teamPlayers: Array<string>;
  public showInputBox: boolean = false;

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.teamPlayers.forEach((player, index) => {
      if (!player) {
        this.teamPlayers.splice(index);
      }
    });
  }

  public addPlayer(player) {
    this.showInputBox = false;
    this.teamPlayers.push(player.value);
    this.dataStoreService.teams.set(this.teamName, this.teamPlayers);
  }

  public showPlayerInputBox() {
    this.showInputBox = true;
  }
}
