import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class CustomReuseService implements RouteReuseStrategy {
  handlers: { [key: string]: DetachedRouteHandle } = {};

  constructor() {
  }

  calcKey(route: ActivatedRouteSnapshot) {
    let next = route;
    let url = '';
    while ( next ) {
      if ( next.url ) {
        url = next.url.join('/');
      }
      next = next.firstChild;
    }
    console.log('url', url);
    return url;
  }

  /**
   * Determines if this route (and its subtree) should be detached to be reused later.
   * @param route
   * @returns {boolean}
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('CustomReuseStrategy:shouldDetach', route);
    return true;
  }

  /**
   * Stores the detached route.
   * @param route
   * @param handle
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    console.log('CustomReuseStrategy:store', route, handle);
    this.handlers[this.calcKey((route))] = handle;
  }

  /**
   * Determines if this route (and its subtree) should be reattached.
   * @param route
   * @returns {boolean}
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('CustomReuseStrategy:shouldAttach', route);
    return !!route.routeConfig && !!this.handlers[this.calcKey(route)];
  }

  /**
   * Retrieves the previously stored route.
   * @param route
   * @returns {any}
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.log('CustomReuseStrategy:retrieve', route);
    if ( !route.routeConfig ) {
      return null;
    }
    return this.handlers[this.calcKey(route)];
  }

  /**
   * Determines if a route should be reused.
   * @param future
   * @param curr
   * @returns {boolean}
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log('CustomReuseStrategy:shouldReuseRoute', future, curr);
    return this.calcKey(curr) === this.calcKey(future);
  }
}
