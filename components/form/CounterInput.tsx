'use client'
import React, { useState } from 'react'
import { Card, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { LuMinus, LuPlus } from 'react-icons/lu';

const CounterInput = ({text,defaultValue}:{text:string,defaultValue?:string}) => {

    const [count,setCount] = useState(defaultValue ? parseInt(defaultValue) : 0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => Math.max(0, prevCount - 1));
    };
  return (
    <Card className='my-2'>
        <input name={text} value={count} type = 'hidden' />
        <CardHeader className='flex flex-col'>
            <div className="flex items-center justify-between flex-wrap w-full">
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold capitalize">{text}</h2>
                    <p className="text-xs text-muted-foreground capitalize">specify the number of {text}</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" onClick={decrement} disabled={count <= 0}>
                        <LuMinus className="w-4 h-4 text-primary" />
                    </Button>
                    <span className="text-xl font-semibold">{count}</span>
                    <Button variant="outline" size="icon" onClick={increment}>
                        <LuPlus className='w-4 h-4 text-primary' />
                    </Button>
                </div>
            </div>
        </CardHeader>
    </Card>
  )
}

export default CounterInput