import Link from "next/link";

export default function Page() {
  return (
    <article className="pt-16 pb-24">
      <ul className='ml-5 *:font-bold *:list-disc'>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/course-1'>course-1 by hafeez</Link></li>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/course-2'>course-2 by hafeez</Link></li>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/course-2/course2-module'>course2-module by hafeez</Link></li>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/enroll-now'>enroll-now by hafeez</Link></li>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/contact-us'>contact-us by hafeez</Link></li>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/home-page'>home-page by hafeez</Link></li>
        <hr />
        <li className='hover:text-secondary active:text-primary-600'><Link href='/course-3'>course 3 by anas</Link></li>
        <hr />
        <li className='hover:text-secondary active:text-primary-600'><Link href='/courses'>courses by amir</Link></li>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/events'>events by amir</Link></li>
        <li className='hover:text-secondary active:text-primary-600'><Link href='/test'>footer&TopCourses by amir</Link></li>
      </ul>

      <p>
        {'Visit the '}
        <br /><Link href="/login">login page</Link><br />
        {' to start the authentication flow. Once logged in, you will be redirected to the '}
        <br /><Link href="/account">account page</Link><br />
        {` which is restricted to users only. To manage all users, `}
        <br /><Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/users`}>
          login to the admin dashboard
        </Link><br />
        .
      </p>
    </article>
  )
}