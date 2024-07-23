import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export function LandingCTA() {
  return (
    <Card
      className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
    >
      <CardHeader className="flex flex-row items-start bg-muted/50">
      <div className="grid gap-0.5">
        <CardTitle className="group flex items-center gap-2 text-lg">
          Request your Demo Call Today!
        </CardTitle>
        <CardDescription>Fill in your details below to get a free demo call!</CardDescription>
      </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Bob&apos;s Burgers" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="Bob" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1 222 333 4444" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="industry">Your Industry</Label>
              <Select>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select your Industry" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="barber-shop">Barber Shop</SelectItem>
                  <SelectItem value="restaurants">Restaurants</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <Button>Request Your Demo Call</Button>
      </CardFooter>
    </Card>
  )
}