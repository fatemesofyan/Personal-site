"use client";

import React, { useState } from 'react'
import Input from '../../ui/Input/input'
import Button from '../../ui/ Button/ button';

export default function SubscribeForm() {

    const [email, setEmail] = useState("");

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col'>
        
        <h2 className="text-lg font-semibold text-primaryText-heading-light dark:text-primaryText-heading-dark">
        با ثبت ایمیل،از جدیدترین رویدادها باخبر شوید.

          </h2>
  <div className="relative w-full max-w-xs mt-4">
  <Input
    type="email"
    placeholder="ایمیل خود را وارد کنید"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    name="email"
    className=" pl-20 w-full"
  />
  
  <Button
  variant="primary" shape="pill"
    type="submit"
    className="absolute top-1/2 left-3  -translate-y-1/2  "
  >
    ثبت
  </Button>
</div>



      </div>
    </div>
  )
}
