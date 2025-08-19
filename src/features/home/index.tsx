import React from 'react'

import Link from 'next/link'
import { BasePayload } from 'payload'

import { Button } from '@/components/ui/button'
import { User } from '@/payload-types'

type HomeProps = {
  user?: User | null
  payload: BasePayload
  fileURL: string
}
export const Home: React.FC<HomeProps> = ({ user, payload, fileURL }) => {
  return (
    <main>
      {
        <Link href={payload.config.routes.admin} className="w-fit">
          <Button variant="outline">My Admin</Button>
        </Link>
      }
    </main>
  )
}
