import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
  scoped: true,
  assetsDirs: [
    './public/'
  ]
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() deedText: string;

  pages: {
    deedText: string,
    pageNumber: number
  }[] = [];

  connectedCallback() {
    console.log('connected')

    const deedTextArray = this.deedText.split(' ');
    const MAX_WORDS_PER_PAGE = 400;

    let pageNumber = 1;
    for (let i = 0; i < deedTextArray.length; i += 400) {
      this.pages.push({
        deedText: deedTextArray.splice(i, MAX_WORDS_PER_PAGE).join(' '),
        pageNumber
      })
      pageNumber++;
    }
  }

  render() {
    return <div>
      {this.pages.map(page =>
        <div class="deed-container noselect">
          <img src="./assets/bg@3x.png" style={{ height: '1115px' }} />
          <img src="./assets/combined-shape@3x.png" class="combined-shape" />
          <img src="./assets/basmalah@3x.png" class="basmalah" />
          <img src="./assets/moj-logo@3x.png" class="moj-logo" />
          <img src="./assets/title@3x.png" class="title-image" />
          <img src="./assets/footer@3x.png" class="footer-image" />

          <div class="deed-barcode">
            390001000166
                </div>

          <div class="deed-text">
            ${page.deedText}
          </div>

          <div class="deed-pagination">
            صفحة رقم ${page.pageNumber} من ${this.pages.length}
          </div>
        </div>
      )}
    </div>
  }
}
