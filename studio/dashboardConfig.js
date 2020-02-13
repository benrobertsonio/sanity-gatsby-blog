export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e344e8cc2ca75e5f68669d2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aejxd6uy',
                  apiId: 'b22b2a0c-7e24-42d0-b207-9524732962be'
                },
                {
                  buildHookId: '5e344e8c1b94849b7daebbbd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-37wsf8mw',
                  apiId: 'eb5f50de-5658-447c-80f0-fd955d71751f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benrobertsonio/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-37wsf8mw.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    },
    {
      name: 'gatsby',
      options: {
        instances: [
          {
            instancesUrl: 'https://sanity-gatsby-blog-7661634284.gtsb.io/'
          }
        ]
      }
    }
  ]
}
