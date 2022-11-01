import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  myMap: GoogleMap;

  markerId: any;
  center: { lat: any; lng: any };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
  }

  async createMap() {
    this.myMap = await GoogleMap.create({
      id: 'myMap',
      element: this.mapRef.nativeElement,
      apiKey: environment.API_KEY_MAPS,
      config: {
        center: this.center,
        zoom: 16,
      },
    });

    this.myMap.setMapType(MapType.Terrain);
    await this.myMap.enableTrafficLayer(true);

    this.myMap.enableCurrentLocation(true);
    this.addListener();
    // this.addMarker(this.center.lat, this.center.lng);
    // for (const locs of this.locations) {
    //   this.addMarker(locs.lat, locs.lng);
    // }
  }

  async getMyLocation() {
    await Geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(
      (position) => {
        console.log('My Location', position);
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      }
    );
  }

  async addListener() {
    await this.myMap.setOnMarkerClickListener((event) => {
     //
    });

    await this.myMap.setOnMapClickListener((event) => {
     //
    });

    await this.myMap.setOnMyLocationButtonClickListener((event) => {
      //
    });

    await this.myMap.setOnMyLocationClickListener((event) => {
      this.addMarker(event.latitude, event.longitude);
    });
  }

  async addMarker(lat: any, lng: any) {
    this.markerId = await this.myMap.addMarker({
      coordinate: { lat, lng },
      draggable: true,
    });
  }
}
