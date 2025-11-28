import { Star, StarHalf } from "lucide-react";
import { Colors } from "./colors";

export const starsGenerator=(rating,stroke="0",size,fill=Colors.customYellow)=>{

    return Array.from({length:5},(elm,index)=>{
        const number=index+0.5;
        return (
            <span key={index}>
               {rating>= index+1 ? (<Star fill={fill} size={size} stroke={stroke}/>) : 
               rating>=number ? (
                <StarHalf fill={fill} size={size} stroke={stroke}/>
               ) : (<Star  stroke={Colors.customYellow} size={size}/>)
               } 
            </span>
        )
    })

}