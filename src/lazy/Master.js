import React, { Suspense } from 'react'
const Slave = React.lazy(
  () => import('./Slave')
)

export default function Master() {
  return (
    <div>
      Master!
      <Suspense fallback={<div>Loading2 ...</div>} >
        <Slave />
      </Suspense>
    </div>
  )
}
