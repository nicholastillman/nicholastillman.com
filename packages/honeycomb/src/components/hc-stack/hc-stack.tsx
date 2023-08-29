import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hc-stack',
  styleUrl: 'hc-stack.scss',
  shadow: false,
})
export class HoneycombStack {
  @Prop() as: HTMLElement;
  @Prop() stack: string;

  render() {
    return (
      <div class={`hc-stack ${this.stack ? `stack-${this.stack}` : ''}`} data-container={this.as}>
        <slot></slot>
      </div>
    );
  }
}
