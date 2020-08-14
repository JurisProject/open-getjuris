import React, { Fragment } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { Container, Row, Col, Button } from 'reactstrap';

import styles from './styles.module.css';

const features = [
  {
    title: "Open Standard",
    imageUrl: 'img/undraw_open_source_1qxw.svg',
    description: (
      <Fragment>
        Juris is building an open document assembly toolkit and template library. All of our code is free to use. Our goal is maximum interoperability with all existing systems.
      </Fragment>
    ),
  },
  {
    title: "No Code",
    imageUrl: 'img/undraw_ideas_flow_cy7b.svg',
    description: (
      <Fragment>
        Juris builder lets you create interviews and documents through an easy visual interface. Builder is also open source and free.
      </Fragment>
    ),
  },
  {
    title: "Full Stack",
    imageUrl: 'img/undraw_functions_egi3.svg',
    description: (
      <Fragment>
        Our document standard includes everything needed to create and embed complex user interviews and resulting documents.
      </Fragment>
    ),
  },
  {
    title: "Simple and Human",
    imageUrl: 'img/undraw_relaxing_at_home_9tyc.svg',
    description: (
      <Fragment>
        The code generated and used by our system is simple and human reabable even in pure code form.
      </Fragment>
    ),
  },
  {
    title: "Community Owned",
    imageUrl: 'img/undraw_community_8nwl.svg',
    description: (
      <Fragment>
        Juris is an open community project maintained by a decentralized public benefit cooperative. Learn more about JurisDAO by joining our Discord.
      </Fragment>
    ),
  },
  {
    title: "Client Side/Serverless",
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <Fragment>
        Juris logic and document generation runs entirely client side, and can be hosted literally anywhere. We like Github 😁
      </Fragment>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
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
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Juris - Reboot the legal system.`}
      description="We're a community of Legal Engineers who aim to use open source to make the legal system work for everyone.<head />">
      <header className={classnames('hero hero--primary hero--dark', styles.heroBanner)}>
        <Container>
          <Row>
            <Col xs="6" className="p-2">
              <img className="pb-2 pt-3" src="img/Juris-Word-Logo-White.png" />
              <h1 className="pt-2 pb-2 pl-2 hero__title">Time to reboot the legal system.</h1>
              <p className="pt-2 pb-2 pl-2 hero__subtitle"> Juris is building open source document tools and open document templates.<br></br><br></br> All free to use.</p>
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
                    Get Started
                </Button>
                  <Button
                    tag={Link}
                    outline color="light"
                    size="lg"
                    className={classnames(
                      `ml-2`,
                      styles.getStarted,
                    )}
                    to={useBaseUrl('https://getjuris.com')}>
                    Get Legal Help
                </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" className="p-2">
              <img className="p-5 hero--image" src="/img/Hero-Image.png" />
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <section>
          <Container>
            <Row>
              <Col className="pt-5 pb-5">
                <h1>What is Juris?</h1>
                <p>Juris is a decentralized public benefit corporation. (We are transitioning to a cooperative ownership model. More on that soon!) We are focused on using open source software to fix the legal system.</p> 
                <p>We maintain the open source Juris document assembly toolkit, the open template library, and run <a href="https://getjuris.com">Getjuris.com</a>, where we use Juris to build legal self help apps.</p>
                <p>Currently, we are building an open standard for gathering user input via conversational interview flows, and generating documents from that input. If you would like to contribute start be visiting our <a href=".//docs">handbook.</a></p>
              </Col>
            </Row>
            <h1>Features:</h1>
          </Container>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <Container>
              <Row className="pb-5">
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
