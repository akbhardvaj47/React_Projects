import moment from 'moment'
import React from 'react'

function Time(time) {
    console.log(time)
    const videoTime=moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
    <span className='bottom-4 right-2 bg-black text-white absolute'>
        {videoTime}
    </span>
    
    </div>
  )
}

export default Time