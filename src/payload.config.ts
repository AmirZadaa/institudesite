// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
// import { NexusBerryLogo } from '../public/placeHolders/NexusBerry_favi.jpg'

import collections from '@/collections'
import { Users } from '@/collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    // avatar:{
    //   collection: Users.slug,
    //   // image: Users.user-photo.url,
    //   size: 'md',
    // },
    meta: {
      description: 'This is a custom Hello description',
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/favicon.svg',
        },
      ],
      openGraph: {
        description: 'This is a custom OG description',
        images: [
          {
            height: 600,
            url: '/website-template-OG.webp',
            width: 800,
          },
        ],
        title: 'This is a custom OG title',
      },
      titleSuffix: '- Nexusberry',
    },
    components: {
      graphics: {
        Icon: '@/graphics/Icon/index.tsx#Icon',
        Logo: '@/graphics/Logo/index.tsx#Logo',
      },
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections,
  cors: [getServerSideURL()].filter(Boolean),
  csrf: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
  secret: process.env.PAYLOAD_SECRET!,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  email: nodemailerAdapter({
    defaultFromAddress: process.env.DEFAULT_EMAIL_ADDRESS!,
    defaultFromName: process.env.DEFAULT_EMAIL_NAME!,
    transportOptions: {
      host: process.env.SMTP_HOST!,
      port: process.env.SMTP_PORT!,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    },
  }),
  
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })
    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          username: 'rajmal',
          email: 'rana.ajmal@gmail.com',
          password: '12345678',
          roles: ["superadmin", "admin"],
        },
      })
    }
  },
})
