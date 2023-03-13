import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images';
  image1 = 'https://pbs.twimg.com/media/DRBvJVdV4AAKXeO.jpg:large';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPugWzSnX3TWCYO-KlF4f5VF2JeMp6VGdAi2lQTLzsqHq00dW';
  image3 = 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}