# ng-offline-js
Angular $http helper for Offline JS (http://github.hubspot.com/offline/)


Install the modules:
```
npm install --save offline-js
npm install --save ng-offline-js
```

Import the modules:
```
import 'offline-js/themes/offline-theme-default.css';
import 'offline-js/themes/offline-language-english.css';
import 'offline-js';
import 'ng-offline-js';
```

Import ng-offline-js into angular:
```
angular.module('your-module', ['ng-offline-js'])
```


Now failing $http requests will trigger offline-js' offline check.

Enjoy!
