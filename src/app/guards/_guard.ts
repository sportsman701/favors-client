import { Observable } from 'rxjs';

export type CanActivateReturn =
  Observable<boolean> |
  Promise<boolean> |
  boolean;
