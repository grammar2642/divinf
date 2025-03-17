import { useState, useEffect } from "react";

export default function Clock(){
     const [time, setTime] = useState(new Date());

     useEffect(() => {
          const interval = setInterval(() => {
               setTime(new Date());               
          }, 1);
          return () => clearInterval(interval);          
     }, []);
     return (
          <div className="text-2xl font-mono text-center p-4">
               {time.toLocaleTimeString(undefined, { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 })}
          </div>
     );
}