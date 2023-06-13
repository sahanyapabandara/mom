> Guidelines for developers using MOM Design System to create web application flows.

## Getting started

### Vue JS

Since the components in the design system are built with Vue.js, developers using the system should at least have a basic understanding of how to work with Vue.js. The official <a href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue documentation</a> is a great place to start learning. It is concise, well written, and not heavily technical.

## Design system production files

Production files are available in this project's `dist/system/` folder.

```bash
system/
├─────── system.js           # components specific javascript
├─────── system.css          # components specific styles
│
├── css/                     # css files
│    ├── global.min.css      # reset and base styles
│    ├── carapace.min.css    # css utility classes
│    └── functions.scss      # css methods and tokens
│
├── tokens/                  # token files
│    ├── tokens.raw.json
│    ├── tokens.map.scss
│    └── tokens.scss
│
├── webfonts/                # webfont files
├── images/                  # images files
├── icons/                   # icons files
```

## Installation and setup

### Setup this project on your local workspace

1. Clone this project from <a href="https://gitlab-dev.wins.momdev.gcc.gov.sg:8081/gitlab/design_system/mom_design_system" target="_blank">MOM gitlab repository</a> to your local workspace.

2. In `mom_design_system` folder, run `npm run init` to generate the assets files and build the production files.

3. Run `npm start` to start the webserver.

4. You can now access the design system documentation at [localhost:6060](#/).

### Import design system to other project

1. This design system is available as a npm pakcage on <a href="http://100.112.165.24:4873/-/web/detail/@momwins/mom-design-system" target="_blank">MOM NPM server</a>.

2. In your project, run `npm install mom-design-system` to install this package.

   Run `npm install mom-design-system@x.x.xx` to install a specific version of the design system.

3. Add this code to your projects to import MOM Design System

   ```bash
    import MomDesignSystem from 'mom-design-system'
    import 'mom-design-system/dist/system/css/global.min.css'
    import 'mom-design-system/dist/system/css/carapace.min.css'
    import 'mom-design-system/dist/system/system.css'

    Vue.use(MomDesignSystem)
   ```

## Create/update component and template

1. Source files for all components/templates are located in `src/components/` and `src/templates/` folders.

2. For new component, create `{componentName / templateName}.vue`.

3. Start writing/updating your vue component.

4. For component, create `{componentName}.md` for documentation.

5. Add your new component/template to [components list](#/Components) or [templates list](#/Templates/Page%20Templates).

## Visual regression test

BackstopJS is a visual regression testing for web apps. In our project, we are using BackstopJS to run our tests. To install, run `npm install -g backstopjs`.

1. If backstop test is required for the component, create the component test html file in `src/backstop/` folder.

2. Import the component to `router/index.js`.

3. Add the component name to `backstop/config.js`

4. Run `npm run backstop:test` to perform backstop test for all components.

5. After the backstop test is completed, run `npm run backstop:approve` to update reference images.

## Publish and versioning

1. Before you publish, run `npm run build` to build and update the production files.

2. Update version number in `package.json` and `package-lock.json` files.

3. Run `npm pack` to bundle your production file as a package.

4. Run `npm publish momwins-mom-design-system-x.x.xx.tgz` to publish the package.
