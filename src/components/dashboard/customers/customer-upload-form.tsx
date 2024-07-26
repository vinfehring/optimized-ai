"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const formSchema = z.object({
  csvFile: z.instanceof(File)
  .refine((file) => file.type === 'text/csv', {
    message: 'File must be a CSV',
  })
  .refine((file) => file.size <= 5000000, {
    message: 'File size must be less than 5MB',
  }),
});

export function CustomerUploadForm() {
  const { user } = useUser();
  console.log("Customer CSV Form User ID: ", user?.id);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUploading(true);
    
    const formData = new FormData();
    formData.append('file', values.csvFile);
    formData.append('userId', user?.id || '');
  
    try {
      const response = await fetch('/api/upload-csv', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
  
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error uploading CSV:', error);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="csvFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload CSV</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".csv"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload CSV'}
        </Button>

        <div className="mt-4">
          <Link href="/ExampleContactUpload.csv" download className="text-blue-600 hover:underline">
            Download Sample CSV File
          </Link>
        </div>
      </form>
    </Form>
  );
}