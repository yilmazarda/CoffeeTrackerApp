import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCoffeeComponent } from './insert-coffee.component';

describe('InsertCoffeeComponent', () => {
  let component: InsertCoffeeComponent;
  let fixture: ComponentFixture<InsertCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertCoffeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
