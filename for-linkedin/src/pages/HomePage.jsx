import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'

function HomePage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  return (
    <>
      {loading ?
        <Loader />
        : (
          <div>HomePage</div>
        )}
    </>

  )
}

export default HomePage