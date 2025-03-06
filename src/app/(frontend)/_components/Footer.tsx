import React from 'react'
import Image from 'next/image'
import SocialLinks from './SocialLinks'
import FooterResources from './FooterResources'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import { placeholderImg } from '@/app/(frontend)/_assets/images'


const getFooter =  unstable_cache(async ()=>{
  const payload = await getPayload({config})
  const footer = await payload.findGlobal({
    slug: "footer",
    depth:1,
    select:{
      navItems:false,
    }
  })
  return footer ;
},['footer'],{tags:["footer"]})


export default async function Footer() {
  try {
    const footerContent: any = await getFooter()
    if (!Object.keys(footerContent).length) {
      return (
        <div className="text-2xl text-center font-bold py-6 text-red-500">
          footer content not set yet
        </div>
      )
    }

  return (
    <footer className="bg-primary  py-10 text-background lg:px-10 px-4 ">
      <div className="container mx-auto lg:space-y-8 space-y-4">
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 sm:py-10 max-xs:px-4  gap-10 ">
          <div className="space-y-6  max-lg:col-span-3 max-md:col-span-2 max-xs:col-span-1">
            <div className="w-56 aspect-[4/1] relative">
              <Image
                src={footerContent?.logo?.url || placeholderImg}
                alt={footerContent?.logo?.alt || 'logo not found'}
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
            <p className="lg:text-sm  leading-7 font-semibold">
              {footerContent.companyDescription || 'Company Description will display soon'}
            </p>
            {footerContent.socialLinks.length == 0 ? (
              <div>Please! add social links</div>
            ) : (
              <SocialLinks socialLinks={footerContent.socialLinks} />
            )}
          </div>
          {footerContent?.footerCols?.length == 0 ? (
            <div className="text-center font-bold col-span-2  text-red-500">No footer Links were detected.</div>
          ) : (
            footerContent.footerCols?.map((col, index) => (
              <div className="lg:space-y-6 space-y-4" key={index}>
                <h1 className="font-semibold">{col.colTitle}</h1>
                <ul className="lg:space-y-2 space-y-2 ">
                  {!col.rows?.length
                    ? 'links not fount'
                    : col.rows?.map((row, ind) => (
                        <li
                          key={ind}
                          className="lg:text-sm  w-fit group text-background leading-6 "
                        >
                          <Link href={row.href || '#'} aria-label={`go to ${row.rowTitle}`}>
                            {row.rowTitle}
                          </Link>
                          <div className="h-[2px] w-0 group-hover:w-full bg-secondary-500 duration-500"></div>
                        </li>
                      ))}
                </ul>
              </div>
            ))
          )}
        </div>
        <hr />
        <FooterResources/>
        <div>
          <p className="text-center text-[12px] lg:text-sm  leading-4">
            © Copyright 2025, All Rights Reserved By NexuBerry Training and Solutions
          </p>
        </div>
      </div>
    </footer>
  )
} catch (error) {
  return <div className='font-bold text-2xl text-red-500 text-center'>{error.message}</div>
}

}
