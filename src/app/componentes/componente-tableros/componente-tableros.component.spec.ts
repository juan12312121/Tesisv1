import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTablerosComponent } from './componente-tableros.component';

describe('ComponenteTablerosComponent', () => {
  let component: ComponenteTablerosComponent;
  let fixture: ComponentFixture<ComponenteTablerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteTablerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTablerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
