import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInvitarUsuariosComponent } from './modal-invitar-usuarios.component';

describe('ModalInvitarUsuariosComponent', () => {
  let component: ModalInvitarUsuariosComponent;
  let fixture: ComponentFixture<ModalInvitarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInvitarUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInvitarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
