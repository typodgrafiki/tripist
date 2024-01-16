import React from 'react'

export default function FormLabel({children}: {children: React.ReactNode}) {
  return (
        <p className="title font-medium mb-1 truncate">
            {children}
        </p>
  )
}
