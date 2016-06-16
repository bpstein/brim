### Authentication with JWT [Ruby] and Satellizer [AngularJS]

Satellizer
----
Installation
`bower install satellizer` // Added to bower.json as dependecy

Include script to `index.html`
`<script src="bower_components/satellizer/satellizer.min.js"></script>`

#### MVVM (Model-View-ViewModel)
In the application you might find `var vm = this;` the `vm` in this case stands for
View's Model (ViewModel). WHY?

1. Provides a consistent and readable method of creating bindings in my controllers
2. Removes any issues of dealing with this scoping or binding (i.e. closures in nested functions)
3. Removes $scope from the controller unless I explicitly need it for something else

For the full article: johnpapa.net