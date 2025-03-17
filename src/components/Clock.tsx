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
               {time.toLocaleTimeString()}
          </div>
     );
}