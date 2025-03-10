import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

export default function HeroNavigation({title}:any) {
  return (
      <div> 
        <Breadcrumb className="pl-1">
            <BreadcrumbList className='font-semibold text-lg text-background max-md:text-sm'>
            <BreadcrumbItem>
                <BreadcrumbLink href="/" className='hover:underline hover:text-primary-200 '>All Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/" className='hover:underline hover:text-primary-200'>Short Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            </BreadcrumbList>
        </Breadcrumb>
        <h1 className='font-semibold text-background text-lg max-md:text-sm'>{title} with NexusBerry training and solutions</h1>
      </div>
  )
}
