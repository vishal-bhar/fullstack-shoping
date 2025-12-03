import React from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { starsGenerator } from "@/constant/Helper";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function ReviewComponent() {
  return (
    <div className="my-10 sm:my-20 w-[93vw] lg:w-[70vw] mx-auto">
      <h3 className="font-extrabold text-2xl text-gray-800 dark:text-white mb-8 text-center">
        Review
      </h3>

      {/* Write Review section */}
      <div className="rounded-lg">
        <h4 className="font-semibold text-lg text-gray-700 dark:text-white mb-4">
          Write a review
        </h4>
        <Textarea placeholder="Your Review" className="mb-4" />
        <div className="flex gap-5">
          <Input
            placeholder="rating (1-5)"
            type="number"
            max="5"
            min="1"
            className="mb-4 w-[10rem]"
          />
          <Button>Submit Review</Button>
        </div>
      </div>
      {/* Revew Section */}
      <div className="space-y-6 my-10">
        <div className="bg-white border border-gray-200 p-6 rounder-2xl shadow-lg dark:bg-zing-900 dark:border-none">
          {/* Reviewer info */}
          <div className="flex items-center mb-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>{" "}
            <div>
              <h4>Vishal bhar</h4>
              <div className="flex items-center mt-1">
                {starsGenerator(5, "0,15")}
              </div>
            </div>
          </div>
          {/* Review Content */}
          <p className="text-gray-100 text-sm text-gray-700 dark:text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sequi!</p>
          {/* Reply section */}
          <div className="mt-5 bg-gray-50 p-4 rounded-lg border dark:bg-zing-800">
            <h5 className="font-bold text-sm text-gray-700 mb-3 dark:text-yellow-300">Replies (2)</h5>
            <div className="space-y-4 ">
                <div>
                    <img src="https://via.placeholder.com/32" alt="" 
                    className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <div className="flex items-start space-x-4 border-b pb-3 last:border-none">
                        <h6 className="font-medium text-gray-800 text-sm text-black capitalize">corder29</h6>
                        <p className="text-gray-600 text-sm dark:text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam.</p>
                    </div>
                </div>
            </div>
          </div>
          {/* Replay Form */}
          <div className="mt-4">
            <Textarea placeholder="write your replay..."/>
            <Button size="sm" className="mt-4">Replay</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
