import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerosComponent } from './tableros.component';

describe('TablerosComponent', () => {
  let component: TablerosComponent;
  let fixture: ComponentFixture<TablerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
