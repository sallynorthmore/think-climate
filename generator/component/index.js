/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Functional',
      choices: () => ['Functional', 'Class']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    }
  ],
  actions: data => {
    let componentTemplate;

    switch (data.type) {
      case 'Class': {
        componentTemplate = './component/class.template.hbs';
        break;
      }
      case 'Functional': {
        componentTemplate = './component/functional.template.hbs';
        break;
      }
      default: {
        componentTemplate = './component/functional.template.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/styles.js',
        templateFile: './component/styles.template.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/stories.js',
        templateFile: './component/stories.template.hbs',
        abortOnFail: true
      }
    ];

    return actions;
  }
};
