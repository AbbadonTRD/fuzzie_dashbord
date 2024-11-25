// // import { GetMediaFiles } from '@/lib/types'
// import React from 'react'
// import MediaUploadButton from './upload-buttons'
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from '../ui/command'
// import MediaCard from './media-card'
// import { FolderSearch } from 'lucide-react'

// type Props = {
//   data: GetMediaFiles
//   subaccountId: string
// }

// const MediaComponent = ({ data, subaccountId }: Props) => {
//   return (
//     <div className="flex flex-col gap-4 h-full w-full">
//       <div className="flex justify-between items-center">
//         <h1 className="text-4xl">Media Bucket</h1>
//         <MediaUploadButton subaccountId={subaccountId} />
//       </div>
//       <Command className="bg-transparent">
//         <CommandInput placeholder="Search for file name..." />
//         <CommandList className="pb-40 max-h-full ">
//           <CommandEmpty>No Media Files</CommandEmpty>
//           <CommandGroup heading="Media Files">
//             <div className="flex flex-wrap gap-4 pt-4">
//               {data?.Media.map((file) => (
//                 <CommandItem
//                   key={file.id}
//                   className="p-0 max-w-[300px] w-full rounded-lg !bg-transparent !font-medium !text-white"
//                 >
//                   <MediaCard file={file} />
//                 </CommandItem>
//               ))}
//               {!data?.Media.length && (
//                 <div className="flex items-center justify-center w-full flex-col">
//                   <FolderSearch
//                     size={200}
//                     className="dark:text-muted text-slate-300"
//                   />
//                   <p className="text-muted-foreground ">
//                     Empty! no files to show.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </CommandGroup>
//         </CommandList>
//       </Command>
//     </div>
//   )
// }

// export default MediaComponent




// import { GetMediaFiles } from '@/lib/types'
import React from 'react'
import MediaUploadButton from './upload-buttons'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import MediaCard from './media-card'
import { FolderSearch } from 'lucide-react'

// Define a type for the dummy data structure
type MediaFile = {
  id: string
  title: string
  url: string
  description: string
}

// Use this type for your data prop
type Props = {
  data: { Media: MediaFile[] } // Adjusting the type based on your expected structure
  subaccountId: string
}

// Dummy media data for demonstration
const dummyMediaData = {
  Media: [
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
  ],
}

const MediaComponent = ({ data, subaccountId }: Props) => {
  // Use dummy data if data is undefined or does not have a Media property
  const mediaFiles = data?.Media ?? dummyMediaData.Media; 

  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">Media Bucket</h1>
        <MediaUploadButton subaccountId={subaccountId} />
      </div>
      <Command className="bg-transparent">
        <CommandInput placeholder="Search for file name..." />
        <CommandList className="pb-40 max-h-full ">
          <CommandEmpty>No Media Files</CommandEmpty>
          <CommandGroup heading="Media Files">
            <div className="flex flex-wrap gap-4 pt-4">
              {mediaFiles.length > 0 ? (
                mediaFiles.map((file) => (
                  <CommandItem
                    key={file.id}
                    className="p-0 max-w-[300px] w-full rounded-lg !bg-transparent !font-medium !text-white"
                  >
                    <MediaCard file={file} />
                  </CommandItem>
                ))
              ) : (
                <div className="flex items-center justify-center w-full flex-col">
                  <FolderSearch
                    size={200}
                    className="dark:text-muted text-slate-300"
                  />
                  <p className="text-muted-foreground ">
                    Empty! No files to show.
                  </p>
                </div>
              )}
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}

export default MediaComponent

