# transform-void-arrow-functions
A tiny babel plugin to optimize arrow functions that don't return.

It turns this:
```js
promise.then(result => void onResult(result));
```
into this:
```js
promise.then(result => {
    onResult(result);
});
```
which transpiles down to this:
```js
promise.then(function(result) {
    onResult(result);
});
```
as opposed to this:
```js
promise.then(function(result) {
    return void onResult(result);
});
```

The former allows better minification, which is the point of this plugin.
