import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { UnlessDirective } from './highlight/unless.directive';
import { ServerPipeComponent } from './server-pipe/server-pipe.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentsComponent,
    AssignmentComponent,
    CockpitComponent,
    ServerElementComponent,
    HighlightDirective,
    UnlessDirective,
    ServerPipeComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
