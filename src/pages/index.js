import { withSSRContext } from 'aws-amplify'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { listParks } from '../graphql/queries'
import {AmplifyS3Image} from '@aws-amplify/ui-react'

export async function getServerSideProps() {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({
    query: listParks
  })

  return {
    props: {
      parks: data.listParks.items
    }
  }
}

export default function Home( {parks}) {
  return (
    <div>
      <Head>
        <title>National Parks</title>
      </Head>
      <div className='container'>
        <h1>National Parks <Link href='/create-park'>(+)</Link></h1>
        <div className='image-grid'>
          {parks.map(park => {
            return (
              <div key={park.id} className='img-square'>
                <h2>{park.name}</h2>
                <AmplifyS3Image imgKey={park.image.key} height='200px' />
                
                </div>
            )
          })}
          </div>
        </div>
    </div>
  )}
