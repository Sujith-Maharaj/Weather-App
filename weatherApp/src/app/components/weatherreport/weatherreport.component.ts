import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, filter, map, Observable, tap } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weatherreport',
  templateUrl: './weatherreport.component.html',
  styleUrls: ['./weatherreport.component.scss']
})
export class WeatherreportComponent implements OnInit {

  data$!: Observable<any>;

  today: Date = new Date();

  loading = false;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map(params => params['locationName']),
      filter(name => !!name),
      tap(() => {
        this.loading = true;
      }),
      concatMap(name => this.weatherService.getWeatherForCity(name)),
      tap(() => {
        this.loading = false;
      })
    );
  }

}
