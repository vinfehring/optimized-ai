import { NextResponse } from "next/server";

export async function GET() {

}

export async function POST(request : Request) {
  const formData = await request.formData();
  
  console.log("Form Data: ", formData);
  const companyName = formData.get("company");
  console.log("Company Name: ", companyName);
  const firstName = formData.get("firstName");
  console.log("First Name: ", firstName);
  const phone = formData.get("phone");
  console.log("Phone: ", phone);
  const industry = formData.get("industry");
  console.log("Industry: ", industry);

  const response = await fetch('https://api.air.ai/v1/calls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.AIR_API_KEY}`
    },
    body: JSON.stringify({
      promptId: 109993,
      campaignId: 24012,
      phone: phone,
      name: firstName,
      metadata: {
        company: companyName,
        industry: industry
      }
    }),
  });

  if (response.ok) {
    console.log("Demo call created successfully");
    return new Response("OK");
  } else {
    console.log("Error sending demo call to customer");
    return new Response("ERROR");
  }
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
