import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurio-list',
  templateUrl: './dinosaurio-list.component.html',
  styleUrls: ['./dinosaurio-list.component.css']
})
export class DinosaurioListComponent implements OnInit {
 dinosaurios: Array<Dinosaurio> = [];
 selected: Boolean = false;
 selectedDinosaurio!: Dinosaurio;

 
  constructor(private dinosaurioService: DinosaurioService) { }

  ngOnInit() {
    this.getDinosaurios();
  }

  getDinosaurios(): void {
    this.dinosaurioService.getDinosaurios().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }

  getCarnivoros(): number {
    let total = 0;
    this.dinosaurios.forEach((dinosaurio) => {
      if (dinosaurio.feeding == "Carnivoro")
      total += 1 ;
    });
    return total;
  }


  getHerbivoros(): number {
    let total = 0;
    this.dinosaurios.forEach((dinosaurio) => {
      if (dinosaurio.feeding == "Herbivoro")
      total += 1 ;
    });
    return total;
  }

  onSelected(dinosaurio: Dinosaurio): void {
    this.selected = true;
    this.selectedDinosaurio = dinosaurio;
  }

}
