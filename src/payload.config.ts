import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

// components
// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { cloudinaryAdapter } from './cloudinary-adapter'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    avatar: {
      Component: 'src/components/payload-custom/avatar',
    },
    meta: {
      title: 'Kuron Project',
      titleSuffix: '– Centralized CMS & Data Hub',
      description:
        'Kuron Project is a centralized CMS and data hub that manages content, source code, and website data with seamless REST API integration.',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          url: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          url: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          url: '/favicon-96x96.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: 'src/components/payload-custom/logo',
        Icon: 'src/components/payload-custom/icon',
      },
    },
  },

  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    idType: 'uuid',
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: cloudinaryAdapter,
        },
      },
    }),
  ],
})
