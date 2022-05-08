import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbalComponent } from './toolbal.component';

describe('ToolbalComponent', () => {
  let component: ToolbalComponent;
  let fixture: ComponentFixture<ToolbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
