import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //rota para a página inicial
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },

  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'contacs',
    loadChildren: () => import('./pages/contacs/contacs.module').then( m => m.ContacsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
