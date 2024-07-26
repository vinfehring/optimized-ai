import { NextResponse } from "next/server";
import { supabase } from "@/lib/database";

export async function GET() {

}

export async function POST(request: Request) {
  const formData = await request.formData();
  console.log(formData);

  console.log("First Name", formData.get("firstName"));
  const firstName = formData.get("firstName");
  console.log("Last Name", formData.get("lastName"));
  const lastName = formData.get("lastName");
  console.log("Phone Number", formData.get("phone"));
  const phone = formData.get("phone");
  console.log("User ID", formData.get("userId"));
  const userId = formData.get("userId");

  const { data: customerData, error: customerError } = await supabase.from('contacts').upsert(
    { first_name: firstName, last_name: lastName, phone: phone, user_id: userId },
    { onConflict: 'phone', ignoreDuplicates: false }
  ).select()
  
  if (customerError) {
    console.log("Error creating customer: ", customerError);
    return new Response("ERROR");
  }
  return new Response("OK");
}

export async function PUT() {

}

export async function PATCH() {

}

export async function DELETE() {

}

export async function HEAD() {

}

export async function OPTIONS() {

}
