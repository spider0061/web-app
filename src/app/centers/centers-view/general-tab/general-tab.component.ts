/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'mifosx-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.scss']
})
export class GeneralTabComponent implements OnInit {

  groupsMembersColumns: string[] = ['name', 'active'];
  savingsColumns: string[] = ['Account No', 'Saving Account', 'Balance', 'Actions'];
  centerSummaryData: any;
  centerData: any;
  groupMembers: any;
  savingAccounts: any;

  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private datePipe: DatePipe,
    ) {

    this.route.data.subscribe((data: { centerSummaryData: any, centerData: any, centerAccountsData: any}) => {
      this.centerSummaryData = data.centerSummaryData[0];
      this.centerData = data.centerData;
      this.groupMembers = data.centerData.groupMembers;
      this.savingAccounts = data.centerAccountsData.savingsAccounts;

    });
    console.log(this.savingAccounts);
   }


  ngOnInit() {
  }

}
