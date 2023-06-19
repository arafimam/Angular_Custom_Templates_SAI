import { Component, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import { TreeFolder, TreeFolderConfig } from 'src/TreeDataStructure/TreeDs';


@Component({
  selector: 'sai-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {
  @Input() folderData: TreeFolder | undefined;
  @Input() preSelectedId: number = -1; // by default negative -1
  @Input() icon: string = "folder"; // by default set to home.
  @Input() selectedIconColor = "red" // red by default
  @Input() unselectedIconColor = "black" // black by default
  @Input() selectedId: number = -1; // -1 by default.
  @Output() selectedFolderId: EventEmitter<number> = new EventEmitter<number>();
  
  showSubFolder: boolean = false;
  selectedFolderColor: string = this.unselectedIconColor;
  isSelected: boolean = false;



  ngOnChanges(changes: SimpleChanges){
    if(changes['folderData']){
      
      //this.isSelected = this.folderData!._id === this.selectedId;
      //console.log("selected id is"+ this.selectedId)
      //console.log("folder data:"+ this.folderData?._id + this.folderData?.name)
    }
  }

  
  showChildFolders(): boolean{
    return this.showSubFolder || this.folderData!._id === this.preSelectedId;
  }

  // this function allows us to see the child folder when we click a folder, but there could be case where child folder are already visible.
  folderClicked(id: number){
    this.selectedFolderId.emit(id);
    
    if(!this.showSubFolder){
      this.showSubFolder = true; 
    }
    else{
      this.showSubFolder =false;
    }
  }

  emitFolderId(id: number){
    this.selectedFolderId.emit(id);
  }
}
