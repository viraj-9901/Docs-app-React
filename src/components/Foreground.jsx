import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const data = [
        {
            decription: 'Movie watch list: Animal, sam bahadur',
            fileSize: '0.7mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'green'
            }
        },
        {
            decription: 'web-series watch list: delhi-sultan, bambay meri jaan',
            fileSize: '0.5mb',
            close: false,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'blue'
            }
        },
        {
            decription: 'anime watch list: Broly, hajino maro ippo',
            fileSize: '0.6mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'green'
            }
        }
    ]

    const ref = useRef(null)
  return (
    <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5'>
        {
            data.map((item,key) => (
                <Card data={item} reference = {ref} index={key}/>
            ))
        }
    </div>
  )
}

export default Foreground