import React, { useEffect, useState } from 'react'
import Loader2 from '../components/Loader2'

function CvPage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return (
    <>
      {loading ?
        <Loader2 />
        : (
          <div>Cv Page</div>
        )}
    </>
  )
}

export default CvPage