import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { TreeFolder, TreeFolderConfig } from 'src/TreeDataStructure/TreeDs';


@Component({
  selector: 'sai-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.css']
})
export class TreeStructureComponent {
  @Input() treeListFolderStructure: string = '';
  @Input() folderIcon: string = "folder";
  @Input() showPathOfSelectedFolder: boolean = true; // true by default
  @Input() preSelectedFolderId: number = -1; // -1 by default.
  @Input() selectedIconColor = "red" // red by default
  @Input() unselectedIconColor = "black" // black by default
  @Output() selectedIdOfFolder: EventEmitter<number> = new EventEmitter<number>();

  selectedFolderId: number = -1;
  folderStructure: TreeFolder[] = [];
  pathOfSelectedFolder = ".";

  ngOnChanges(changes: SimpleChanges) {
    if (changes['treeListFolderStructure']) {
      this.folderStructure = this.convertJsonToTreeFolder(this.treeListFolderStructure);
      console.log(this.folderStructure);
    }
    if (changes['preSelectedFolderId']){
      // change the status of that folder to true. Remember Pre selected folder Id only works with parent ids, so we do not need to iterate over children nodes.
      this.selectedFolderId = this.preSelectedFolderId;
      for(var i=0;i<this.folderStructure.length;i++){
        if(this.folderStructure[i]._id == this.selectedFolderId){
          this.folderStructure[i]._isSelected = true;
        }
      }
    }
    
  }
  
  handleSelectedFolder(id: number){
    this.selectedIdOfFolder.emit(id);
    var treeListConfig = new TreeFolderConfig(this.folderStructure);
    this.pathOfSelectedFolder = treeListConfig.getFullPathById(id);
    treeListConfig.selectFolder(id);
    this.selectedFolderId = id;
  }

  convertJsonToTreeFolder(json: string): TreeFolder[] {
    const data: any[] = JSON.parse(json);
    const convertItem = (item: any): TreeFolder => {
      return {
        _id: item._id,
        name: item.name,
        _isSelected: false, // by default set all to false. NgOnChanges will take care of the rest.
        children: this.convertJsonToTreeFolder(JSON.stringify(item.children || [])),
      };
    };
    return data.map(convertItem);
  }
}
