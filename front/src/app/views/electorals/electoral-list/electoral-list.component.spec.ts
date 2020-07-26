import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralListComponent } from './electoral-list.component';

describe('ElectoralListComponent', () => {
  let component: ElectoralListComponent;
  let fixture: ComponentFixture<ElectoralListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectoralListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoralListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
