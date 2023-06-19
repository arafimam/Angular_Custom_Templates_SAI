import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeStructureComponent } from './tree-structure/tree-structure.component';
import { FolderComponent } from './folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeStructureComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
