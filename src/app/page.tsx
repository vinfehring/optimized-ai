import Link from "next/link"
import { LandingCTA } from "@/components/landing/landing-cta"

export default function Landing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elevate Your Digital Presence
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our cutting-edge platform empowers you to build and deploy exceptional loyalty programs with ease.
                Unlock your digital potential and captivate your audience.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <p className="text-xs text-muted-foreground">
                By clicking &quot;Request your Demo Call&quot; I agree by electronic signature to be contacted by Optimized AI
                through a live agent, artificial or pre-recorded voice, and automated SMS text at my residential or cellular number,
                dialed manually or by autodialer, and by email (consent to be contacted is not a condition to purchase services).{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={true}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
          <LandingCTA />
        </div>
      </div>
    </section>
  )
}