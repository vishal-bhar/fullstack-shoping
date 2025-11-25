import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Input } from "../ui/input";

const categoryData={
    trigger:"Category",
    items:["keyboard","mouse","headset"]
};

const priceData={
    trigger:"Price",
     items:[1000,3000,5000,8000]
}



function FilterManu() {

    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [search, setSearch]=useState("")


  return (
    <div className="w-[93vw] flex flex-col sm:flex-row justify-between items-center mx-auto my-10 gap-3 sm:gap-0  ">
      {/* DROPDOWN FILTERS */}
      <div className="flex sm:w-[30] w-full gap-3">
        {/* FOR CATAGORY */}
        <Select onValueChange={(value)=>setCategory(value)}>
          <SelectTrigger id={categoryData.trigger}>
            <SelectValue placeholder={categoryData.trigger} />
          </SelectTrigger>
          <SelectContent position="popper">
    {
        categoryData.items.map((item)=>(
            <SelectItem key={item} value={item} className="capitalize">{item}</SelectItem>
        ))
    }
          </SelectContent>
        </Select>


        {/* FOR PRICE */}

          <Select onValueChange={(value)=>setPrice(value)}>
          <SelectTrigger id={priceData.trigger}>
            <SelectValue placeholder={priceData.trigger} />
          </SelectTrigger>
          <SelectContent position="popper">
    {
        priceData.items.map((item)=>(
            <SelectItem key={item} value={item} className="capitalize">Less Then{item}</SelectItem>
        ))
    }
          </SelectContent>
        </Select>
      </div>

      {/* SEARCH INPUT */}

      <div className="sm:w-[60%] w-full">
        <Input id="search" placeholder="Search Here...." onChange={(e)=>setSearch(e.target.value)} />
      </div>
    </div>
  );
}

export default FilterManu;
