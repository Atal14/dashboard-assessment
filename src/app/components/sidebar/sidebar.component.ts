import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { EventType, Router, RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { Subject, takeLast, takeUntil } from 'rxjs';

export interface IDashMenuItem {
  name: string;
  iconClass: string;
  routerLink: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, MenuModule, RouterLink, NgIf, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnDestroy {
  @Output() headerEmitter = new EventEmitter<string>();
  unSub = new Subject<boolean>();
  dashboardMenuItems: IDashMenuItem[] = [
    {
      name: 'Dashboard',
      iconClass: 'icon-dash-dashboard',
      routerLink: '/dashboard/dashboard',
    },
    {
      name: 'Transactions',
      iconClass: 'icon-dash-transaction',
      routerLink: '/dashboard/transactions',
    },
    {
      name: 'Accounts',
      iconClass: 'icon-dash-accounts',
      routerLink: '/dashboard/accounts',
    },
    {
      name: 'Investments',
      iconClass: 'icon-dash-investment',
      routerLink: '/dashboard/investments',
    },
    {
      name: 'Credit Cards',
      iconClass: 'icon-dash-credit-card',
      routerLink: '/dashboard/credit-card',
    },
    {
      name: 'Loans',
      iconClass: 'icon-dash-loan',
      routerLink: '/dashboard/loan',
    },
    {
      name: 'Services',
      iconClass: 'icon-dash-service',
      routerLink: '/dashboard/service',
    },
    {
      name: 'My Privileges',
      iconClass: 'icon-dash-privileges',
      routerLink: '/dashboard/privileges',
    },
    {
      name: 'Setting',
      iconClass: 'icon-dash-settings',
      routerLink: '/dashboard/settings',
    },
  ];
  selectedIndex = -1;

  router = inject(Router);
  constructor() {
    this.router.events.pipe(takeUntil(this.unSub)).subscribe((ev) => {
      if (ev.type === EventType.NavigationEnd) {
        const index = this.dashboardMenuItems.findIndex((item) => {
          return item.routerLink === ev.url;
        });
        this.selectedIndex = index;
      }
    });
  }

  onMenuItemClick(menuItem: IDashMenuItem, index: number) {
    this.router.navigate([menuItem.routerLink]);
    this.selectedIndex = index;
    this.headerEmitter.emit(menuItem.name);
  }

  identifyBy(index: number, item: IDashMenuItem) {
    return item.name;
  }

  ngOnDestroy(): void {
    this.unSub.next(true);
    this.unSub.complete();
  }
}
