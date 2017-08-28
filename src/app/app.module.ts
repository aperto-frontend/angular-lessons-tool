import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PollVoteFormComponent } from './components/poll-vote-form/poll-vote-form.component';

import { WebsocketsService } from './services/websockets/websockets.service';
import { TopicsService } from './services/topics/topics.service';
import { VoteComponent } from './components/vote/vote.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarComponent } from './components/bar-chart/bar.component';
import { IterablePipe } from './pipes/iterable.pipe';
import { ParentPercentWidthDirective } from './directive/parent-percent-width.directive';

@NgModule({
  declarations: [
    AppComponent,
    PollVoteFormComponent,
    VoteComponent,
    BarChartComponent,
    BarComponent,
    IterablePipe,
    ParentPercentWidthDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebsocketsService, TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
