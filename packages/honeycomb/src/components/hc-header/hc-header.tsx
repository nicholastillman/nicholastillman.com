import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hc-header',
  styleUrl: 'hc-header.scss',
  shadow: true,
})
export class HoneycombHeader {
  @Prop() avatar: string = 'http://fakeimg.pl/50x50?text=A&font=bebas';
  @Prop() avatarLink: string = '/';
  @Prop() resumeLink: string = 'assets/docs/NicholasTillman_resume_2023.docx';
  @Prop() linkClass: string = '';
  @Prop() siteURL: string = '';
  @Prop() token: string = '';

  render() {
    return (
      <header class="hc-header" data-variant="minimal">
        <div class="avatar">
          <a href={`${this.avatarLink}`}>
            <img src={this.avatar} alt="Avatar of UI designer and developer Nicholas Tillman" />
          </a>
        </div>
        <div class={`module ${this.token ? this.token : ''}`} data-module="link">
          <a class={this.linkClass} href={`${this.siteURL}/${this.resumeLink}`} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </header>
    );
  }
}
