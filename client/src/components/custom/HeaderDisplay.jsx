import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function HeaderDisplay() {

    const imageData=[
        "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?_gl=1*mojpjd*_ga*MTM3NzAzODQzNS4xNzY0MDYyODU0*_ga_8JE65Q40S6*czE3NjQwNjI4NTQkbzEkZzEkdDE3NjQwNjMzMjMkajU3JGwwJGgw",
        "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?_gl=1*vrzxgg*_ga*MTI5NzA3MzY1LjE3MDk0NDMzODM.*_ga_8JE65Q40S6*czE3NjQwNjI1NzgkbzUkZzEkdDE3NjQwNjMwNzgkajU2JGwwJGgw",
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?_gl=1*4c4yo4*_ga*MTM3NzAzODQzNS4xNzY0MDYyODU0*_ga_8JE65Q40S6*czE3NjQwNjI4NTQkbzEkZzEkdDE3NjQwNjMyMDAkajQyJGwwJGgw",
        "https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?_gl=1*1sc5uhm*_ga*MTM3NzAzODQzNS4xNzY0MDYyODU0*_ga_8JE65Q40S6*czE3NjQwNjI4NTQkbzEkZzEkdDE3NjQwNjMyNDgkajU3JGwwJGgw",
    ]


  return (
    <Carousel className="my-10 mx-auto w-[93vw] overflow-x-clip sm:overflow-visible">
  <CarouselContent>
    {
        imageData.map((image ,i)=>
         <CarouselItem key={i}>
            <img src={image} loading="lazy" className="object-cover w-full h-[68vh] rounded-3xl" />
         </CarouselItem>
        )
    }
   
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )
}

export default HeaderDisplay