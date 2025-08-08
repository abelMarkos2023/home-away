import React from 'react'
import { Input } from '../ui/input'

const NavSearch = () => {
  return (
    <Input type='text' className='max-w-xl rounded-xl dark:bg-muted' placeholder='find a property...' />
  )
}

export default NavSearch