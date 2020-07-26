import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralCreateComponent } from './electoral-create.component';

describe('ElectoralCreateComponent', () => {
  let component: ElectoralCreateComponent;
  let fixture: ComponentFixture<ElectoralCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectoralCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoralCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
