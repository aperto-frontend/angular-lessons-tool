import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PollVoteFormComponent } from './components/poll-vote-form/poll-vote-form.component';

import { WebsocketsService } from './services/websockets/websockets.service';
import { VotesService } from './services/votes/votes.service';
import { VoteComponent } from './components/vote/vote.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarComponent } from './components/bar-chart/bar.component';
import { IterablePipe } from './pipes/iterable.pipe';
import { ParentPercentWidthDirective } from './directive/parent-percent-width.directive';
import { TopicsService } from './services/topics/topics.service';
import { DescriptionListComponent } from './components/description-list/description-list.component';
import { TopicDescriptionListComponent } from './components/topic-description-list/topic-description-list.component';
import { ExampleDescriptionListComponent } from './components/example-description-list/example-description-list.component';
import { DescriptionsService } from './services/descriptions/descriptions.service';

@NgModule({
  declarations: [
    AppComponent,
    PollVoteFormComponent,
    VoteComponent,
    BarChartComponent,
    BarComponent,
    IterablePipe,
    ParentPercentWidthDirective,
    DescriptionListComponent,
    TopicDescriptionListComponent,
    ExampleDescriptionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    VotesService,
    TopicsService,
    WebsocketsService,
    DescriptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
