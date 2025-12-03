import CheckOutProduct from "@/components/custom/CheckOutProduct";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Checkout() {
  return (
    <div className="mx-auto w-[90vw] sm:w-[60vw] flex justify-between items-center sm:my-20">
      <div className="flex flex-col sm:flex-row gap-5 mx-auto my-10">
      {/* Product Detail */}
        <div className="space-y-8">
          <div className="py-4 space-y-4">
            <h2 className="text-xl font-medium">order Summery</h2>
            <div className="space-y-1 text-3xl">
              <CheckOutProduct />
              <CheckOutProduct />

            </div>
            <hr />
            <div className="p-3 rounded-md">
              <p className="flex justify-between items-center">
                <span className="font-semibolder text-gray-400">Subtotal</span>
                <span className="font-bold">₹599</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibolder text-gray-400">Tax</span>
                <span className="font-bold">₹0</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibolder text-gray-400">Shippig</span>
                <span className="font-bold">₹0</span>
              </p>
            </div>
            <hr />
            <p className="flex justify-between items-center px-3">
              <span className="font-bold">Total</span>
              <span className="font-bold">₹599</span>
            </p>
          </div>
        </div>
      {/* </div> */}
      {/* Personal details */}
      <div className="w-[90vw] sm:w-[20vw]">
        <Card className="p-4 shadow-md space-y-4">
          <h2 className="text-xl font-medium">Billing Information</h2>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Jone Doe" className="w-full" />
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Jone Doe@gmail.com"
              className="w-full"
            />

            <Label htmlFor="address">Shipping Address</Label>
            <Textarea
              row="7"
              id="address"
              placeholder="123 main st.City , State"
              className="w-full"
            />
          </div>
          <Button>Place Order</Button>
        </Card>
          </div>
      </div>
    </div>
  );
}

export default Checkout;
