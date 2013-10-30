## Semantic-Tumblr

Historically, tumblr theme development has always been ***terrible***.  This project does two things

1. provide a base [Semantic-UI](https://github.com/jlukic/Semantic-UI) tumblr template
2. provide a good structure for a tumblr theme

### What's wrong with Tumblr?

The typical development cycle:

 - make a huge HTML file (hundreds or thousands of lines)
 - copy that to the clipboard
 - paste it into the tumblr theme editor
 - press update
 - look
 - go back to the code and pull your hair out

With Semantic-Tumblr:

 - create files for each type of post, and other fragments
 - use grunt to combine these into the single HTML file
 - have tumblr automagically update the preview, by running a small bit of code when you start a dev session

### Can I use this commercially?

Yes.  The code is [MIT](http://opensource.org/licenses/MIT) licensed. 

### Development

Whether you're contributing back to the main repo, or creating a theme based on it, the process is the same.

1. Download the latest [release](https://github.com/brigand/semantic-tumblr/tags) and unpack it into a folder.
2. Install grunt and the dependencies (you'll need to have [node.js and npm](http://nodejs.org/) installed).  On Linux and MacOS use the following; omit the "sudo" on Windows.

    ```sh
    sudo npm install -g grunt-cli
    npm install
    ```

3. run `grunt` to build it.

When developing leave `http://www.tumblr.com/customize/YOUR-BLOG-NAME` open in your browser.  Click on the Edit HTML button, and then put the following in the developer console:

```javascript
// source: http://stackoverflow.com/a/19608372/1074592
setInterval(function(){jQuery.ajax("http://localhost:31338/build/theme.html",{cache:!1}).success(function(a){var b=jQuery("div[data-action='update_preview']").first();a!=ace.edit("editor").getValue()&&(ace.edit("editor").setValue(a),b.hasClass("disabled")||b.click())})},1E3);
```

You only need to do that once, unless you close the tab.  Now every time you run `grunt` the preview will automagically update.  

### File Structure

Here's the directory tree.  We have HTML files which are all organized within the HTML directory.  The main file is `theme.html`.  

```
├── asset_urls.json
├── build
│   └── theme.html
├── css
│   ├── glue.css
│   └── semantic.min.css
├── Gruntfile.js
├── html
│   ├── fragments
│   │   ├── image_modal.html
│   │   ├── meta.html
│   │   ├── post_buttons.html
│   │   └── tags.html
│   ├── posts
│   │   ├── audio.html
│   │   ├── chat.html
│   │   ├── link.html
│   │   ├── panorama.html
│   │   ├── photo.html
│   │   ├── photoset.html
│   │   ├── quote.html
│   │   ├── text.html
│   │   └── video.html
│   └── theme.html
├── js
│   └── image_modal.js
├── package.json
├── README.md
└── tools
    ├── refresh.js
    └── server.py
```
In any of the files, you may use a special `include` directive, which will pull another file into it.  Paths are relative to the current file.  For example, say we're in theme.html and we want to include the contents of posts/text.html.

```html
<div class="text post">
    include "posts/text.html"
</div>
```

This prevents us from working on one huge file.  If you want to change something in the photo post, go to html/posts/photo.html.  Much simpler than digging through a huge theme.

### TODO

First, congrats on making it to the bottom of this README!

The main things I could use help with are...

1. design; I'm a developer not a designer
2. testing; use this on your Tumblr.  The Tumblr engine is quite complicated, and I'm sure I'm missing something.
3. reporting; create issues for anything and everything; 

  - something's a little off
  - this would look better like *that*
  - you're missing *those*
  - you need to update the Semantic version
  - it doesn't let me customize *this* easily
  - and anything else!

