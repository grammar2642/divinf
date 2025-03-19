import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function Clock(){
     const [time, setTime] = useState(dayjs());

     useEffect(() => {
          const interval = setInterval(() => {
               setTime(dayjs());               
          }, 1);
          return () => clearInterval(interval);          
     }, []);
     return (
          <div>
               <div>{time.format("YYYY/MM/DD/dddd - HH:MM:ss.SSS")}</div>               
          </div>
     );
}