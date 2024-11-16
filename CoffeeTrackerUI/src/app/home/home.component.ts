import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiUrl = "http://localhost:5139/api/coffee";
  filteredCoffeeData: any[] = [];
  coffeeData: any[] = [];
  constructor(private http: HttpClient, private router: Router) {
    
  }

  ngOnInit(): void {
    this.getMethod();
    this.filteredCoffeeData = this.coffeeData;
  }
  public getMethod() {
    this.http.get<any[]>(this.apiUrl).subscribe(res => 
    this.coffeeData = res)
  }

  public deleteMethod(id: number) {
    this.http.delete(`http://localhost:5139/api/coffee/${id}`).subscribe({
      next: (response) => {
        console.log('Delete Successful', response);
        window.location.reload();
      },
      error: (error) => {
        console.log('Delete Failed', error);
      }
    });
  }

  public navigateToInsert() {
    this.router.navigate(['insert']);
  }
  
  public navigateToUpdate(id: number) {
    this.router.navigate([`update/${id}`]);
  }

  public filterResults(text: string) {
    if(!text) {
      this.filteredCoffeeData = this.coffeeData
    }
    this.filteredCoffeeData = this.coffeeData.filter(data => data.date.includes(text));
  }
}
