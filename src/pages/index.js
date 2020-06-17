import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import '../scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Imagine a better legal system.`}
      description="We're building a new legal system and we're thinking like programmers. Help us or get help.<head />">
      <header className={classnames('hero hero--primary hero--dark', styles.heroBanner)}>
        <div className="container">
          <div className="row d-flex">
            <div className="col p-2">
            <img className="pb-2" src="img/Juris-Word-Logo-White.png"/>
              <h1 className="hero__title">Imagine a better legal system.</h1>
              <p className="hero__subtitle">Open source. Justice for All.</p>
                <div className={styles.buttons}>


                <Link
                  className={classnames(
                    `button button--secondary button--lg mr-2`,
                    styles.getStarted,
                   )}
                  to={useBaseUrl('handbook/')}>
                  Get Started
                </Link>
                <Link
                  className={classnames(
                    `button button--secondary button--lg ml-2`,
                    styles.getStarted,
                   )}
                  to={useBaseUrl('handbook/')}>
                  Get Started
                </Link>

              </div>
            </div>
            <div className="col p-2">
              <img className="p-2" src="img/Hero-Image.png" />
            </div>
          </div>
          </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
