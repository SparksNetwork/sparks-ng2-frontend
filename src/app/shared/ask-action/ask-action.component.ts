import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ask-action',
  templateUrl: './ask-action.component.html',
  styleUrls: ['./ask-action.component.scss']
})
export class AskActionComponent implements OnInit {

  public modalRef: BsModalRef;
  @Input() public askWho: string;
  @Input() public modalTitle: string;
  @Input() public modalBody: string;

  router: Router;

  constructor(private modalService: BsModalService, private _router: Router) {
    this.router = _router;
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    console.log(this.askWho);
    console.log( this.router.url );
  }

}
