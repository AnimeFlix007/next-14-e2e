import React from 'react'
import Image from 'next/image';
import ClientOnly from '@/app/client/ClientOnly';
import GoogleSheetButton from '@/app/components/freeTools/GoogleSheetButton';

type Props = {}

export default function LeadScoreGoogleSheet({}: Props) {
  return (
    <div className="container  w-full">
    <section className="text-gray-600 body-font w-full">
      <div className=" w-full container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="https://resources.kiwicreative.net/hs-fs/hubfs/Cover-Mockup-LP.jpg?width=1797&name=Cover-Mockup-LP.jpg"
            width={800}
            height={800}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-teal-500">
            Struggling with lead scoring?
          </h1>
          <h6 className="title-font sm:text-xl text-xl mb-4 font-bold text-gray-900">
            Use this editable Google Docs worksheet to:
          </h6>
          <ul className="list-disc text-xl">
            <li>
              Learn about the three different types of lead scoring buckets
            </li>
            <li>Review a sample lead scoring formula</li>
            <li>
              Establish a grading scale to assign point values to lifecycle
              stages
            </li>
            <li>Build out your own lead scoring matrix</li>
          </ul>
          <div className="flex justify-center mt-6">
          <ClientOnly>
            <GoogleSheetButton />
          </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}