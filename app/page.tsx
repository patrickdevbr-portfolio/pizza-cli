"use client"

import type React from "react"

import { useState } from "react"
import { Pizza } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import CliInterface from "@/components/cli-interface"
import PizzaRain from "@/components/pizza-rain"

export default function Home() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Order Placed!",
      description: "Your pizza order has been received and will be ready for your meetup.",
    })

    setIsSubmitting(false)

    // Redirect to success page after a short delay
    setTimeout(() => {
      router.push("/success")
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PizzaRain />

      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Pizza className="h-8 w-8 text-red-500" fill="#FFA07A" />
            <span className="text-xl font-bold text-primary">Pizza Paradise</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-900 to-black relative">
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center gap-4 text-center text-white mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Pizza Paradise CLI</h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                Order your perfect pizza for your next meetup with our command-line interface.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <CliInterface />
            </div>

            <div className="mt-6 text-sm text-white/80 text-center">
              <p>
                Hint: Type <code className="bg-white/20 px-1 py-0.5 rounded">help</code> to see available commands.
              </p>
              <p>
                Start your order with <code className="bg-white/20 px-1 py-0.5 rounded">order pizza</code> or type{" "}
                <code className="bg-white/20 px-1 py-0.5 rounded">form</code> to scroll to the form below.
              </p>
            </div>
          </div>
        </section>

        <section id="form-section" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Prefer a Form?</h2>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                If you prefer a traditional form interface, you can use the form below to order your pizza.
              </p>
            </div>

            <Card className="border-2 border-red-900 bg-black max-w-4xl mx-auto">
              <CardHeader className="bg-red-950/30 dark:bg-red-950/30">
                <div className="flex items-center">
                  <Pizza className="h-6 w-6 text-red-500 mr-2" fill="#FFA07A" />
                  <CardTitle>Pizza Order Form</CardTitle>
                </div>
                <CardDescription>Fill out this form to order your perfect pizza for your meetup.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Pizza Details</h3>

                    <div className="space-y-2">
                      <Label htmlFor="size">Size</Label>
                      <Select required defaultValue="">
                        <SelectTrigger id="size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (10")</SelectItem>
                          <SelectItem value="medium">Medium (12")</SelectItem>
                          <SelectItem value="large">Large (14")</SelectItem>
                          <SelectItem value="xl">Extra Large (16")</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Crust Type</Label>
                      <RadioGroup defaultValue="regular" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="regular" id="regular" />
                          <Label htmlFor="regular">Regular</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="thin" id="thin" />
                          <Label htmlFor="thin">Thin</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="stuffed" id="stuffed" />
                          <Label htmlFor="stuffed">Stuffed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="gluten-free" id="gluten-free" />
                          <Label htmlFor="gluten-free">Gluten Free</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Toppings (Select up to 5)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pepperoni" />
                          <Label htmlFor="pepperoni">Pepperoni</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mushrooms" />
                          <Label htmlFor="mushrooms">Mushrooms</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="onions" />
                          <Label htmlFor="onions">Onions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="sausage" />
                          <Label htmlFor="sausage">Sausage</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="bacon" />
                          <Label htmlFor="bacon">Bacon</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="extra-cheese" />
                          <Label htmlFor="extra-cheese">Extra Cheese</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="green-peppers" />
                          <Label htmlFor="green-peppers">Green Peppers</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pineapple" />
                          <Label htmlFor="pineapple">Pineapple</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Delivery Details</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Delivery Address</Label>
                      <Textarea id="address" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="meetup-details">Meetup Details (Optional)</Label>
                      <Textarea
                        id="meetup-details"
                        placeholder="Tell us about your meetup so we can prepare accordingly"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                    {isSubmitting ? "Placing Order..." : "Place Pizza Order"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Pizza Paradise. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </a>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
