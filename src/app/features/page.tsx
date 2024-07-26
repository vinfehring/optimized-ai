export default function Features() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Loyal Customer&apos;s Potential</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides a suite of powerful features to help you expand, engage with, and
                  deliver exceptional results to your loyalty program users.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="group flex flex-col items-start rounded-lg border border-input bg-background p-6 shadow-sm transition-colors hover:bg-muted">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CombineIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Seamless Collaboration</h3>
                <p className="text-muted-foreground">
                  Empower your team to work together seamlessly with built-in tools for real-time communication, file
                  sharing, and version control.
                </p>
              </div>
              <div className="group flex flex-col items-start rounded-lg border border-input bg-background p-6 shadow-sm transition-colors hover:bg-muted">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BotIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Automated Promotions</h3>
                <p className="text-muted-foreground">
                  Streamline your promotional processes with automations that handle repetitive tasks, ensure consistency,
                  and free up your team to focus on what&apos;s important. Your business.
                </p>
              </div>
              <div className="group flex flex-col items-start rounded-lg border border-input bg-background p-6 shadow-sm transition-colors hover:bg-muted">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ScalingIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
                <p className="text-muted-foreground">
                  Leverage our scalable infrastructure to handle your large loyalty base, ensuring your
                  AI Loyalty Assistant is always available and responsive.
                </p>
              </div>
              <div className="group flex flex-col items-start rounded-lg border border-input bg-background p-6 shadow-sm transition-colors hover:bg-muted">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <InfoIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Powerful Analytics</h3>
                <p className="text-muted-foreground">
                  Gain deep insights into your loyalty program&apos;s performance and user interaction with our comprehensive
                  analytics tools, helping you make data-driven decisions.
                </p>
              </div>
              <div className="group flex flex-col items-start rounded-lg border border-input bg-background p-6 shadow-sm transition-colors hover:bg-muted">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <LockIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Robust Security</h3>
                <p className="text-muted-foreground">
                  Rest easy knowing your customer data is protected by our industry-leading security measures,
                  including end-to-end encryption, access controls, and advanced threat detection.
                </p>
              </div>
              <div className="group flex flex-col items-start rounded-lg border border-input bg-background p-6 shadow-sm transition-colors hover:bg-muted">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ComponentIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Flexible Customization</h3>
                <p className="text-muted-foreground">
                  Tailor our platform to your unique needs with our comprehensive training material and documentation, allowing you to
                  integrate seamlessly with your existing tools and workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function CombineIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function ComponentIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function ScalingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  )
}
