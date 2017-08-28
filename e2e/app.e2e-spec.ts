import { AngularTopicVotePage } from './app.po';

describe('angular-topic-vote App', () => {
  let page: AngularTopicVotePage;

  beforeEach(() => {
    page = new AngularTopicVotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
