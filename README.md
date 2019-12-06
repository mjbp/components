# Components

This is a [lerna](https://lerna.js.org/) monorepo containing a suite of UI components build, used and maintained by [StormId](https://stormid.com).

Each package is available for use on npm. See [the docs](https://stormid.github.io/components/) for details on each package.

---

# Packages

| Package                                   | Description                                                                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Boilerplate](./packages/boilerplate)     | Boilerplate for developing new components                                                                                                           |
| [Cookie Banner](./packages/cookie-banner) | GDPR compliant cookie banner                                                                                                                        |
| [Modal](./packages/modal)                 | Accessible modal dialog                                                                                                                             |
| [Modal Gallery](./packages/modal-gallery) | Accessible modal gallery                                                                                                                            |
| [Outliner](./packages/outliner)           | Hide CSS outline on mouse interactions, until [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) has broader support |
| [Scroll Points](./packages/scroll-points) | Trigger events based on element intersecting the viewport                                                                                           |
| [Scroll Spy](./packages/scroll-spy)       | Update elements based on target element intersecting the viewport                                                                                   |
| [Skip](./packages/skip)                   | Ensure fragment identifier links focus on their target node                                                                                         |
| [Tabs](./packages/tabs)                   | Accessible tabbed panelled content areas                                                                                                            |
| [Textarea](./packages/textarea)           | Auto-resizing textarea                                                                                                                              |
| [Toggle](./packages/toggle)               | Accessible DOM element expand and collapse                                                                                                          |
| [Validate](./packages/validate)           | Client-side form validation library                                                                                                                 |

# Commands

Install [lerna](https://www.npmjs.com/package/lerna) to use the Lerna CLI.


| Task                         | Command                                      |
| ---------------------------- | -------------------------------------------- |
| Run the example app | lerna run --scope PACKAGE_NAME dev --stream |
| Output the example app in prod mode | lerna run --scope PACKAGE_NAME prod --stream |
| Run tests | lerna run --scope PACKAGE_NAME test --stream |
| Build the package for distribution | lerna run --scope PACKAGE_NAME build --stream |


The full list of Lerna commands is listed in the [docs](https://github.com/lerna/lerna#readme).


<!-- notes on contributing -->