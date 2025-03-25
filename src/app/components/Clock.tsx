"use client"

import { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default function Clock(){
     const [time, setTime] = useState<null | string>(null);
     const [utcTime, setUtcTime] = useState<string | null>(null);

     useEffect(() => {
          const updateTime = () => {
               const now = dayjs();
               setTime(now.format("YYYY/MM/DD/dddd - HH:mm:ss.SSS"))
               setUtcTime(now.utc().format("YYYY/MM/DD/dddd - HH:mm:ss.SSS"));
          };

          updateTime()
          const interval = setInterval(updateTime, 25)
          return () => clearInterval(interval);          
     }, [])
     return (
          <div>
               <div>JP : {time ?? "..."}</div>               
               <div>UTC : {utcTime ?? "..."}</div>
          </div>
     );
}