import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hc-button',
  styleUrl: 'hc-button.scss',
  shadow: true,
})
export class HoneycombButton {
  @Prop() buttonText: string;
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'link';

  render() {
    return (
      <button class="hc-button" value={this.buttonText} data-button={this.variant}>
        {this.buttonText}
      </button>
    );
  }
}
