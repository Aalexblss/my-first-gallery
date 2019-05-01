import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class AppGallery {

@Input() user;

isMarked = false;

onMarked(user){
  this.isMarked = true;
  this.user.category = "favorite";
}


}
