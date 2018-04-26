import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MenuService } from './components/menu/menu.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserMenuComponent,
    MenuComponent
  ],
  imports: [CommonModule],
  providers: [MenuService],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule {}
