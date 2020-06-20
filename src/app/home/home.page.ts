import { Component } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songs: any[] = [];
  
  constructor( protected trackService: TrackService) {

  }
  ngOnInit() {
  this.trackService.getTracks()
    .subscribe(
      (data) => { 
        this.songs = data['data'];
        
        console.log(this.songs);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
