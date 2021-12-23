import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexBlogComponent } from './components/index-blog/index-blog.component';
import { PageBlogDetailComponent } from './components/page-blog-detail/page-blog-detail.component';
import { PageBlogGridComponent } from './components/page-blog-grid/page-blog-grid.component';

const routes: Routes = [
	{
		path: '',
		component: IndexBlogComponent
	},
	{
		path: 'page-blog-detail',
		component: PageBlogDetailComponent
	},
	{
		path: 'page-blog-grid',
		component: PageBlogGridComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
