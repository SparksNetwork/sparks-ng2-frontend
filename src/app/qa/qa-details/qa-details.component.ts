import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
  selector: 'app-qa-details',
  templateUrl: './qa-details.component.html'
})
export class QaDetailsComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit() {
  }

}
