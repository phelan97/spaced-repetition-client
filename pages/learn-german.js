import React from 'react';
import Link from 'next/link';
import LanguageCard from '../src/components/LanguageCard';
import PleaseLogin from '../src/components/PleaseLogin';

const LearnGerman = () => {
  return (
    <div>
      {/* <PleaseLogin> */}
        <p>Learn German page</p>
        <LanguageCard />
      {/* </PleaseLogin> */}
    </div>
  );
};

export default LearnGerman;