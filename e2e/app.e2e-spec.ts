import { MygalleryPage } from './app.po';

describe('mygallery App', function() {
  let page: MygalleryPage;

  beforeEach(() => {
    page = new MygalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
