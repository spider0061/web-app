import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueOfficeSetupDialogComponent } from './continue-office-setup-dialog.component';

describe('ContinueOfficeSetupDialogComponent', () => {
  let component: ContinueOfficeSetupDialogComponent;
  let fixture: ComponentFixture<ContinueOfficeSetupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueOfficeSetupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueOfficeSetupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
