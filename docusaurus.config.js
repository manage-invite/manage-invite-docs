module.exports = {
    title: 'ManageInvite',
    tagline: 'Stable, powerful and modern Discord bot to manage your server invites 🚀',
    url: 'https://new.docs.manage-invite.xyz',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    favicon: 'img/favicon.ico',
    organizationName: 'manageinvite',
    projectName: 'manageinvite-new-docs',
    plugins: [
        [
            require.resolve('docusaurus-gtm-plugin'),
            {
                id: 'GTM-KHX7V26'
            }
        ]
    ],
    themeConfig: {
        navbar: {
            title: 'ManageInvite',
            logo: {
                alt: 'ManageInvite Logo',
                src: 'img/logox200.png'
            },
            items: [
                {
                    to: 'docs/guides/getting-started',
                    label: 'Docs',
                    activeBasePath: 'docs/guides',
                    position: 'right'
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Get Started',
                            to: '/docs/guides/getting-started'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Dashboard',
                            href: 'https://dash.manage-invite.xyz'
                        },
                        {
                            label: 'Discord',
                            href: 'https://manage-invite.xyz/discord'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/node_gui'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Androz2091.`
        },
        algolia: {
            apiKey: '4ecc8a4a6fecbd2b21ab6942a9e0d45f',
            indexName: 'vue-nodegui',
            algoliaOptions: {} // Optional, if provided by Algolia
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                blog: {
                    showReadingTime: true
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
}
