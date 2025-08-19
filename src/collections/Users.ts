import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    { name: 'email', type: 'email', required: true, unique: true },
    { name: 'otp', type: 'text', admin: { readOnly: true, hidden: true } },
    { name: 'otpExpires', type: 'date', admin: { readOnly: true, hidden: true } },
  ],
}
