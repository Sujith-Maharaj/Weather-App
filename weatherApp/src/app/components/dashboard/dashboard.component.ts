import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy  {

  private unsubscribe$ = new Subject<void>();

  // cities = ["London", "New York", "Moscow", "Karachi"];

  countries = [
    {
      name: 'Tamil Nadu',
      cities: ['Thiruchirappalli','Chennai', 'Madurai', 'Erode', 'Vellore', 'Coimbatore']
    },
    {
      name: 'Kerala',
      cities: ['Thiruvananthapuram', 'Kochi', 'Palakad']
    },
    {
      name: 'Maharastra',
      cities: ['Mumbai', 'Nagpur', 'Pune']
    },
    {
      name: 'Karnataka',
      cities: ['Mysore', 'Bengaluru', 'Mangalore']
    }
  ];

  countryControl!: FormControl;
  cityControl!: FormControl;

  cities$!: Observable<string>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.router.navigate([value]);
      });

    this.countryControl = new FormControl('');

    this.cities$ = this.countryControl.valueChanges.pipe(
      map(country => country.cities)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
