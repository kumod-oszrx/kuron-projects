import type { CollectionConfig } from 'payload'

import { User } from '@/payload-types'

type UserWithRole = User & {
  role?: string
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: ({ user }) => user?.role !== 'admin',
  },
  access: {
    admin: ({ req: { user } }) => user?.role === 'admin',
    create: ({ req: { user } }) => user?.role === 'admin',
    read: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  auth: true,

  fields: [
    { name: 'email', type: 'email', required: true, unique: true },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      defaultValue: ({ req: { user } }) => {
        if (!user) {
          return 'admin'
        }
        return ''
      },
      admin: {
        isClearable: true,
        isSortable: true,
        placeholder: 'Select a role',
      },
      filterOptions: ({ req: { user }, options, data }) => {
        if (!user) {
          return [{ label: 'Admin', value: 'admin' }]
        }
        if (user?.role === 'admin') {
          return [
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' },
          ]
        }
        return [{ label: 'User', value: 'user' }]
      },

      required: true,
      unique: true,
    },
    { name: 'otp', type: 'text', admin: { readOnly: true, hidden: true } },
    { name: 'otpExpires', type: 'date', admin: { readOnly: true, hidden: true } },
    {
      name: 'token',
      type: 'text',
      saveToJWT: true,
      defaultValue: ({ req: { user } }) => {
        if (!user) {
          return ''
        }
        return user.token || ''
      },
      admin: {
        readOnly: true,
        condition: ({ blockData, path, user }) => {
          return user === null
        },
      },
      unique: true,
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req, operation }) => {
        const usersCount = await req.payload.find({
          collection: 'users',
          limit: 1,
        })

        // Nếu chưa có user nào, ép luôn role = admin
        if (usersCount.totalDocs === 0 && data) {
          data.role = 'admin'
        }
        return data
      },
    ],
    afterRefresh: [
      async ({ token, req: { payload, user } }) => {
        if (user && user.id) {
          await payload.update({
            collection: 'users',
            id: user.id,
            data: {
              token,
            },
          })
        }
      },
    ],
    afterLogin: [
      async ({ token, req: { payload, user } }) => {
        if (user && user.id) {
          await payload.update({
            collection: 'users',
            id: user.id,
            data: {
              token,
            },
          })
        }
      },
    ],
  },
}
