
/**
 * Each folder has a name
 * Each folder has children folder
 */
export interface TreeFolder{
    _id: number, // must be unique
    name: string,
    children: TreeFolder[]
    _isSelected?: boolean   
}

export class TreeFolderConfig{
    constructor(private treeFolderStructure: TreeFolder[]){}
    
    private path: string = "";
    private isPathFound: boolean = false;
    private isFolderFound: boolean = false;

    /**
     * Retrieves the full path of a folder.
     * @param id existing id of a folder
     * @returns full path as a string, for eg. /folder1/folder2/folder3
     */
    getFullPathById(id: number): string{
        for(var i = 0; i<this.treeFolderStructure.length; i++){
            
            if(!this.isPathFound){
                this.path = "";
                this.getPath(id, this.treeFolderStructure[i]);
            } 
        }
        return this.path;
    }

    selectFolder(idToSelect: number){
        for(var i=0; i<this.treeFolderStructure.length;i++){
            this.changeStatusOfFolderToTrueAndAllOtherToFalse(idToSelect, this.treeFolderStructure[i]);
        }
    }

    private changeStatusOfFolderToTrueAndAllOtherToFalse(id: number, currentTree: TreeFolder): void{
        if (currentTree === null){
            return;
        }
        else{
            if(currentTree._id === id){
                currentTree._isSelected = true;
            }
            else{
                currentTree._isSelected = false;
            }
            for(var i=0;i<currentTree.children.length;i++){
                this.changeStatusOfFolderToTrueAndAllOtherToFalse(id, currentTree.children[i]);
            }
        }
    }

    private getPath(targetNode: number, currentTree: TreeFolder): string {
        if (currentTree._id == targetNode){
            this.isPathFound = true;
            this.path += " / " + " " +currentTree.name;
            return this.path;
        }
        else{
            // if a node has no children, then we dont add path to it. Because we came to the end and still did not find it. 
            if (currentTree.children.length > 0){
                this.path += " / " + " " +currentTree.name;     
            }
            for (var i=0; i<currentTree.children.length;i++){
                this.getPath(targetNode, currentTree.children[i]);
            }
        }
        return this.path;
    }
}

