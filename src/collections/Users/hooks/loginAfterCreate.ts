// import type { AfterChangeHook } from 'payload/dist/collections/config/types'

// export const loginAfterCreate: AfterChangeHook = async ({
//   originalDoc,
//   operation,
//   req,
//   req: { body = {}, payload, res },
// }) => {
//   if (operation === 'create') {
//     const { email, password } = body

//     if (email && password) {
//       const { token, user } = await payload.login({
//         collection: 'users',
//         data: { email, password },
//         req,
//         res,
//       })

//       return {
//         ...originalDoc,
//         token,
//         user,
//       }
//     }
//   }

//   return originalDoc
// }
