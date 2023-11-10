import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() change = new EventEmitter<string>()
  constructor() {}

  ngOnInit() {}

  criteriaChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.change.emit(target.value);
  }
}
