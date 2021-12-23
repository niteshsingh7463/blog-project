import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexBlogComponent } from './components/index-blog/index-blog.component';

const routes: Routes = [
	{
		path: '',
		component: IndexBlogComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
