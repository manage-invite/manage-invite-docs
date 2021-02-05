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
                            href: 'hhttps://twitter.com/ManageInviteBot'
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
