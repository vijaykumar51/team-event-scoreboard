import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PapaParseService } from "ngx-papaparse";
import { DataStoreService } from "../../services/data-store.service";
import { Players } from "../../config/players";

@Component({
  selector: "app-upload-data",
  templateUrl: "./upload-players-data.component.html",
  styleUrls: ["./upload-players-data.component.css"]
})
export class UploadPlayersDataComponent {
  public importedCsvPlayers = [];
  public importHasErrors: boolean = false;
  public useDummyData: boolean = false;
  constructor(
    private router: Router,
    private papaParseService: PapaParseService,
    private dataStoreService: DataStoreService
  ) {}

  public parseCsvFile($event) {
    let self = this;
    let file = $event.target.files[0];

    let reader: FileReader = new FileReader();
    reader.onloadend = function(event) {
      let json = self.papaParseService.parse(reader.result);
      self.importHasErrors = json.errors.length ? false : true;
      self.importedCsvPlayers = json.data[0];
    };
    reader.readAsText(file);
  }

  public confirmSelection() {
    if (!this.useDummyData) {
      console.info("import", this.importedCsvPlayers);
      this.dataStoreService.players = this.importedCsvPlayers;
    } else {
      console.info("default", Players.names);
      this.dataStoreService.players = Players.names;
    }
    this.router.navigate(["/createTeam"]);
  }
}
