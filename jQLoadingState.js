
//
// jQuery Plugin - Put buttons into loading state
//
var loadingBtnArray = new Array();
(function ($) {
    $.fn.toLoadingState = function (options) {
        // Establish our default settings
        var settings = $.extend({
            loadingText: '...',
            cssClass: 'semiOpacity'
        }, options);

        $(this).data('initvalue', $(this).val());
        $(this).addClass(settings.cssClass);
        $(this).css({
            'box-sizing': 'border-box;',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            'width': $(this).width()
        });
        $(this).val(settings.loadingText);
        loadingBtnArray.push($(this).attr("id"));
        setInterval('LoadingButtonUpdate()', 1000);
    }

}(jQuery));
function LoadingButtonUpdate() {
    for (id in loadingBtnArray) {
        var text = $("#" + loadingBtnArray[id]).val();
        if (text == "...") $("#" + loadingBtnArray[id]).val(".  ");
        else if (text == ".  ") $("#" + loadingBtnArray[id]).val(".. ");
        else if (text == ".. ") $("#" + loadingBtnArray[id]).val("...");
    }
}
(function ($) {
    $.fn.toInitialState = function (options) {
        // Establish our default settings
        var settings = $.extend({
            loadingText: '...',
            cssClass: 'semiOpacity'
        }, options);

        $(this).removeClass(settings.cssClass);
        $(this).val($(this).data('initvalue'));
        loadingBtnArray.slice(loadingBtnArray.indexOf($(this).attr("id")));
    }

}(jQuery));
