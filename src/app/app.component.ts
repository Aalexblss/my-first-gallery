import { Component } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GalleryService]
})

export class AppComponent {
mygallery = [];
coll = 8;
constructor(private galleryservice: GalleryService) {

}

ngOnInit() {
  this.mygallery = this.galleryservice.mygallery
}

}


export class NgbdPaginationBasic {
  page = 4;
}
