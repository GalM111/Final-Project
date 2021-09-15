import { Component, OnInit, ViewChild } from '@angular/core';
import { MapLayerProviderOptions, SceneMode, AcEntity, AcNotification, ActionType, AcMapComponent, MapEventsManagerService, EventRegistrationInput, CesiumEvent, PickOptions, EventResult } from 'angular-cesium';
import { Subject } from 'rxjs';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit {
  
  mapId;
  mapProvider;
  providerOptions;
  sceneMode;


  @ViewChild('idMap', { static: true }) map: AcMapComponent;
  constructor() {
  
    this.mapId = 'cesiumContainer';
    this.mapProvider = MapLayerProviderOptions.OpenStreetMap;
    this.providerOptions = { url: 'http://127.0.0.1:3500' }
    this.sceneMode = SceneMode.SCENE3D;


  
   //var viewer = new Cesium.Viewer("cesiumContainer");
    // viewer.scene.highDynamicRange = false;
    // viewer.scene.globe.maximumScreenSpaceError = 1.5;
    // viewer.scene.postProcessStages.fxaa.enabled = false;  //blurry map fix attempts
    //viewer.scene.highDynamicRange = false;


  }
  ngAfterViewInit() {
    this.map.getCameraService().setView({ destination: Cesium.Cartesian3.fromDegrees(34.79, 31.25, 980000.0) });
    const pointsEntities: AcEntity[] = [];
    const labelsEntities: AcEntity[] = [];
  
  }

  ngOnInit() {

    //TODO: check how to edit style in css as normal
    (<HTMLElement>document.getElementsByClassName('map-container')[0]).style.height = "100%";
    (<HTMLElement>document.getElementsByClassName('map-container')[0]).style.width = "100%";
 
  }
  onClickEvent(id) {
        var now = new Date(Date.now())
        var year = now.getFullYear().toString();
        var month = now.getMonth().toString();
        var day = now.getDate().toString();
        console.log({
          yearVal: year,
          monthVal: month,
          dayVal: day,
    
        })
      
    
      }
    
  }



