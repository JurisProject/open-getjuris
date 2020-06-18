import React, {Fragment} from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {Container, Row, Col, Button} from 'reactstrap';

import styles from './styles.module.css';
import PageHeader from '../components/PageHeader/PageHeader';

const TeamMembers = [
  {
    title: "Adam Kerpelman",
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <Fragment>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </Fragment>
    ),
    twitterUrl: '',
    linkedInUrl: '',
    gitHubUrl: ''
  }
];

function TeamMember({imageUrl, title, description}) {
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

function Team() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Imagine a better legal system.`}
      description="We're building a new legal system and we're thinking like programmers. Help us or get help.<head />">
      <PageHeader>
        <h2>Team</h2>
      </PageHeader>
      <main>
        <section>
          <Container>
            <Row>
              {TeamMembers.map((tm, idx) =>
                  <TeamMember key={idx} {...tm} />
                )}
            </Row>
          </Container>
        </section>
      </main>
    </Layout>
  );
}

export default Team;
