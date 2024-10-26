'use client'

import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';

export const VideoPlayer = (data: { url: string }) => {

  const { url } = data
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  })

  return (
    <div style={{ width: '70vw', maxWidth: '960px' }}>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
        {isClient &&
          <ReactPlayer
            url={url}
            controls={true}
            width='100%'
            height='100%'
            style={{ position: 'absolute', inset: '0' }}
          />
        }
      </div>
    </div>
  )
}

export default VideoPlayer