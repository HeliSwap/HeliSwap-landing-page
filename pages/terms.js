import Head from 'next/head';
import Header from '../components/Header';

export default function Terms() {
  return (
    <div>
      <Head>
        <title>HeliSwap Landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container py-5 py-lg-6">
        <Header pageTitle="Legal" />

        <h1 className="text-hero text-bold mt-6 mt-lg-15">Terms of Use</h1>
        <p className="text-small text-bold mt-5">Last Modified: November 13, 2019</p>
        <div className="row mt-5 mt-lg-11">
          <div className="col-lg-5">
            <h2 className="text-title text-bold">Introduction</h2>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0">
            <p className="text-main">
              This Hedera Hashgraph Terms of Use agreement (the “Terms”) is made by and between any
              person or entity who accesses or otherwise uses the Hedera Materials (either an
              individual or an entity, referred to herein as “You,” “Your,” “Yourself” or “End
              User”) and Hedera Hashgraph LLC (“Hedera”). These Terms apply to You. For purposes of
              these Terms, all Developers are End Users. Some Terms may only apply to Developers.
              Please be aware of how these Terms apply to You and Your activities with any of the
              Hedera Materials.
            </p>

            <p className="text-bold mt-5">The Terms include the following:</p>

            <ul className="mt-5">
              <li className="text-main">1. Terms of Use;</li>
              <li className="text-main">
                2. Schedule A – Hbars; Nodes; Transaction Fees and Payments;
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 mt-lg-11">
          <div className="col-lg-5">
            <h2 className="text-title text-bold">1. Terms of Use</h2>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0">
            <p className="text-main">
              1. Definitions. Certain capitalized terms in these Terms will have the meaning in this
              Section 1.1 “Application(s)” means one or more software programs developed by You that
              communicates with the Hedera Network, including bug fixes, updates, upgrades,
              modifications, enhancements, supplements to, revisions, new releases and new versions
              of such software programs. 1.2 “Developer(s)” means an individual or entity who
              accesses or uses the Developer Tools or otherwise attempts to use the Hedera
              Technology to build an Application(s), inclusive of a Developer’s employees and
              contractors, members of the Developer’s organization or, if the Developer is an
              educational institution, faculty and staff. 1.3 “Developer Site(s)” means one or more
              websites or webpages for use by Developers. 1.4 “Developer Tools” means
              Hedera-proprietary software provided hereunder, including but not limited to header
              files, APIs, libraries, simulators, and software (source code and object code) for
              purposes of developing Applications to be made available on the Hedera Network and any
              other software that Hedera provides to You under the Hedera Network, including any
              Updates thereto (if any) that may be provided to You by Hedera under the Hedera
              Network. 1.5 “FOSS,” or Free and Open Source Software, means any software that is
              subject to terms that, as a condition of use, copying, modification or redistribution,
              require such software and/or derivative works thereof to be disclosed or distributed
              in source code form, to be licensed for the purpose of making derivative works, or to
              be redistributed free of charge, including without limitation software distributed
              under the GNU General Public License or GNU Lesser/Library GPL. 1.6 “Hedera Browser
              Extension” means the browser extension developed by or on behalf of Hedera to test
              micropayment functionality within a browser environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
