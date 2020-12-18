export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fdcc58a204a0d0caa7e6760',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-xgcpgbx3',
                  apiId: '27559c10-f894-47fe-97d1-715d3fb3689e'
                },
                {
                  buildHookId: '5fdcc58a8776343c45147a45',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-t39bfruf',
                  apiId: '84d20f9a-91bd-427f-992b-207f7d44c811'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bookbysru/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-t39bfruf.netlify.app', category: 'apps'}
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
