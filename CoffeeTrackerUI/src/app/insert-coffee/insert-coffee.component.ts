import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-coffee',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './insert-coffee.component.html',
  styleUrl: './insert-coffee.component.css'
})
export class InsertCoffeeComponent {
  apiUrl = "http://localhost:5139/api/coffee";

  insertForm = new FormGroup({
    amount: new FormControl(''),
    date: new FormControl(''),
    coffeeType: new FormControl('')
  })

  constructor(private http: HttpClient, private router: Router) {
  }

  postCoffee() {
    const coffeeData = {
        amount: this.insertForm.get('amount')?.value,
        date: this.insertForm.get('date')?.value,
        coffeeType: this.insertForm.get('coffeeType')?.value,
    };

    console.log('Coffee data:', coffeeData);

    this.http.post(this.apiUrl, coffeeData, {
        headers: { 'Content-Type': 'application/json' }
    }).subscribe({
        next: response => {
            console.log('Record inserted successfully', response);
        },
        error: error => {
            console.error('Error inserting record', error);
        }
    });
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });
  }
}
