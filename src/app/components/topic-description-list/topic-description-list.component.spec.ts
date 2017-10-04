import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDescriptionListComponent } from './topic-description-list.component';

describe('TopicDescriptionListComponent', () => {
  let component: TopicDescriptionListComponent;
  let fixture: ComponentFixture<TopicDescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
