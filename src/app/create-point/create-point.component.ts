import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon } from 'leaflet';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.scss']
})
export class CreatePointComponent implements OnInit {

  leafletOptions: any;
  leafletLayers: any;

  constructor() { }

  ngOnInit(): void {
    
    this.leafletOptions = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 15,
      center: latLng(-23.5725608, -46.6222736)
    };

    this.leafletLayers = [
      marker([ -23.5725608, -46.6222736 ], {
        icon: icon({
           iconSize: [ 25, 41 ],
           iconAnchor: [ 13, 41 ],
           iconUrl: 'assets/marker-icon.png',
           shadowUrl: 'assets/marker-shadow.png'
        })
      })
    ];
  }

}
