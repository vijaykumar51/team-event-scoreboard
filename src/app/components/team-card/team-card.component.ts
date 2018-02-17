import { Component, Input } from "@angular/core";

@Component({
  selector: "app-team-card",
  styleUrls: ["./team-card.component.css"],
  templateUrl: "./team-card.component.html"
})
export class TeamCardComponent {
  @Input() teamName: string;
  @Input() teamPlayers: Array<string>;
}
