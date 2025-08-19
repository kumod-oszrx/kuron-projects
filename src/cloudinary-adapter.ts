import { v2 as cloudinary } from 'cloudinary'

import type {
  Adapter,
  GeneratedAdapter,
} from '@payloadcms/plugin-cloud-storage/types'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export const cloudinaryAdapter: Adapter = ({ collection }): GeneratedAdapter => {
  return {
    name: 'cloudinary',

    handleUpload: async ({ file }) => {
      await new Promise<void>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: collection.slug,
            public_id: file.filename, // ✅ đúng type
            resource_type: 'auto',
          },
          (error, result) => {
            if (error) return reject(error)
            if (!result) return reject(new Error('Upload failed'))
            resolve()
          },
        )
        uploadStream.end(file.buffer)
      })
    },

    handleDelete: async ({ filename }) => {
      await cloudinary.uploader.destroy(filename)
    },

    generateURL: ({ filename }) => {
      return cloudinary.url(filename, { secure: true })
    },

    fields: [
      {
        name: 'url',
        type: 'text',
      },
    ],

    staticHandler: async (req, { params }) => {
      const url = cloudinary.url(params.filename, { secure: true }) // ✅ lấy từ params
      return Response.redirect(url, 302)
    },
  }
}
