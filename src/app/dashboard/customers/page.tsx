import Link from "next/link"
import {
  ArrowUpRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CustomerForm } from "@/components/dashboard/customers/customer-form"
import { currentUser } from '@clerk/nextjs/server'
import { supabase } from "@/lib/database"

export default async function Customers() {
  const user = await currentUser();

  const { data: customerData, error: customerError } = await supabase
    .from('contacts')
    .select()
    .eq('user_id', user?.id);
  if (customerError) console.log("Customer Error from Supabase: ", customerError);

  console.log("Customers from Supabase: ", customerData);
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Customers</CardTitle>
                <CardDescription>
                  Your loyal customers.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customerData?.map((customer) => {
                    return (
                      <TableRow key={customer.id}>
                        <TableCell>
                          <div className="font-medium">{customer.first_name} {customer.last_name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            +1{customer.phone}
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          {customer.type}
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            {customer.phone}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          {customer.date}
                        </TableCell>
                        <TableCell className="text-right">{customer.email}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Add a Customer</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <CustomerForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
