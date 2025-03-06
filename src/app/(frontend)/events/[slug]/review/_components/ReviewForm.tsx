'use client'

import { Star } from 'lucide-react'
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
import { Button } from '@payloadcms/ui'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
// import { toast } from '@/hooks/use-toast'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from '@/hooks/use-toast'
import { queryExistingMumber, createFeedbacks } from './actions'
import { EventRegistration, Event as PayloadEvent } from '@/payload-types'

// import CreateEventRegistration from './ServerActions'

const ReviewForm = ({ eventSlug }: { eventSlug: string }) => {
  const router = useRouter()

  const FormSchema = z
    .object({
      phoneNumber: z.string().optional(),
      rating: z.number().min(1).max(5, { message: 'select the stars' }),
      reason: z.enum(
        [
          `topic-interest`,
          `mentor-preference`,
          `mentorship-program-interest`,
          `field-specific-interest`,
          `others`,
        ],
        {
          message: 'select the topics',
        },
      ),
      otherReason: z.string().optional(),
      mentorship: z.enum(['yes', 'no'], { message: 'select yes or no' }),
    })
    .refine(
      (data) => {
        // Only require otherReason when reason is others
        if (data.reason === 'others') {
          return !!data.otherReason && data.otherReason.length > 0
        }
        return true
      },
      {
        message: 'Please specify your reason',
        path: ['otherReason'],
      },
    )

  const [isNumberExist, setIsNumberExist] = useState(0)
  const [user, setUser] = useState<EventRegistration | null | undefined>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePhoneExisting = async () => {
    try {
      setIsLoading(true)
      const { success, result } = await queryExistingMumber(isNumberExist, eventSlug)
      if (success) {
        setUser(result)
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Registration Failed',
        description: error,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    shouldFocusError: false,
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: '',
      rating: 0,
      reason: undefined,
      mentorship: undefined,
      otherReason: '',
    },
  })
  const selectedReason = form.watch('reason')

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!user) {
      return true
    }
    const uploadFeedback = {
      registration: user.id,
      rating: data.rating,
      event: Array.isArray(user.event) ? (user.event[0] as PayloadEvent)?.id : (user.event as PayloadEvent)?.id,
      reason: data.reason,
      otherReason: data.otherReason,
      mentorship: data.mentorship,
    }
    try {
      const { success, error, message } = await createFeedbacks(uploadFeedback, eventSlug)

      if (success) {
        toast({
          variant: 'default',
          title: 'Registered Successfully',
          description: message,
        })
        router.push(`/events/${eventSlug}/certificate`)
      } else {
        toast({
          variant: 'destructive',
          title: 'Registration Failed',
          description: error,
        })
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something Went Wrong',
        description: error instanceof Error ? error.message : 'unknown error occurred',
      })
    }
  }

  return (    <div className="md:w-[50%] shadow-xl shadow-foreground w-[94%] text-lg bg-card mx-auto py-4 px-6 mt-4 mb-6 rounded-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <div className="focus-within:ring-2 focus-within:border-primary-400 rounded-lg ">
                    <PhoneInput
                      {...field}
                      country="pk"
                      countryCodeEditable={false}
                      enableSearch
                      value={field.value}
                      onChange={(phone) => {
                        field.onChange(phone)
                        setIsNumberExist(parseInt(phone))
                      }}
                      onBlur={handlePhoneExisting}
                      inputStyle={{
                        width: '100%',
                        height: '50px',
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isLoading ? <p>Getting user detail...</p> : null}

          {user === null ? null : user ? (
            <div className="text-green-600">{`Hi ${user.name}, Please enter your valuable review to download your certificate`}</div>
          ) : (
            <div className="flex flex-col">
              <span className="text-red-500">Sorry, you are not registered for this event.</span>
              <span>
                plese{' '}
                <Link
                  href={`/events/${eventSlug}`}
                  className="text-primary-400"
                  aria-label={'go to the event page'}
                >
                  click here
                </Link>{' '}
                to register
              </span>
            </div>
          )}

          <div className={`${user === null ? 'block' : user ? 'block' : 'hidden'}`}>
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate the session</FormLabel>
                  <FormControl>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-8 h-8 cursor-pointer ${
                            field.value >= star
                              ? 'fill-yellow-400 stroke-yellow-400'
                              : 'text-gray-300'
                          }`}
                          onClick={() => field.onChange(star)}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium ">
                Why did you choose to attend this session with NexusBerry?
              </label>
              <p className="text-sm text-gray-500 pb-2">
                This will help us design our online sessions better. Select all that are relevant.
              </p>

              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        className="space-y-2 text-lg"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="topic-interest" id="topic-interest" />
                          <Label htmlFor="">The topic seemed interesting.</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mentor-preference" id="mentor-preference" />
                          <Label htmlFor="">The mentor was someone I wanted to learn from.</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="mentorship-program-interest"
                            id="mentorship-program-interest"
                          />
                          <Label htmlFor="">
                            I&#39;m interested in NexusBerry Mentorship program and want to know
                            more.
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={`field-specific-interest`} id="option-four" />
                          <Label htmlFor="">{`I am interested in this field.`}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="others" id="others" />
                          {/* <div className='flex'> */}
                          <Label htmlFor="">Other:</Label>
                          <div className="border-b-2 w-full ">
                            <FormField
                              control={form.control}
                              name="otherReason"
                              render={({ field }) => (
                                <div className="border-b-2 w-full">
                                  <Input
                                    type="text"
                                    required
                                    {...field}
                                    disabled={selectedReason !== 'others'}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-inherit focus-visible:ring-0 border-none hover:border-none bg-inherit"
                                  />
                                </div>
                              )}
                            />
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="mentorship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Would you like to be mentored by industry experts?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={`w-[50%] mx-auto ${user === null ? 'block' : user ? 'block' : 'hidden'}`}>
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="bg-primary flex justify-center hover:bg-primary-400 text-background w-full text-xl max-sm:text-base max-sm:py-3 py-2 rounded-xl"
            >
              {!form.formState.isSubmitting ? (
                'Submit Reviw'
              ) : (
                <svg
                  className="animate-spin mr-3 border-2 border-r-green-500 border-indigo-100 h-6 w-6 rounded-full"
                  viewBox="0 0 12 12"
                ></svg>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ReviewForm
