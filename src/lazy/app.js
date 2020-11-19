import React, {Suspense} from 'react'
import Master from './Master'

// const Master = React.lazy(() => import('./Master'))

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>} >
        <Master />
      </Suspense>
    </div>
  )
}
