import { Injectable } from "@angular/core";

@Injectable()
export class TeamService {
  constructor() {}

  public formTeams(teamSize: number, players: Array<string>) {
    let totalTeams = Math.ceil(players.length / teamSize);
    let finalTeams: Map<string, Array<string>> = new Map();
    for (let team = 0; team < totalTeams; team++) {
      let currentTeam = [];
      for (let j = 0; j < teamSize; j++) {
        let chosenPlayerIndex = this.pickRandomPlayer(players.length);
        currentTeam.push(players[chosenPlayerIndex]);
        players.splice(chosenPlayerIndex, 1);
      }
      finalTeams.set(this.getInitialTeamName(team), currentTeam);
    }
    return finalTeams;
  }

  private pickRandomPlayer(playersLeft: number) {
    return Math.floor(Math.random() * playersLeft);
  }

  private getInitialTeamName(index): string {
    return String.fromCharCode(97 + index).trim();
  }
}
