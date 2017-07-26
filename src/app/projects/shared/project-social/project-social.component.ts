import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-social',
  templateUrl: './project-social.component.html',
  styleUrls: ['./project-social.component.css']
})
export class ProjectSocialComponent implements OnInit {

  @Input() projectPageUrl: string;
  @Input() shareKarmaPoints: number;

  constructor() { }

  ngOnInit() {
  }

}
