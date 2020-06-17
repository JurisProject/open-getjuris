import React, {Fragment} from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {Container, Row, Col, Button} from 'reactstrap';

import PageHeader from '../../../components/PageHeader/PageHeader';

function Page() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Imagine a better legal system.`}
      description="We're building a new legal system and we're thinking like programmers. Help us or get help.<head />">
      <PageHeader>
        <h2>Debt Letter</h2>
      </PageHeader>
      <main>
        <section>
          <Container>
            <Row>
              <h5>Page Content</h5>
            </Row>
          </Container>
        </section>
      </main>
    </Layout>
  );
}

export default Page;
