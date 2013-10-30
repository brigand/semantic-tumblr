// Tumblr Autorefresh
//  1. from the project root (not ./tools) run python tools/server.py
//  2. go to http://www.tumblr.com/customize/YOUR-BLOG-NAME
//  3. click Edit HTML
//  4. paste this snippet into the browser's console
//  5. rebuild the project and it'll appear in your browser

setInterval(function () {
    jQuery.ajax('http://localhost:31338/build/theme.html', {cache: false}).success(function (html) {
        var btn = jQuery("div[data-action='update_preview']").first();
        if ( html != ace.edit('editor').getValue() ) {
            ace.edit('editor').setValue(html);
            if ( !btn.hasClass('disabled') ) {
                btn.click()
            }
        }
    });
}, 1000);
