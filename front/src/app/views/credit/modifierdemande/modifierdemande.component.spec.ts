import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdemandeComponent } from './modifierdemande.component';

describe('ModifierdemandeComponent', () => {
  let component: ModifierdemandeComponent;
  let fixture: ComponentFixture<ModifierdemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierdemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
