import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntryListComponent} from '@/app/pages/entries/entry-list';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule {
}
