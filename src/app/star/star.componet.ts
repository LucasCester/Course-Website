import { Component, Input, OnChanges} from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.componet.html',
  styleUrls: ['./star.componet.css']
})

export class StarComponet implements OnChanges {

  @Input()
  rating: number = 0;

  startWidth!: number;

  ngOnChanges(): void {
    this.startWidth = this.rating * 74/5;
  }
}