import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>libremarkets.now.sh</title>
      </Helmet>
      <h1>libremarkets.now.sh</h1>
      <h2>category: software</h2>
      <p><ol>
        <li><a href="https://github.com/libremarkets" target="_blank" rel="noopener noreferrer">https://github.com/libremarkets</a> a mirror;</li>
        <li><a href="https://gitlab.com/libremarkets" target="_blank" rel="noopener noreferrer">https://gitlab.com/libremarkets</a> a mirror;</li>
        <li><a href="https://bitbucket.org/libremarkets" target="_blank" rel="noopener noreferrer">https://bitbucket.org/libremarkets</a> a mirror.</li>
      </ol></p>

      <p>project status: inception, work in progress</p>

      <p><ol>
        <li>pending: a federated markets browser platform application with cryptocurrencies trading and exchanges &mdash; an android app with an <a href="https://i2pd.website/" target="_blank" rel="noopener" rel="noreferer">i2pd crystal</a> inside;</li>
        <li>pending: the same in <a href="https://flutter.dev/">flutter</a>, when the flutter's C++ DLL exceptions bug will be fixed;</li>
        <li>pending: the same in <a href="https://libreprismatronics.now.sh/">https://libreprismatronics.now.sh/</a> and programming language "any" with content-type "any/any" based on nixos, a Gaudi-like bioorganic future pioneering meta-technology for clouds and software.</li>
      </ol></p>

      <p>welcome and stay tuned!</p>

      <hr noshade/>
      <p>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Now.sh
        </a>.
      </p>
      <p>{date ? date : 'Loading date...'}</p>

      <p>Brought to you by <a href="https://allstarspioneer.now.sh/" rel="noopener noreferrer" target="_blank">https://allstarspioneer.now.sh/</a>.</p>
    </main>
  );
}

export default Index;
