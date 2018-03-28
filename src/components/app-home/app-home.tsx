import { Component } from '@stencil/core';

const nav = document.querySelector('ion-nav');

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  goToProfile(){
    nav.push('app-profile');
  }

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-title>Ionic PWA Toolkit</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <p>
            Welcome to the Ionic PWA Toolkit.
            You can use this starter to build entire PWAs all with
            web components using Stencil and ionic/core! Check out the readme for everything that comes in this starter out of the box and
            Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
          </p>

          <ion-nav-push component="app-profile">
            <ion-button>Push Profile Page</ion-button>
          </ion-nav-push>

          <ion-nav-set-root component="app-profile">
            <ion-button>Make Profile Page Root Component</ion-button>
          </ion-nav-set-root>

          <ion-button onClick={() => this.goToProfile()}>Push Profile Page with Function</ion-button>

        </ion-content>
      </ion-page>
    );
  }
}
