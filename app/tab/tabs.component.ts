import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
    selector: 'tabs',
    template: `
<div style="background: #3f4555">
    <ul class="nav nav1-tabs col-md-offset-1 menu-block-textsize12">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    </div>
    <ng-content></ng-content>
  `
})
export class Tabs implements AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: TabComponent) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.active = false);

        // activate the tab the user has clicked on.
        tab.active = true;
    }

}
