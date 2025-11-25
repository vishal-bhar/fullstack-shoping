import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";

function cartDrawer() {
    let cartItems=[
        {
            id:1,
            name:"product 1",
            price:100,
            quantity:1
        },
          {
            id:2,
            name:"product 2",
            price:100,
            quantity:1
        },
    ];
   
    const totalQuantity=0;
    const totalPrice=0;



  return (
    <Drawer>
      <DrawerTrigger className="relative">
{
    totalQuantity >0 && <Badge className={'absolute px-1 py-0'}>{totalQuantity}</Badge>
}
        <ShoppingCart className="text-gray-800 dark:text-white hover:scale-105 transition-all ease-in-out cursor-pointer" strokeWidth={1.3} size={28}/>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>Total items:{totalQuantity} , Total Price :₹{totalPrice}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Check Out</Button>
       
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default cartDrawer;