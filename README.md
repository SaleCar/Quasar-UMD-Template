# Quasar UMD Template

Simple SPA-like Quasar v2 / Vue v3 template for quick start. 
No CLI/Webpack/Node required.

Contains landing page with few sections, login dialog and if we are logged in, admin backend with 4 sample pages, and 4 dumb components. Following that pattern, you can add as many as you want. Every page or component is in separate file. Also, this starter template contains Vue Router and simple store (for user state). After login, fake user token is saved in local storage so user remains logged in until sign out manually.

Online demo: http://quasar.rf.gd/


### Prerequisites

None.


### Installation

Just copy files and run ;)

Note: files must be placed in the root of web server. If they are placed in a subdirectory, for example //localhost/something/ then it will not work. In that case, the import paths must be changed and the Vue Router base directory must be set.


### Upgrade Quasar and Vue version

Find the CDN link in index.html and change it to new version.
Then check that everything is working properly, and if it does, you successfully upgraded ;)



## Development

Since this project contains single-file components without bundling, html part of component is held in ES6 "template literals".
To have code highlighting and intellisense inside template literals, I suggest to install VSCode extension "Vue Inline Template".



## Other

Similar project but without Quasar, just vanilla Vue, can be found here:  
GitHub: https://github.com/SaleCar/Vue3-QuickStart  
Demo: http://vue3quickstart.rf.gd