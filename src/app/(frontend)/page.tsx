import { generateMetadata } from './[slug]/page'
import HeroSection from "./_components/HeroSection"
import TopDepartments from './_components/TopDepartments'
import Events from './_components/Events'
import { GenerateEmailBody } from '@/email/index'

export default function Page() {
  return (
    <>
      <HeroSection />
      <TopDepartments />
      <Events/>
      {/* <GenerateEmailBody object={{}} /> */}
    </>
  )
}

export { generateMetadata }