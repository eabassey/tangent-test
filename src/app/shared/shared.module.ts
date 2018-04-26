import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, UserMenuComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule {}
