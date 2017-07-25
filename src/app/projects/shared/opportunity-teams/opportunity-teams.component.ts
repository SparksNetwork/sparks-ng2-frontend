import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opportunity-teams',
  templateUrl: './opportunity-teams.component.html',
  styleUrls: ['./opportunity-teams.component.css']
})
export class OpportunityTeamsComponent implements OnInit {

  @Input() private teams: any[];
  private displayedTeams: any[];
  private collapsedTeams: any[];
  private collapsedTeamNames: string[];
  
  constructor() { }

  ngOnInit() {
    if(this.teams && this.teams.length > 0) {
      var limit = Math.min(this.teams.length, 3);
      this.displayedTeams = this.teams.slice(0, limit);
      this.collapsedTeams = this.teams.slice(limit, this.teams.length);
      this.collapsedTeamNames = this.collapsedTeams.map((team) => team.name);
    }
  }

}
