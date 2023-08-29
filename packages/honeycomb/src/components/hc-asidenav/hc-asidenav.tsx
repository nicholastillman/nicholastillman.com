import { Component, Prop, h } from '@stencil/core';
import { getFullYearOnly } from '../../utils/utils';

interface Date {
  getFullYear();
}

@Component({
  tag: 'hc-asidenav',
  styleUrl: 'hc-asidenav.scss',
  shadow: true,
})
export class HoneycombAsideNav {
  @Prop() avatar: string;
  @Prop() avatarLink: string = '/';
  @Prop() copyright: Date;
  @Prop() isExample?: boolean;

  render() {
    const currentdate = new Date();
    return (
      <aside class={`hc-asidenav ${this.isExample ? '-example' : ''}`}>
        <div class="avatar">
          <a href={`${this.avatarLink}`}>
            <img src={this.avatar} alt="Avatar of UI designer and developer Nicholas Tillman" />
          </a>
        </div>
        <div class="aside-item links">
          <slot name="aside-links" />
        </div>

        <div class="aside-item copyright">
          {/* TODO: make a slotted component: <hc-copyright /> */}
          <span>©{getFullYearOnly(currentdate)}</span>
        </div>
      </aside>
    );
  }
}
