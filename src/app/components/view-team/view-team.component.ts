import { Component } from "@angular/core";
import { DataStoreService } from "../../services/data-store.service";

@Component({
  selector: "app-view-team",
  styleUrls: ["./view-team.component.css"],
  templateUrl: "./view-team.component.html"
})
export class ViewTeamComponent {
  constructor(private dataStoreService: DataStoreService) {
    console.warn(this.dataStoreService.teams);
  }
}
