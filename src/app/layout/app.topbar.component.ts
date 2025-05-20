import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "./service/app.layout.service";
import {Router} from "@angular/router";
import {Menu} from "primeng/menu";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;
    @ViewChild('userMenu') userMenu!: Menu;

    constructor(public layoutService: LayoutService
        , private router: Router) {
    }

    ngOnInit() {
        this.items = [
            {
                label: 'View Profile',
                icon: 'pi pi-id-card',
                command: () => {
                    this.router.navigate(['/profile']); // đường dẫn đến trang Profile
                }
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command: () => {
                    this.logout();
                }
            }
        ];
    }

    onUserMenuClick(event: Event) {
        this.userMenu.toggle(event); // ✅ Gọi đúng hàm toggle của PrimeNG Menu
    }

    logout() {
        // Xóa token hoặc session
        localStorage.clear();
        // Chuyển hướng đến trang login
        this.router.navigate(['/auth/login']);
    }
}
