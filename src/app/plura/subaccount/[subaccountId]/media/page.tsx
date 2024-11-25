// import BlurPage from '@/components/plura/global/blur-page'
// import MediaComponent from '@/components/plura/media'
// // import { getMedia } from '@/lib/queries'
// import React from 'react'

// type Props = {
//   params: { subaccountId: string }
// }

// const MediaPage = async ({ params }: Props) => {
//   const data = await getMedia(params.subaccountId)

//   return (
//     <BlurPage>
//       <MediaComponent
//         data={data}
//         subaccountId={params.subaccountId}
//       />
//     </BlurPage>
//   )
// }

// export default MediaPage



import BlurPage from '@/components/plura/global/blur-page'
import MediaComponent from '@/components/plura/media'
import React from 'react'

type Props = {
  params: { subaccountId: string }
}

// Dummy media data for demonstration
const dummyMediaData = [
  {
    id: 'media1',
    title: 'Sample Image 1',
    url: '/media/sample-image-1.jpg',
    description: 'This is a sample image description 1',
  },
  {
    id: 'media2',
    title: 'Sample Video 1',
    url: '/media/sample-video-1.mp4',
    description: 'This is a sample video description 1',
  },
  {
    id: 'media3',
    title: 'Sample Image 2',
    url: '/media/sample-image-2.jpg',
    description: 'This is a sample image description 2',
  },
  {
    id: 'media4',
    title: 'Sample Video 2',
    url: '/media/sample-video-2.mp4',
    description: 'This is a sample video description 2',
  },
]

const MediaPage = async ({ params }: Props) => {
  // Use dummy data instead of fetching from the database
  const data = dummyMediaData

  return (
    <BlurPage>
      <MediaComponent
        data={data}
        subaccountId={params.subaccountId}
      />
    </BlurPage>
  )
}

export default MediaPage
