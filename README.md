# litebochs

litebochs is a lightweight jQuery plugin that does make images appear in a lightbox. It dead simple!

- __Version:__ 0.1.0

## Installation
1. You'll need jQuery. We've built this using `2.2.4` so anything bigger than that should be fine.
1. Yoink the repo
1. Drop the folder somewhere sensible in your project. Wherever all your other 3rd party stuff goes probably.

## Structure
__Distribution Folder__
```
litebochs
├── css
│   └── litebochs.css
├── index.html
└── js
    ├── litebochs.js
    └── litebochs.js.map
```

__Development Folder__
```
src
├── css
│   └── litebochs.scss
├── index.html
└── js
    └── litebochs.js


```

## Usage
1. Make sure you have at least one `<img>` tag in your page!
1. Put this code somewhere...
  - `<script src="/path/to/folder/litebochs.js">`
1. Init the plugin thusly in one of your regular JS file:
  - `$('parent_element').litebochs()`
1. Clickety-click that image and watch the magic happen

## Options

One could init options in this manner
```
let options = {
  theme: 'light'
}

$('parent_element').litebochs(options)

```

or done do it likes this

```
$('parent_element').litebochs({theme: 'light'})
```

### Defaults
 - `theme`: `dark`
 - `anim`: `zoom`
 - `speed`: `fast`

### Alternatives
 - `theme`: `light`
 - `anim`: `bounce`
 - `speed`: `slow`
