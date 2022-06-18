import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export enum Tabs {
  HISTORY = "history",
  ACTIVE = "active",
}

@Injectable({
  providedIn: "root",
})
export class CurrentSelectedTabService {
  private _currentSelectTab = new BehaviorSubject<Tabs>(Tabs.ACTIVE);
  public readonly currentSelectedTab: Observable<Tabs> =
    this._currentSelectTab.asObservable();

  public setCurrentSelectedTab(currentSelectedTab: Tabs): void {
    this._currentSelectTab.next(currentSelectedTab);
  }
}
