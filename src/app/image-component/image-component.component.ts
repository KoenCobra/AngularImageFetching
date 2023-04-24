import {Component} from '@angular/core';
import {FetchImageService} from "../fetch-image.service";

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss']
})
export class ImageComponentComponent {
  imgLink: string = '';

  constructor(private imgService: FetchImageService) {
  }

  fetchImage() {
    this.imgService.fetchImage().subscribe((response) => {
      this.imgLink = response;
    });
  }
}
