import React, {Fragment} from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {Container, Row, Col, Button} from 'reactstrap';

import styles from './styles.module.css';

const features = [
  {
    title: "Easy to Use",
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <Fragment>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </Fragment>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <Fragment>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </Fragment>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <Fragment>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </Fragment>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Col sm={12} md={4} className={classnames(styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </Col>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Juris - Reboot the legal system.`}
      description="We're a community of Legal Engineers who aim to use open source to make the legal system work for everyone.<head />">
      <header className={classnames('hero hero--primary hero--dark', styles.heroBanner)}>
        <Container>
          <Row className="d-flex">
            <div className="col p-2">
            <img className="pb-2 pt-3" src="img/Juris-Word-Logo-White.png"/>
              <h1 className="pt-2 pb-2 pl-2 hero__title">Time to reboot the legal system.</h1>
              <p className="pt-2 pb-2 pl-2 hero__subtitle">Public problems require open solutions.<br></br>Juris is a group open source of Legal Engineers building them.</p>
                <div className="pt-2">
                <div className={styles.buttons}>
                <Button
                  tag={Link}
                  outline color="light"
                  size="lg"
                  className={classnames(
                    `mr-2`,
                    styles.getStarted,
                   )}
                  to={useBaseUrl('docs/')}>
                  Join Juris
                </Button>
                <Button
                  tag={Link}
                  outline color="light"
                  size="lg"
                  className={classnames(
                    `ml-2`,
                    styles.getStarted,
                   )}
                  to={useBaseUrl('help/')}>
                  Find Legal Help
                </Button>
                </div>
              </div>
            </div>
            <div className="col p-2">
              <img className="p-5 hero--image" src="/img/Hero-Image.png" />
            </div>
          </Row>
          </Container>
      </header>
      <main>
      <section>
          <Container>
            <Row>
              <div className="d-flex col p-2 justify-content-center">
                <h1 className="p-5">Manifesto</h1>
                <p className="p-2">Juris is an i</p>
              </div>
            </Row>
          </Container>
      </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <Container>
              <Row>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </Row>
            </Container>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
