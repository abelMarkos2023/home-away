'use client';
import { Input } from '../ui/input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

const NavSearch = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search')?.toString() || '');

  const handleSearch = useDebouncedCallback((value:string) => {
    const params = new URLSearchParams(searchParams);
    if(value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  },400)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  }

  useEffect(() => {
    
    if (!searchParams.get('search')) {
      setSearchTerm('');
    }
  }, [searchParams.get('search')]);
  return (
    <Input type='text' className='max-w-xl rounded-xl dark:bg-muted' placeholder='find a property...' value={searchTerm} onChange={handleChange} />
  )
}

export default NavSearch