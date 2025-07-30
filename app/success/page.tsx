import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Success() {
  return (
    <div className="container max-w-md py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-900 mb-6">
          <CheckCircle className="h-10 w-10 text-green-400" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
        <p className="text-muted-foreground mb-8">
          Your pizza order has been received and will be ready for your meetup. We've sent a confirmation to your email.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link href="/">
            <Button className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
