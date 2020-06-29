/** Angular Imports */
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'mifosx-continue-office-setup-dialog',
  templateUrl: './continue-office-setup-dialog.component.html',
  styleUrls: ['./continue-office-setup-dialog.component.scss']
})
export class ContinueOfficeSetupDialogComponent implements OnInit {

  step: number;

  constructor(public dialogRef: MatDialogRef<ContinueOfficeSetupDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
