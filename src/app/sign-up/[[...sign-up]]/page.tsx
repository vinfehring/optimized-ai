import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="h-screen w-screen flex py-12 md:py-24 lg:py-32 xl:py-48 justify-center">
      <SignUp />
    </section>
  )
}
