import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  constructor(private domSannitizer: DomSanitizer) { }

  transform(value: any): any {

    const url = 'https://www.youtube.com/embed/';

    return this.domSannitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
