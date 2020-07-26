import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralShowComponent } from './electoral-show.component';

describe('ElectoralShowComponent', () => {
  let component: ElectoralShowComponent;
  let fixture: ComponentFixture<ElectoralShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectoralShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoralShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
