import { ActivatedRouteSnapshot } from '@angular/router';

export function getRouteParamKey(key: string, route: ActivatedRouteSnapshot, recursiveParent: boolean = false) {
  const value = route.params[key];
  if (value) {
    return value;
  }

  if (recursiveParent && route.parent) {
    return getRouteParamKey(key, route.parent, recursiveParent);
  } else {
    return null;
  }
}
