import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColeccionistaComponent } from './coleccionista/coleccionista.component';
import { MenuComponent } from './menu/menu.component';
import { OpcionComponent } from './opcion/opcion.component';
import { DiscosComponent } from './discos/discos.component';
import { ColeccionistasComponent } from './coleccionistas/coleccionistas.component';
import { AdicionarComponent } from './coleccionistas/adicionar/adicionar.component';
import { IndexComponent } from './coleccionistas/index/index.component';
import { ListaComponent } from './coleccionistas/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ColeccionistaComponent,
    MenuComponent,
    OpcionComponent,
    DiscosComponent,
    ColeccionistasComponent,
    AdicionarComponent,
    IndexComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
