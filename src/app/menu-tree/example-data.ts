/** Example file/folder data. */
export const files = [
  {
    name: 'material2',
    type: 'book',
    children: [
      {
        name: 'src',
        type: 'visibility',
        children: [
          {
            name: 'cdk',
            type: 'folder',
            children: [
              { name: 'package.json', type: 'file' },
              { name: 'BUILD.bazel', type: 'file' },
            ]
          },
          { name: 'lib', type: 'folder' }
        ]
      }
    ]
  },
  {
    name: 'angular',
    type: 'assignment_returned',
    children: [
      {
        name: 'packages',
        type: 'folder',
        children: [
          { name: '.travis.yml', type: 'file' },
          { name: 'firebase.json', type: 'file' }
        ]
      },
      { name: 'package.json', type: 'file' }
    ]
  },
  {
    name: 'angularjs',
    type: 'book',
    children: [
      { name: 'gulpfile.js', type: 'book' },
      { name: 'README.md', type: 'book' }
    ]
  }
];
