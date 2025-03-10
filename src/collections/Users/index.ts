import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { admin } from '@/access/admin'
import { anyone } from '@/access/anyone'
import { checkRole } from '@/access/checkRole'
// import { loginAfterCreate } from './hooks/loginAfterCreate'
// import { protectRoles } from './hooks/protectRoles'
import { authenticated } from '@/access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 28800, // 28800 secs = 8 hours
    verify: false, // Require email verification before being allowed to authenticate
    maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins. Set to 0 to disable.
    lockTime: 600 * 1000, // Time period to allow the max login attempts. time (in milliseconds)
    loginWithUsername: {
      allowEmailLogin: true, // default: false. If set to true, users can log in with either their username or email address. If set to false, users can only log in with their username.
      requireEmail: true, // default: false. If set to true, an email address is required when creating a new user. If set to false, email is not required upon creation
    },
    cookies: {
      sameSite: 'None',
      secure: true,
      domain: process.env.COOKIE_DOMAIN,
    },
  },
  access: {
    read: authenticated, // only admin and above can read users collection
    create: admin, // any except user in superadmin role
    update: admin, // everyone can update self row, admins can update any user except superadmin, superadmin can update any user
    delete: superAdmin, // admin can delete all except superadmin, superadmin can delete any user
    admin: ({ req: { user } }) => checkRole(['superadmin','admin'], user),
  },
  admin: {
    defaultColumns: ['username', 'email', 'roles', 'createdAt'],
    useAsTitle: 'email',
  },
  defaultSort: "-createdAt",
  // hooks: {
  //   afterChange: [loginAfterCreate],
  // },
  timestamps: true,
  fields: [
    {
      name: 'blocked',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      // hooks: {
      //   beforeChange: [protectRoles], // apply above update access rules here
      // },
      options: [
        {
          label: 'Super Admin',
          value: 'superadmin',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Developer',
          value: 'developer',
        },
        {
          label: 'Writer',
          value: 'writer',
        },
        {
          label: 'Event Manager',
          value: 'eventmgr',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
    },
    {
      name: 'photo',
      label: 'User Photo',
      type: 'upload',
      relationTo: 'media',
    }
  ],
}
