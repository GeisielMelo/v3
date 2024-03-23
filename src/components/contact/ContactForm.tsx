import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Textarea } from '../ui/textarea'
import { useState } from 'react'
import { z } from 'zod'
import { CheckIcon, PaperPlaneIcon, UpdateIcon } from '@radix-ui/react-icons'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Please enter your name with at least two characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Your message should be at least 10 characters long.',
  }),
})

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values)
      setSuccess(true)
    } catch (error) {
      setError('Something went wrong. Please try again later.')
      setTimeout(() => {
        setError(null)
      }, 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-xl'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className='dark:border-slate-800'
                  placeholder='Your name or company name'
                  type='text'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className='dark:border-slate-800' placeholder='Your best email' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea className='dark:border-slate-800' rows={4} placeholder='Your message' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <FormMessage>{error}</FormMessage>}
        <Button disabled={loading || success} type='submit' className='font-Lexend'>
          {success ? <CheckIcon /> : loading ? <UpdateIcon className='animate-spin' /> : <PaperPlaneIcon />}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
