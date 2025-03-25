"use client"

import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function Clock(){
     const [time, setTime] = useState<null | string>(null);

     useEffect(() => {
          const updateTime = () => {
               setTime(dayjs().format("YYYY/MM/DD/dddd - HH:mm:ss.SSS"))
          }

          updateTime()
          const interval = setInterval(updateTime, 100)
          return () => clearInterval(interval);          
     }, [])
     return (
          <div>
               <div>{time ?? "..."}</div>               
          </div>
     );
}