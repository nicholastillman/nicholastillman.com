import { Component, Prop, Fragment, h } from '@stencil/core';

@Component({
  tag: 'test-stack',
  styleUrl: 'test-stack.scss',
  shadow: true,
})
export class TestStack {
  @Prop() items: string[] = ['hc-asidenav', 'hc-panel', 'hc-stack'];
  render() {
    return (
      <Fragment>
        <div class="test-stack-module">
          <pre>
            Components:
            {this.items.map(item => (
              <p>{item}</p>
            ))}
          </pre>
          {/*
          <div class="container stack" style="position: relative; display: flex; justify-content: space-between">
            <hc-asidenav avatar="http://fakeimg.pl/50x50?text=A&font=bebas">
              <nav slot="aside-links" class="aside-menu">
                <a class="nav-link" href="http://linkedin.com">LI</a>
                <a class="nav-link" href="http://dribbble.com">DR</a>
              </nav>
            </hc-asidenav>

            <div class="o-constrain" style="flex: 2; padding-right: 5%">
              <div style="display: grid; grid-template-columns: auto">
                <hc-stack stack="lg" style="justify-self: flex-end">
                  <hc-header></hc-header>
                </hc-stack>
              </div>
            </div>
          </div>*/}
          <hc-panel size="lg" tokens="_flx-column _md:flx-row" as="flex-lg">
            <div class="left flex-item">
              <hc-asidenav avatar="http://fakeimg.pl/50x50?text=A&font=bebas">
                <nav slot="aside-links" class="aside-menu">
                  <a class="nav-link" href="http://linkedin.com">
                    LI
                  </a>
                  <a class="nav-link" href="http://dribbble.com">
                    DR
                  </a>
                </nav>
              </hc-asidenav>
            </div>
            <div class="right flex-item">
              <hc-header link-class="resume">H</hc-header>
              <main style={{ border: '1px solid red', height: '100vh' }}>
                <h1>Hello World</h1>
              </main>
            </div>
          </hc-panel>
        </div>
      </Fragment>
    );
  }
}
