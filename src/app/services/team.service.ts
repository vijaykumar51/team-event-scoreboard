import { Injectable } from "@angular/core";

@Injectable()
export class TeamService {
  constructor() {}

  public formTeams(teamSize: number, players: Array<string>) {
    let totalTeams = Math.ceil(players.length / teamSize);
    console.warn("totalTeams", totalTeams);
    return players;
  }
}
