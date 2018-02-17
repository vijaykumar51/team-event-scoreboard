import { Injectable } from "@angular/core";

@Injectable()
export class TeamService {
  constructor() {}

  public formTeams(teamSize: number, players: Array<string>) {
    let totalTeams = Math.ceil(players.length / teamSize);
    let finalTeams = [];
    for (let i = 0; i < totalTeams; i++) {
      let currentTeam = [];
      for (let j = 0; j < teamSize; j++) {
        let chosenPlayerIndex = this.pickRandomPlayer(players.length);
        currentTeam.push(players[chosenPlayerIndex]);
        players.splice(chosenPlayerIndex, 1);
      }
      finalTeams.push(currentTeam);
    }
    return finalTeams;
  }

  private pickRandomPlayer(playersLeft: number) {
    return Math.floor(Math.random() * playersLeft);
  }
}
