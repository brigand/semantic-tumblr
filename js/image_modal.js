(function () {
    var $img_modal = $('#image-modal');
    var $content = $img_modal.find('.content');

    $(document).on('click', 'img', function () {
        var $img = $(this);

        // check if the image is inside a link
        // if so, just let the link do its thing
        if ( $img.parents('a').length ) {
            return;
        }

        $content.empty();
        $content.append($img.clone()[0]);
        $img_modal.modal('show');
        return false;
    });
}).call(this);