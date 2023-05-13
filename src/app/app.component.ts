import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-about></app-about>
  <app-projects></app-projects>
  <app-more-about></app-more-about>
  <app-footer></app-footer>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Meu Portfólio';

  constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute) {}

  ngOnInit() {
    // Rolar para o componente com o ID fornecido na URL
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }

  // scrollToComponent(id: string) {
  //   this.viewportScroller.scrollToAnchor(id);
  // }
}
