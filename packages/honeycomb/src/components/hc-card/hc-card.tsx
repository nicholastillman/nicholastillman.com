import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hc-card',
  styleUrl: 'hc-card.scss',
  shadow: true,
})
export class HoneyCombCard {
  @Prop() cardTitle: string;

  @Prop() cardImage: string = '';
  @Prop() cardImageAlt: string;
  render() {
    return (
      <div class="hc-card">
        <div class="hc-card-image">
          <img src={this.cardImage} alt={this.cardImageAlt} />
        </div>
        <iv class="hc-card-content">
          <h3 class="hc-card-title">{this.cardTitle}</h3>
        </iv>
      </div>
    );
  }
}
