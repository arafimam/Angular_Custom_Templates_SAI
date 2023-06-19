import { Component } from '@angular/core';
import { TreeFolder, TreeFolderConfig } from 'src/TreeDataStructure/TreeDs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  jsonString: string = `[
    {
      "_id": 5,
      "name": "Parent1",
      "children": [
        {
          "_id": 3,
          "name": "child1",
          "children": [
            {
              "_id": 1,
              "name": "G-child1",
              "children": []
            },
            {
              "_id": 2,
              "name": "G-child2",
              "children": []
            }
          ]
        },
        {
          "_id": 4,
          "name": "child2",
          "children": [
            {
              "_id": 6,
              "name": "G-child3",
              "children": []
            },
            {
              "_id": 7,
              "name": "G-child4",
              "children": [
                {
                  "_id": 8,
                  "name": "GG-child1",
                  "children": []
                },
                {
                  "_id": 9,
                  "name": "GG-child2",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_id": 10,
      "name": "Parent1_2",
      "children": [
        {
          "_id": 8,
          "name": "child1_2",
          "children": [
            {
              "_id": 6,
              "name": "G-child1_2",
              "children": []
            },
            {
              "_id": 7,
              "name": "G-child2_2",
              "children": []
            }
          ]
        },
        {
          "_id": 9,
          "name": "child2_2",
          "children": [
            {
              "_id": 11,
              "name": "G-child3_2",
              "children": []
            },
            {
              "_id": 12,
              "name": "G-child4_2",
              "children": [
                {
                  "_id": 13,
                  "name": "GG-child1_2",
                  "children": []
                },
                {
                  "_id": 14,
                  "name": "GG-child2_2",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    
    {
      "_id": 110,
      "name": "Parent2",
      "children": [
        {
          "_id": 120,
          "name": "child1_3",
          "children": [
            {
              "_id": 150,
              "name": "G-child1_3",
              "children": []
            },
            {
              "_id": 160,
              "name": "G-child2_3",
              "children": []
            }
          ]
        },
        {
          "_id": 130,
          "name": "child2_3",
          "children": [
            {
              "_id": 170,
              "name": "G-child3_3",
              "children": []
            },
            {
              "_id": 180,
              "name": "G-child4_3",
              "children": [
                {
                  "_id": 190,
                  "name": "GG-child1_3",
                  "children": []
                },
                {
                  "_id": 200,
                  "name": "GG-child2_3",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_id": 138,
      "name": "Parent3",
      "children": [
        {
          "_id": 129,
          "name": "child1_4",
          "children": [
            {
              "_id": 221,
              "name": "G-child1_4",
              "children": []
            },
            {
              "_id": 212,
              "name": "G-child2_4",
              "children": []
            }
          ]
        },
        {
          "_id": 240,
          "name": "child2_4",
          "children": [
            {
              "_id": 623,
              "name": "G-child3_4",
              "children": []
            },
            {
              "_id": 274,
              "name": "G-child4_4",
              "children": [
                {
                  "_id": 225,
                  "name": "GG-child1_4",
                  "children": []
                },
                {
                  "_id": 216,
                  "name": "GG-child2_4",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]`;
  

  getId(id: number){
    console.log(id);
  }
}