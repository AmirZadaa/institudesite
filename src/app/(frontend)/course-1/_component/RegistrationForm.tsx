'use client'
import React from 'react'
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormField,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { countries } from '@/app/(frontend)/_constants/data'
import { Button } from '@payloadcms/ui'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/hooks/use-toast'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'


const FormSchema = z.object({
    firstname: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    country: z.string().optional(),
    announcements: z.boolean().default(false).optional(),
})


const RegistrationForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            country: "",
            announcements: true,
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-foreground p-4">
                    <code className="text-background">{JSON.stringify(data, null, 2)}</code>
                </pre>
            )
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 pb-6 pl-6 max-sm:pl-0 w-full">
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className='text-lg max-sm:text-base'>First name*</FormLabel>
                            <FormControl className='text-muted-foreground h-16 max-sm:h-12 text-lg'>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg max-sm:text-base'>Last Name*</FormLabel>
                            <FormControl className='text-muted-foreground h-16 max-sm:h-12 text-lg'>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg max-sm:text-base'>Email*</FormLabel>
                            <FormControl className='text-muted-foreground h-16 max-sm:h-12 text-lg'>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg max-sm:text-base'>Where do you live?*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl className='text-muted-foreground h-16 max-sm:h-12 text-lg'>
                                    <SelectTrigger aria-label="Select your country">
                                        <SelectValue placeholder="Please Select" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {countries.map((country) => (
                                        <SelectItem key={country} value={country}>
                                            {country}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="announcements"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                            <FormControl className='size-6 bg-background mt-1' >
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    id="announcements"
                                     aria-label="Subscribe to announcements"
                                />
                            </FormControl>
                            <FormLabel className='text-lg max-sm:text-base'>
                                I want to get the latest news, courses, and workshops and events announcements*
                            </FormLabel>
                        </FormItem>
                    )}
                />
                <Button type="submit" className='bg-secondary hover:bg-secondary-400 text-background w-full text-xl max-sm:text-base max-sm:py-3 py-5 rounded-xl'>Subscribe</Button>
            </form>
        </Form>
    )
}

export default RegistrationForm
