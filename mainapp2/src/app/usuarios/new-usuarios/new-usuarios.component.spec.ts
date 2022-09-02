import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsuariosComponent } from './new-usuarios.component';

describe('NewUsuariosComponent', () => {
  let component: NewUsuariosComponent;
  let fixture: ComponentFixture<NewUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
