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
    title: "A Legal Engineer’s Guide to a “Fair Launch” ⚖️ 🚀 — Part 1",
    imageUrl: 'img/lexDAO-substack-fair-launch-pt-1.jpeg',
    description: (
      <Fragment>
        [...]“what does fair mean anyway?” This is not what we’re here to discuss. It is too deep a philosophical rabbit-hole. What is worth mentioning is the notion of “fairness” exists. This is the part that matters. People have built in detectors for fairness. If someone says to you “that’s not fair” you just kinda know what it means...
      </Fragment>
    ),
  },
  {
    title: "Filler",
    imageUrl: 'img/undraw_ideas_flow_cy7b.svg',
    description: (
      <Fragment>
        Juris builder lets you create interviews and documents through an easy visual interface. Builder is also open source and free.
      </Fragment>
    ),
  },
  {
    title: "Filler",
    imageUrl: 'img/undraw_functions_egi3.svg',
    description: (
      <Fragment>
        Our document standard includes everything needed to create and embed complex user interviews and resulting documents.
      </Fragment>
    ),
  },
  {
    title: "Filler",
    imageUrl: 'img/undraw_relaxing_at_home_9tyc.svg',
    description: (
      <Fragment>
        The code generated and used by our system is simple and human reabable even in pure code form.
      </Fragment>
    ),
  },
  {
    title: "Filler",
    imageUrl: 'img/undraw_community_8nwl.svg',
    description: (
      <Fragment>
        Juris is an open community project maintained by a decentralized public benefit cooperative. Learn more about JurisDAO by joining our <a href="https://discord.gg/syUtJd7">Discord</a>
      </Fragment>
    ),
  },
  {
    title: "Filler",
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
      title={`lexDAO - Legal Engineers.`}
      description="We're a community of Legal Engineers who aim to use open source to make the legal system work for everyone.">
      <header className={classnames('hero hero--primary hero--dark', styles.heroBanner)}>
        <Container>
          <Row>
            <Col xs="6" className="p-2">
              {/* <img className="pb-2 pt-3" src="img/lexDAO-Logo-White.png" width="350px" height="300px" /> */}
              <br/><br/><br/><br/>
              <h1 className="pt-2 pb-2 pl-2 hero__title">lexDAO</h1>
              <p className="pt-2 pb-2 pl-2 hero__subtitle">The Decentralized Legal Engineering Guild<br></br><br></br></p>
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
                    to={useBaseUrl('https://discord.gg/qbUhmH4')}>
                    Join
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
                <h1>About LexDAO</h1>
                <h4 style={{fontWeight: `400`}}>LexDAO is a group of legal engineering professionals who are seeking to provide a trusted layer between the decentralized world of blockchains and a legal settlement layer in the real world. We are trying to bridge this layer to provide a working framework for organizations to work in a trustless and trusted manner using Ethereum, blockchains, smart contracts and decentralized organizations.</h4>
              </Col>
              </Row>
              <Row>
                <Col className="pt-5 pb-5"><hr/><h2>Disclaimer: </h2><h4 style={{fontWeight: `400`}}>
                LexDAO is a club, not a law firm and not even a legal entity. Unless otherwise stated in writing, all conversations and communications with DAO members which take place in any public or semi-public forum (e.g. Discord or Twitter) are not to be considered legal advice for any purpose. To the extent applicable, LexDAO, LLC, a Delaware registered LLC, is the only legal entity with which it is possible to conduct contractual business with the DAO. For explicit statement, no individual DAO member is an agent of other DAO members or for LexDAO, LLC.</h4><br/><hr/>
              </Col>
            </Row>
            <Row>
              <Col className="pt-5 pb-5">
                <h1>Join LexDAO</h1>
                <h4 style={{fontWeight: `400`}}>Want to join LexDAO? The best way is just to show up. Drop into the Discord, attend the weekly community calls, maybe throw down some code during the hacking sessions. If it's clear that you're contributing value, a LexDAO member might nominate you to join the DAO. If you're so fired up you can't wait, you can fill out the form launched by the button below to kick start a nomination by giving us your contact info.</h4><br/><Button tag={Link}
                    outline color="dark"
                    size="lg"
                    className={classnames(
                      `ml-2`,
                    )}
                    to={useBaseUrl('https://discord.gg/qbUhmH4')}>Join lexDAO</Button>
              </Col>
            </Row>
            <h1>Features:</h1>
          
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
        </Container>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
