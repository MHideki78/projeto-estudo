import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModule, Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';

const routes: Route[] = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'diretivas',
    component: DiretivasComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'criacao-pipes',
    component: CriacaoPipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplosRoutingModule {}
