export default {
  widgets: [
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
                  buildHookId: '5f8d68ae815434312e8f167f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-1-studio',
                  apiId: '86b894e6-1ed8-46e6-8673-5cfeca664bfd'
                },
                {
                  buildHookId: '5f8d68ae8154342efb8f17c2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test-1',
                  apiId: '6053925b-2f41-42b0-9543-301dd3414881'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chug2k/sanity-kitchen-sink-test-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test-1.netlify.app', category: 'apps'}
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
