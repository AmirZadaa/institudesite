import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const FAQs = ({ faqData }: any) => {
    // const faqData = [
    //     {
    //         id: 'item-1',
    //         question: 'What exactly I will learn in this course?',
    //         answer: 'This course covers A-to-Z of digital marketing. It starts from the very basic (website creation) and goes to the very advanced stuff where you will be learning about customer behaviours, A/B testing, running online ads, creating brand awareness and much more!'
    //     },
    //     {
    //         id: 'item-2',
    //         question: "What's the average starting salary?",
    //         answer: 'It depends on the company. However, if you are fresh candidate you can expect to get a package anywhere from 25,000 PKR to 70,000 PKR.'
    //     },
    //     {
    //         id: 'item-3',
    //         question: 'What happens if I miss any class?',
    //         answer: 'The beauty of our course is that your classes are conducted via instructor-led live online sessions. And every live session is recorded and uploaded in your learning portal the very next day by 12:00 pm.'
    //     },
    //     {
    //         id: 'item-4',
    //         question: 'Will I get any certificate on completion?',
    //         answer: 'Yes, you will get one certificate from Institute of Digital Marketing Pakistan. You will also get Google + Facebook certificates after passing their exams which we will help you with. These certificates are recognized all over Pakistan.'
    //     }
    // ]
    return (
        <div className='container max-md:text-center max-md:px-4'>
            <legend className='text-lg text-primary-400 font-semibold'>Quick Answers</legend>
            <h2 className='text-5xl font-bold mb-6 max-md:text-4xl max-sm:text-3xl'>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full ">
                {faqData.map((faq: any) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className='text-xl max-sm:text-lg'>{faq.question}</AccordionTrigger>
                        <AccordionContent className='text-base max-sm:text-sm'>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </div>
    )
}

export default FAQs
