'use client';

import {useState} from 'react'
import Title from './Title';
import { Button } from '../ui/button';

const Descriptionn = ({description}:{description:string}) => {

    const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
    const words = description.split(' ');
    const isLongDescription = words.length > 100;

    const toggleDescription = () => {
      setIsFullDescriptionShown(!isFullDescriptionShown);
    }

    const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 100).join(' ') + '...'
      : description;
  return (
    <article className="p-4">
        <Title text="Description" />
        <p className="text-muted-foreground font-light leading-loose">
          {displayedDescription}
        </p>
        {isLongDescription && (
          <Button
          variant = 'link'
            className="mt-2 cursor-pointer p-0"
            onClick={toggleDescription}
          >
            {isFullDescriptionShown ? 'Show less' : 'Show more'}
          </Button>
        )}
    </article>
  )
}

export default Descriptionn