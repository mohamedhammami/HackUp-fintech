import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcomptetitreComponent } from './detailcomptetitre.component';

describe('DetailcomptetitreComponent', () => {
  let component: DetailcomptetitreComponent;
  let fixture: ComponentFixture<DetailcomptetitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcomptetitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcomptetitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
