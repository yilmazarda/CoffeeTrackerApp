import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-coffee',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './update-coffee.component.html',
  styleUrl: './update-coffee.component.css'
})
export class UpdateCoffeeComponent {
  apiUrl = "http://localhost:5139/api/coffee";
  coffeeId = null;
  updateForm = new FormGroup({
    amount: new FormControl(''),
    date: new FormControl(''),
    coffeeType: new FormControl('')
  })

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.coffeeId = this.route.snapshot.params['id'];
  }

  updateCoffee() {
    const coffeeData = {
        amount: this.updateForm.get('amount')?.value,
        date: this.updateForm.get('date')?.value,
        coffeeType: this.updateForm.get('coffeeType')?.value,
    };

    console.log('Coffee data:', coffeeData);

    this.http.put(`${this.apiUrl}/${this.coffeeId}`, coffeeData, {
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
