import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.page.html',
  styleUrls: ['./song-detail.page.scss'],
})
export class SongDetailPage implements OnInit {
  title: String;
  id : number;
  type:String;
  picture: String;
  name: String;
  duration: String;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
    this.title = this.rutaActiva.snapshot.params.title;
    this.type = this.rutaActiva.snapshot.params.type;
    this.picture = this.rutaActiva.snapshot.params.picture;
    this.name = this.rutaActiva.snapshot.params.name;
    this.duration = this.rutaActiva.snapshot.params.duration;
  }

}
