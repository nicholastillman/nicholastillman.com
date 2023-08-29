import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hc-panel',
  styleUrl: 'hc-panel.scss',
  shadow: true,
})
export class HoneycombPanel {
  @Prop() as: string;
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  @Prop() tokens?: string; // TODO: add a tokens file in the ds system to compensate _mq-min:800' | '_mq-min:1040 | '_mq-min:1280 | '_mq-min:1440 ect...
  render() {
    // TODO: make agnostic enough to be consumed in any app const tokens = [];
    return (
      <section class={`hc-panel ${this.tokens ? this.tokens : ''}`} data-size={this.size} data-panel={this.as}>
        <slot></slot>
      </section>
    );
  }
}
