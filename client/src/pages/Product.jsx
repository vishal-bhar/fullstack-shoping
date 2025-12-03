import ReviewComponent from "@/components/custom/ReviewComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Colors } from "@/constant/colors";
import { starsGenerator } from "@/constant/Helper";
import { Circle, Minus, Plus } from "lucide-react";
import { useState } from "react";

const imagesArray = [
  {
    url: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?_gl=1*1st69m2*_ga*MTI5NzA3MzY1LjE3MDk0NDMzODM.*_ga_8JE65Q40S6*czE3NjQzMzE4NjckbzkkZzEkdDE3NjQzMzE4ODkkajM4JGwwJGgw",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?_gl=1*1st69m2*_ga*MTI5NzA3MzY1LjE3MDk0NDMzODM.*_ga_8JE65Q40S6*czE3NjQzMzE4NjckbzkkZzEkdDE3NjQzMzE4ODkkajM4JGwwJGgw",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?_gl=1*1st69m2*_ga*MTI5NzA3MzY1LjE3MDk0NDMzODM.*_ga_8JE65Q40S6*czE3NjQzMzE4NjckbzkkZzEkdDE3NjQzMzE4ODkkajM4JGwwJGgw",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?_gl=1*1st69m2*_ga*MTI5NzA3MzY1LjE3MDk0NDMzODM.*_ga_8JE65Q40S6*czE3NjQzMzE4NjckbzkkZzEkdDE3NjQzMzE4ODkkajM4JGwwJGgw",
    id: 4,
  },
];

const productStock = 10;

function Product() {
  const [productQuantity, setProductQuantity] = useState(4);
  const [pinCode,setPinCode]=useState('');
  const[availablityMessage,setAvailablityMessage]=useState("");
const [purchaseProduct,setPurchaseProduct]=useState(false);
const [address,setAddress]=useState("");

  return (
    <>
      <div>
        <main className="w-[93vw] lg:w-[70vw] flex flex-col sm:flex-row justify-start items-start gap-10 mx-auto my-10">
          {/* LEFT SIDE */}
          <div className="grid sm:w-[50%] gap-3">
            <img
              src={imagesArray[0].url}
              alt="images"
              className="w-full lg:h-[30rem] rounded-xl object-center object-cover border dark:border-none"
            />
            <div className="grid grid-cols-4 gap-3">
              {imagesArray.map(({ url, id }) => (
                <img
                  src={url}
                  key={id}
                  className="rounded-xl filter hover:brightness-50 cursor-pointer
                            transition-all ease-in-out duration-300 border dark:border-none
                            "
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="sm:w-[50%] lg:w-[30%]">
            <div className="pb-5">
              <h2 className="font-extrabold text-2xl"> My first Keybord</h2>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                perferendis impedit doloribus esse! Voluptates, beatae!
              </p>
              <div className="flex items-center">
                {starsGenerator(4.5, "0", 15)}
                <span className="text-md ml-1">(2)</span>
              </div>
            </div>
            <div className="py-5 border-t border-b">
              <h3 className="font-bold text-xl">Rs.560 or Rs.36/month</h3>
              <p className="text-sm">
                Suggest payment with 6 months special financing{" "}
              </p>
            </div>
            <div className="py-5 border-b">
              <h3 className="font-bold text-lg">Choose Color</h3>
              <div className="flex items-center my-2">
                <Circle
                  fill={Colors.customIsabelline}
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                />
                <Circle
                  fill={Colors.customYellow}
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                />
              </div>
            </div>

            <div className="py-5">
              <div className="flex gap-3 items-center">
                <div className="flex gap-5 items-center bg-gray-100 rounded-full px-3 py-3 w-fit">
                  <Minus
                    stroke={Colors.customgray}
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((qty) => (qty > 1 ? qty - 1 : 1))
                    }
                  />
                  <span className="text-slate-950">{productQuantity}</span>
                  <Plus
                    stroke={Colors.customgray}
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((qty) =>
                        qty < productStock ? qty + 1 : qty
                      )
                    }
                  />
                </div>
                {
                   productStock - productQuantity > 0 &&(
                    <div className="grid text-sm font-semibold text-gray-400">
                        <span>
                            Only {""}
                            <span className="text-yellow-500">
                                {productStock -productQuantity} items {""}
                            </span>
                            left !
                        </span>
                        <span>Don't miss it</span>
                    </div>
                   ) 
                }
              </div>
              <div className="grid gap-3 my-5">
                <div className="flex gap-3">
                <Input placeholder="Enter your Pin code Here"
                onChange={(e)=>setPinCode(e.target.value)}
                />
                <Button>Check Availablity</Button>
                </div>
                <p className="text-sm px-2">{availablityMessage}</p>
              </div>

              <div className="flex gap-3">
                <Button onClick={()=>setPurchaseProduct(true)}>Buy Now </Button>
                <Button>Add to Cart </Button>
              </div>
              {
                purchaseProduct && 
                <div className="my-2 space-2" >
                    <Input placeholder="Enter your Address Here ..." onChange={(e)=>setAddress(e.target.value)}/>
                    <Button>Confirm Order</Button>
                </div>
              }
            </div>
          </div>
        </main>
        {/* REVIEW SECTION */}

        <ReviewComponent />
      </div>
    </>
  );
}

export default Product;
