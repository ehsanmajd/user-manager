import React from 'react'
import TreeItem from './TreeItem'
import TreeView from './TreeView'
import Tree from './Tree'

const DATA = [
  {
    id: '1',
    name: 'Applications',
    children: [
      {
        id: '2',
        name: 'Calendar'
      },
      {
        id: '3',
        name: 'Chrome'
      },
      {
        id: '4',
        name: 'Webstorm'
      }
    ]
  },
  {
    id: '5',
    name: 'Documents',
    children: [
      {
        id: '6',
        name: 'OSS'
      },
      {
        id: '7',
        name: 'Material-UI',
        children: [
          {
            id: '8',
            name: 'src',
            children: [
              {
                id: '9',
                name: 'index.js'
              },
              {
                id: '10',
                name: 'tree-view.js'
              }
            ]
          }
        ]
      }
    ]
  }
]

export default function App() {
  return <Tree data={DATA} onClick={(id) => console.log(id)} />
  // return (
  //   <TreeView>
  //     <TreeItem nodeId="1" label='Applications'>
  //       <TreeItem nodeId="2" label="Calendar" onClick={() => console.log('clicked')} />
  //       <TreeItem nodeId="3" label="Chrome" />
  //       <TreeItem nodeId="4" label="Webstorm" />
  //     </TreeItem>
  //     <TreeItem nodeId="5" label="Documents">
  //       <TreeItem nodeId="10" label="OSS" />
  //       <TreeItem nodeId="6" label="Material-UI">
  //         <TreeItem nodeId="7" label="src">
  //           <TreeItem nodeId="8" label="index.js" />
  //           <TreeItem nodeId="9" label="tree-view.js" />
  //         </TreeItem>
  //       </TreeItem>
  //     </TreeItem>
  //   </TreeView>
  // )
}
