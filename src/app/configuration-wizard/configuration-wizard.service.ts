import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigurationWizardService {

  showSideNav = false;
  showBreadcrumbs = false;
  showHome = false;
  showCreateOffice = false;
  showAddEditCurrency = false;
  showCreateHoliday = false;
  showCreateEmployee = false;
  showDefineWorkingDays = false;
  showDatatables = false;
  showSystemCodes = false;
  showRolesandPermission = false;
  showUsers = false;
  showMakerCheckerTable = false;
  showConfigurations = false;
  showSchedulerJobs = false;
  showChartofAccounts = false;
  showAccountsLinked = false;
  showMigrateOpeningBalances = false;
  showClosingEntries = false;
  showCreateJournalEntries = false;
  showCharges = false;
  showLoanProducts = false;
  showSavingsProducts = false;
  showShareProducts = false;
  showFixedDepositProducts = false;
  showRecurringDepositProducts = false;
  showManageFunds = false;
  showManageReports = false;

  constructor() { }
}
