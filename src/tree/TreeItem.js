import React, { useState } from 'react'
import TreeView from './TreeView';

export default function TreeItem({ label, children, onClick, level }) {
  const [expanded, setExpanded] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    setExpanded(!expanded)
  }

  console.log(level);

  return (
    <div onClick={onClick} style={{ paddingLeft: (level * 20) + 'px' }}>
      {children && <button
        onClick={handleClick}>
        {expanded ? '-' : '+'}
      </button>}
      {label}
      {children && expanded && <TreeView>{children}</TreeView>}
    </div>
  )
}
