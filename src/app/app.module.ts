import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FeatherModule } from 'angular-feather';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { allIcons } from 'angular-feather/icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexBlogComponent } from './components/index-blog/index-blog.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
	declarations: [ AppComponent, IndexBlogComponent, FooterComponent, SwitcherComponent, HeaderComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FeatherModule.pick(allIcons),
		ScrollToModule.forRoot(),
		CarouselModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
