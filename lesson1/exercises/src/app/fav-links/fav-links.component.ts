import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: ["https://www.imdb.com/title/tt10872600/","https://www.imdb.com/title/tt0120338/" ]
  constructor() { }

  ngOnInit() {
  }

}
