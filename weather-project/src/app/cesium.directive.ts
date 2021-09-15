// import { Directive, OnInit, ElementRef } from '@angular/core';
// import * as io from 'socket.io-client';
// import { CesiumComponent } from './cesium/cesium.component';

// @Directive({
//     selector: '[appCesium]'
// })
// export class CesiumDirective implements OnInit {
//     entity: number;
//     resForecastArray;
//     socket: SocketIOClient.Socket = io("http://localhost:3100");
//     entityId;
//     viewer;
//     cities: { name: string; lat: number; lng: number; }[];
//     constructor(private el: ElementRef, private cesiumComponent: CesiumComponent) {
//         this.socket.connect();
//         this.cities = [{ name: "Haifa", lat: 34.99, lng: 32.80 }, { name: "Tel Aviv", lat: 34.80, lng: 32.09 }, { name: "Jerusalem", lat: 35.19, lng: 31.75 }, { name: "Eilat", lat: 34.92, lng: 29.64 }, { name: "Qiryat Shmona", lat: 35.57, lng: 33.21 },
//         { name: "Be'er Sheva", lat: 34.79, lng: 31.25 }, { name: "Mitzpe Ramon", lat: 34.80, lng: 30.61 }, { name: "Hadera", lat: 34.92, lng: 32.44 }];
//     }

//     ngOnInit() {
//         this.viewer = new Cesium.Viewer(this.el.nativeElement, {
//             imageryProvider: new Cesium.TileMapServiceImageryProvider({
//                 url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
//             }),
//             baseLayerPicker: false,
//             geocoder: false,


//         });
//         var center = Cesium.Cartesian3.fromDegrees(34.89, 31.46);
//         this.viewer.camera.lookAt(center, new Cesium.Cartesian3(0.0, 0.0, 1000000.0));
//         for (let i = 0; i < this.cities.length; i++) {
//             this.viewer.entities.add({
//                 position: Cesium.Cartesian3.fromDegrees(this.cities[i].lat, this.cities[i].lng),
//                 point: {
//                     show: true, // default
//                     pixelSize: 10, // default: 1
//                     outlineColor: Cesium.Color.YELLOW, // default: BLACK
//                     outlineWidth: 3 // default: 0      
//                 },
//                 name: this.cities[i].name,
//                 id: i,
//                 label: {
//                     text: this.cities[i].name,
//                     horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
//                     font: "10px",
//                     pixelOffset: new Cesium.Cartesian2(-20, 0)
//                 }
//             });
//         }
//         this.socket.on('recieve', (res: any) => {
//             document.getElementById("forecastContainer").style.display = "flex";
//             document.getElementById("locationName").innerText = "Forecast results for " + this.cities[this.entityId].name;
//             this.cesiumComponent.forecastArray = res;
//             let date: Date;
//             this.cesiumComponent.dateArray = [];
//             for (let i = 0; i < res.length; i++) {
//                 date = new Date();
//                 date.setDate(date.getDate() + i);
//                 this.cesiumComponent.dateArray.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
//             }
//         });
//         var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
//         handler.setInputAction(this.onClickEvent.bind(this), Cesium.ScreenSpaceEventType.LEFT_CLICK);
//     }

//     onClickEvent(click) {
      
//         var pickedObject = this.viewer.scene.pick(click.position);
//         if (Cesium.defined(pickedObject)) {
//             var now = new Date(Date.now())
//             var year = now.getFullYear().toString();
//             var month = now.getMonth().toString();
//             var day = now.getDate().toString();
//             var entityId = pickedObject.id._id;
//             this.entityId = entityId;
//             let cesiumContent=document.getElementById('cesiumContent').style.height='600px';
//             document.getElementById("forecastContainer").style.display = "flex";
//             document.getElementById("locationName").innerText = "Forecast results for " + this.cities[entityId].name;
//             this.socket.emit('statistics', {
//                 yearVal: year,
//                 monthVal: month,
//                 dayVal: day,
//                 lat: this.cities[entityId].lat,
//                 lng: this.cities[entityId].lng,

//             })
//         }
//     }

// }
