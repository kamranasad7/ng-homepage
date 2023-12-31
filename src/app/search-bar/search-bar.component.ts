import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchText: string = ""

  search() {
    window.open('http://google.com/search?q='+this.searchText);
    this.searchText = "";
  }
}
