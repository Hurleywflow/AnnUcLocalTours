import React from 'react'
import DestinationSections from './DestinationSections';
import type { TourType } from '@/data/tours'
import { Destinations } from '@/data/tours'



function DestinationsGeneral() {
  return <DestinationSections tours={Destinations as TourType[]} />;
}

export default DestinationsGeneral
