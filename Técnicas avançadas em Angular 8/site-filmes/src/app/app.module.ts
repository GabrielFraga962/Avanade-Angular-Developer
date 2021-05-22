import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertaComponent } from './shared/componentes/alerta/alerta.component';
import { TopoComponent } from './shared/componentes/topo/topo.component';
import { RodapeComponent } from './shared/componentes/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './shared/material/material.module';
import { MAT_DATE_LOCALE  } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    
    
  ],
  entryComponents: [AlertaComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
