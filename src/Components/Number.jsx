import React,{useState} from 'react'
import { useEffect } from 'react'

const Number = () => {
    const [type,setType] =useState()
    const [data,setData] =useState()
    const query= new URLSearchParams(window.location.search)
    const urls = query.getAll("urls");
    for(let i=0;i<urls.length;i++)
    {
        if(urls[i].includes("primes"))
        {
        setType("primes")
        break;
        }
        if(urls[i].includes("fibo"))
        {
        setType("fibo")
        break;
        }
        if(urls[i].includes("odd"))
        {
        setType("fibo")
        break;
        }
        if(urls[i].includes("rand"))
        {
        setType("rand")
        break;
        }
    }
    useEffect(()=>{
        const fetchData = async () => {
        const res = await fetch(`http://20.244.56.144/numbers/${type}`);
        const d=res.json();
        setData(d);
        }

        fetchData();

    },[]);
  return (
    <div>
      
    </div>
  )
}

export default Number
