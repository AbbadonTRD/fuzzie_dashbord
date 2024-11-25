import React from 'react'
import Sidebar from '@/components/fuzzie/sidebar'
import InfoBar from '@/components/fuzzie/infobar'
import '../fuzzie.css'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
