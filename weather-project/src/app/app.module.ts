import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CesiumComponent } from './cesium/cesium.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  AngularCesiumModule, CesiumService, ViewerConfiguration,
  MapEventsManagerService, CameraService, CoordinateConverter
} from 'angular-cesium';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AngularCesiumModule.forRoot(),
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
