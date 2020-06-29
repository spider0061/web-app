/** Angular Imports */
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'mifosx-configuration-wizard',
  templateUrl: './configuration-wizard.component.html',
  styleUrls: ['./configuration-wizard.component.scss']
})
export class ConfigurationWizardComponent implements OnInit {

  show = false;

  constructor(public dialogRef: MatDialogRef<ConfigurationWizardComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  showConfigWizard() {
    this.dialogRef.close({show: true});
  }

}
