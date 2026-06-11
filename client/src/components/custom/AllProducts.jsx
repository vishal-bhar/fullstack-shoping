import React, { useEffect, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Edit, Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Textarea } from '../ui/textarea'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '@/redux/slices/productSlice'

function AllProducts() {
// const products = useSelector((state) => state.product.products);

const {products}=useSelector((state)=>state.product)

console.log(products.length);

  const [category,setCategory]=useState("all");
  const[searchTerm,setSearchTerm]=useState("")
  const dispatch=useDispatch()



useEffect(()=>{
  const getFilterProducts=async ()=>{
    const res= await axios.get(import.meta.env.VITE_API_URL+`/get-products?category=${category}&search=${searchTerm}`);
        console.log("hai vishal",res)

    const data=await res.data;
    dispatch(setProducts(data.data));
};

getFilterProducts()
},[category,searchTerm])

  return (
   <div className='mx-auto px-4 sm:px-8 -z-10'>
     <h1 className='text-3xl font-bold mb-8'>Our Products</h1>

     <div className='mb-8'>
      <form className='flex gap-4 items-end sm:w-[80vw]'>
        <div className='flex-1'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="search">Search Product</label>
          <div className="relative">
            <Input type="text" id="search" 
            placeholder="Search by name or discreption"
            className='pl-10'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <Search size={20} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'/>
          </div>
        </div>
        <div className='w-48'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor="category">Category</label>
          <Select value={category} onValueChang={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a Category"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="headset">Headset</SelectItem>
              <SelectItem value="keyboard">Keyboard</SelectItem>
              <SelectItem value="mouse">Mouse</SelectItem>
            </SelectContent>
          </Select>

        </div>
      </form>
     </div>

     {
      products?.length ===0 ? (
      <p className='text-center text-gray-500 mt-8'>No Products found , try adjusting your search or category</p>):  
      (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-2 sm:mx-0'>
        {
          products?.map((product)=>
          <Card className="flex flex-col" key={product._id}>
        <div className='aspect-squar relative'>
          <img src={product.image.url} alt={product.name}
          className='rounded-t-lg' />
        </div>
        <CardContent className="flex-grow p-4">
          <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
          <p className='text-sm text-gray-600 mb-4'>{product.description}</p>
          <p className='text-lg font-bold'>₹{product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <Button variant="outline"><Edit className='mr-2 h-4 s-4'/>Edit</Button>
          <Button>Black List Product</Button>
        </CardFooter>
    </Card>)
        }
 
     </div>)
     }


   

   <Dialog open={false}>
  <DialogContent className="sm:mxz-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Product</DialogTitle>
    </DialogHeader>
    <form>
      <div className='grid gap-4 py-4'>
        <div className='grid gap-4 items-center'>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name"/>
        </div>
         <div className='grid gap-4 items-center'>
          <Label htmlFor="discription">Discription</Label>
          <Textarea id="discription" name="discription"/>
        </div>
           <div className='grid gap-4 items-center'>
          <Label htmlFor="price">Price</Label>
          <Input type="number" id="price" name="price"/>
        </div>
          <div className='grid gap-4 items-center'>
          <Label htmlFor="category">Category</Label>
          <Select name="category">
            <SelectTrigger>
              <SelectValue placeholder="Select a category"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="headset">Headset</SelectItem>
              <SelectItem value="keyboard">Keyboard</SelectItem>
              <SelectItem value="mouse">Mouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
   </div>
  )
}

export default AllProducts