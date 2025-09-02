import React from 'react'

import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../navbar/SignoutButton';
import { fetchFavoritId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';
const FavoriteToggleButton = async ({propertyId}:{propertyId:string}) => {

  const {userId} = await auth();

  if(!userId) return <CardSignInButton />

  const favoriteId = await fetchFavoritId({propertyId})
  return (
   <FavoriteToggleForm favoriteId={favoriteId ?? null} propertyId={propertyId} />
  )
}

export default FavoriteToggleButton