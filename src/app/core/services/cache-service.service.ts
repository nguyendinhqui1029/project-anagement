import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheServiceService {
  private cache = new Map<string, unknown>();

  get<T>(key: string): T | null {
    return this.cache.get(key) as T | null;
  }

  set<T>(key: string, value: T): void {
    this.cache.set(key, value);
  }
}
