perspective
===========

A jQuery plugin that adds to HTML images a perspective-like effect when the
page is scrolled.

I got inspired to write **perspective** after watching this
[video](http://youtu.be/1IH6FZlzTRY?t=7s):

![perspective effect](http://cdn.makeagif.com/media/1-26-2014/jgWkA0.gif)

Images become gates to different worlds, and whenever the page is scrolled
those gates move around hiding or revelealing additional details.


Description
-----------

The main idea behind this plugin is to take a selection of HTML images and wrap
them inside smaller containers enabling us to create a crop-like effect.  So if
you have an image of 640x480 pixels, the plugin will wrap original images into
a _cropper_ element of 640x420 pixels (by default the plugin will crop 30
pixels from the top and 30 from the bottom).

Finally, the plugin will adjust the `offset` of the original images depending
on the relative position of the _cropper_ element to the main page, creating
the perspective-like effect we were looking for.


Usage
-----

Once you have imported the library, using the plugin is as simple as:

```javascript
$('img').perspective();
```

And to change the maximum offset images are subject to, just specify that value
while enabling the plugin on the selection of elements:

```javascript
$('img').perspective({
  maxOffset: '20px'
});
```

Caveats
-------

The size of the elements the effect is going to be applied on should be known
at the moment the plugin is invoked.  This means that if you are dynamically
adding images to the page you will either have to:

- Wait for the image to be rendered -- using the `load` event
- Set `height` and `width` properties explicitly -- when applicable
