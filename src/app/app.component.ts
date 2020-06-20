import { Component, OnInit } from '@angular/core';
import { TrackService } from './track.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  songs: any[] = [];
  
  constructor(
    protected trackService: TrackService,  
  ) {
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
