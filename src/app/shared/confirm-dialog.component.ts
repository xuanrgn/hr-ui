import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'confirm-dialog',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirmation</h4>
      <button type="button" class="close" aria-label="Close" (click)="doCancel()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{ text }}</p>
    </div>
    <div class="modal-footer">
      <button type="button btn-danger" class="btn btn-outline-primary" (click)="doYes()">OK</button>
      <button type="button" class="btn btn-outline-danger" (click)="doCancel()">Cancel</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  @Input() text: String;
  constructor(public activeModal: NgbActiveModal) {}

  doYes() {
    this.activeModal.close({ action: 'yes' });
  }
  doCancel() {
    this.activeModal.close();
  }
}
