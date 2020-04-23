export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ea208d2504e457dc5d18be5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-starter-studio',
                  apiId: '1137d5ca-3a00-4aee-a09f-7e507f32d4c6'
                },
                {
                  buildHookId: '5ea208d2c71c3d8fb37e2e24',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-starter',
                  apiId: '9eec0a31-8bd7-43cc-adb0-3b66f93f9b9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roberthaugen/sanity-gatsby-portfolio-starter',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-starter.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
