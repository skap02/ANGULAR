import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiciosComponent } from './list-servicios.component';

describe('ListServiciosComponent', () => {
  let component: ListServiciosComponent;
  let fixture: ComponentFixture<ListServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
