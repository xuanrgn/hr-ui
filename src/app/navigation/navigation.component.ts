import { Component, OnInit } from '@angular/core';
import { VacancyService } from "../service/vacancy.service";
import { Vacancy } from '../vacancy/vacancy.model';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public active = "Vacancies"
  vacancyList: Vacancy[] = [];
  constructor(private vacancyService: VacancyService) { }

  ngOnInit() {
    this.vacancyService.getList().subscribe(
      (val) => {
        this.vacancyList = val;
      }
    )
  }

  setActive(list){
      this.active = list;
    }

}
