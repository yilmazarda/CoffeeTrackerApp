import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoffeeComponent } from './update-coffee.component';

describe('UpdateCoffeeComponent', () => {
  let component: UpdateCoffeeComponent;
  let fixture: ComponentFixture<UpdateCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCoffeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
