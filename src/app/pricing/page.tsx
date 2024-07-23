import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-background">
      <div className="container max-w-3xl px-4 py-12 md:py-24 lg:py-32">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unlimited Access</h1>
            <p className="text-muted-foreground md:text-xl">
              Get full access to our platform with a single subscription.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-baseline justify-center space-x-2">
                <span className="text-4xl font-bold">$395</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <span className="text-muted-foreground"> + $0.42 per minute</span>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="grid gap-1">
              <CheckIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Unlimited Promotions</h3>
              <p className="text-muted-foreground">Create as many promotions as you need.</p>
            </div>
            <div className="grid gap-1">
              <CheckIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Dedicated Support</h3>
              <p className="text-muted-foreground">Get priority support from our team.</p>
            </div>
            <div className="grid gap-1">
              <CheckIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Advanced Analytics</h3>
              <p className="text-muted-foreground">Gain deeper insights into your projects.</p>
            </div>
            <div className="grid gap-1">
              <CheckIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Collaboration Tools</h3>
              <p className="text-muted-foreground">Work together with your team seamlessly.</p>
            </div>
            <div className="grid gap-1">
              <CheckIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Automated Workflows</h3>
              <p className="text-muted-foreground">Streamline your processes with automation.</p>
            </div>
            <div className="grid gap-1">
              <CheckIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Secure Infrastructure</h3>
              <p className="text-muted-foreground">Keep your data safe with our robust security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
