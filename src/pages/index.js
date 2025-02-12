import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

function Home () {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Stable, powerful and modern Discord bot to manage your server invites 🚀">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <img src="img/logox200.png" height="200px" width="200px" />
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg text-white',
                                styles.getStarted
                            )}
                            to={useBaseUrl('docs/guides/getting-started')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main className={styles.content}>
                <section className={styles.description}>
                    <div className={classnames('row', styles.descriptionRow)}>
                        <div className={classnames('col col--6', styles.imgColumn)}>
                            <img src="img/example-invites.png" className={styles.demoImg} />
                        </div>
                        <div className="col col--6">
                            <h3>Track regular, bonus, fake and leaves invites!</h3>
                            <p>ManageInvite counts the invites and is able to categorize them, in 4 different types : the regular invites, when a member invites someone else in the server, the bonus ones, when an administrator adds invites to an account, the fake invites, when a member tries to invite the same person twice to gain more invites and the leave invites, when someone invited by the member left the server.</p>
                        </div>
                    </div>
                </section>
                <section className={classnames(styles.description)}>
                    <div className={classnames('row', styles.descriptionRow)}>
                        <div className="col col--6">
                            <h3>Easy migration from another bot!</h3>
                            <p>You want to use ManageInvite but you were using another bot before? No problem, ManageInvite can automatically retrieve the majority of the invitations already existing on your server so the members don&apos;t lose all their invites. </p>
                            <p>Click <a href="https://www.qt.io/" target="_blank" rel="noreferrer" className={styles.links}>here</a> to learn more about this command 🚀</p>
                        </div>
                        <div className={classnames('col col--6', styles.imgColumn)}>
                            <img src="img/example-sync.png" className={styles.demoImg} />
                        </div>
                    </div>
                </section>
                <section className={classnames(styles.description)}>
                    <div className={classnames('row', styles.descriptionRow)}>
                        <div className={classnames('col col--6', styles.imgColumn)}>
                            <img src="img/example-dashboard.png" className={styles.demoImg} />
                        </div>
                        <div className="col col--6">
                            <h3>Complete dashboard</h3>
                            <p>ManageInvite has a complete and beautiful dashboard that allows you to configure the bot <b>very</b> easily. You can access it at <b><a href="https://manage-invite.xyz">https://manage-invite.xyz</a></b>!</p>
                        </div>
                    </div>
                </section>
                <section className={classnames(styles.column, styles.description)}>
                    <div className={classnames('row', styles.descriptionRow)}>
                        <div className="col col--6">
                            <h3>Advanced configuration</h3>
                            <p>ManageInvite allows you to go very far in configuring the bot using our dashboard. You can modify many parameters so that the bot can perfectly meet your needs and work as you wish. All the settings are explained in the documentation and our team is available to answer your question on Discord if you can not find what you are looking for.</p>
                        </div>
                        <div className={classnames('col col--6', styles.imgColumn)}>
                            <img src="img/fake-threshold.png" className={styles.demoImg} />
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Home
