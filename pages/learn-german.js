import React from 'react';
import Link from 'next/link';
import LanguageCard from '../src/components/LanguageCard';
import ProgressListing from '../src/components/ProgressListing';
import Router from 'next/router';
import storageCheck from '../src/lib/storageCheck';


const LearnGerman = () => {
  return (
    <div>
      {/* <PleaseLogin> */}
        <LanguageCard />
      {/* </PleaseLogin> */}
      <Link href="/stats"><button>Show stats</button></Link>
    </div>
  );
};

export default LearnGerman;