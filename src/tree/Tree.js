import React from 'react'
import TreeView from './TreeView'
import TreeItem from './TreeItem'

export default function Tree({ data, onClick }) {

  const renderNodes = (items, level) =>
    items.map(item => (
      <TreeItem
        onClick={() => onClick(item.id)}
        key={item.id}
        label={item.name}
        level={level}
        children={item.children &&
          renderNodes(item.children, level + 1)}
      />
    )
  )


  return (
    <TreeView>
      {renderNodes(data, 0)}
    </TreeView>
  )
}
