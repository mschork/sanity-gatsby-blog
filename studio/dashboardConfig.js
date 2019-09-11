export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d791a90245362017e26e7c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vum3fu8j',
                  apiId: '5763d2d8-22be-4242-8d95-a71e549006b2'
                },
                {
                  buildHookId: '5d791a8f77c0ad017486c0c9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-68ro5q14',
                  apiId: 'cd7cfbac-75e6-4578-8d9c-5399e75c1a12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mschork/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-68ro5q14.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
