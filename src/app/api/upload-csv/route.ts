// src/app/api/upload-csv/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';
import path from 'path';
import { promises as fs } from 'fs';
import { supabase } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;
    const userId = data.get('userId') as string;
    console.log('User ID:', userId);

    if (!file) {
      return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file temporarily
    const tempDir = path.join(process.cwd(), 'tmp');
    await fs.mkdir(tempDir, { recursive: true });
    const tempFilePath = path.join(tempDir, file.name);
    await writeFile(tempFilePath, buffer);

    // Parse CSV
    const content = await fs.readFile(tempFilePath, 'utf-8');
    const records = parse(content, {
      columns: true,
      skip_empty_lines: true
    });

    for (const record of records) {
      const { data, error } = await supabase
        .from('contacts')
        .insert({
          first_name: record['FirstName'],
          last_name: record['LastName'],
          phone: record['Phone'],
          email: record['Email'],
          text_notif: record['TextNotif'],
          phone_notif: record['PhoneNotif'],
          email_notif: record['EmailNotif'],
          user_id: userId
        })
      
      if (error) {
        console.error('Error inserting record:', error);
      }
    }

    console.log('CSV data processed:', records);

    // Clean up the temporary file
    await fs.unlink(tempFilePath);

    return NextResponse.json({ success: true, message: 'CSV uploaded and processed successfully' });
  } catch (error) {
    console.error('Error processing CSV:', error);
    return NextResponse.json({ success: false, message: 'Error processing CSV' }, { status: 500 });
  }
}