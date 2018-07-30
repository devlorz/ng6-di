import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleService } from './people.service';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [AppComponent, ContactListComponent],
  imports: [BrowserModule],
  providers: [{ provide: PeopleService, useClass: PeopleService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
