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
              <p className="pt-2 pb-2 pl-2 hero__subtitle">Public problems require open solutions.<br></br>Juris is a group of open source of Legal Engineers building the future.</p>
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
              <Col className="p-5">
                <h1>The Juris Manifesto</h1>
                <p className="pt-3">Juris is a a project built around the belief that public problems require open solutions. We are a community of legal engineers who are building software to make the legal system open, accessible, and fair for everyone.</p> 
                <p>The United States judicial system is a branch of government. It is a public system of massive scale. It serves 100s of million people per year. Yet it meets only 22% of demand for access to justice. We believe there is no way to meet this scale, and repair the failings in this system without an open source, community driven effort. The price of access to the tools of the legal system--and their use to enforce your rights as a citizen--should be as close to free as possible.</p>
                <p>As a community, our core values are inclusion, education, and creation. This means all are welcome to contribute, we will help your become a better legal engineer, and we will all do it by actually building things to make a better legal system. The time for talking has passed.</p>
                <p>All code and content contributed to the [Juris Project Public Code Repository](https://github.com/jurisproject/) will remain open source and free to use in perpetuity. By committing code or content to this repository, you agree to these terms.</p>
                <p>Browse this handbook for more information on the how we are tackling this problem, and how to take part.</p>
              </Col>
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
