import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDescriptionListComponent } from './example-description-list.component';

describe('ExampleDescriptionListComponent', () => {
  let component: ExampleDescriptionListComponent;
  let fixture: ComponentFixture<ExampleDescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
