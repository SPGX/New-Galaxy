import React, { ReactElement } from 'react'

import CardBox from '@/components/card/card-box'
import TrendingCollection from '@/constants/new-metaverse/trending-collection'
import PopularCollection from '@/constants/new-metaverse/popular-collection'
// import TopCollection from '@/constants/new-metaverse/top-collection'
import worldImage from '@/assets/images/new-metaverse/world.svg'

export default function Home(): ReactElement {
  return (
    <div>
      <CardBox
        header='Join Galatic membership to gain'
        subHeader='10000 NGP!'
        description={['Puschase NGP to enjoy our new marketplace', 'Puschase NGP to enjoy our new marketplace']}
        buttons={[
          { text: 'Purchase Now', classed: 'bg-bluePrimary text-black border-none w-[100%] rounded-md' },
          { text: 'View Details', classed: 'bg-transparent text-white w-[100%] border border-white rounded-md' },
        ]}
        image={worldImage.src}
        classed='bg-cardBox'
      />
      <TrendingCollection />
      {/* <TopCollection /> */}
      <PopularCollection />
    </div>
  )
}
