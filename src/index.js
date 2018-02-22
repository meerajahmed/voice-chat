/*
 *Start of Custom Js for handling toggle of chat box
 *
 */

/**Function for closing the chat box on clicking close button**/
$(document).on('click', '.panel-heading span.icon_minim', function(e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
/**Function for opening on click of input box**/
$(document).on('focus', '.panel-footer input.chat_input', function(e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});

/**Function for removing chat box on close icon**/

$(document).on('click', '.icon_close', function(e) {
    $('#chat_window_1').animate({ width: 'toggle' }, 500, function() {
        $(this).hide();
        $("#id_chatbox").show();
    });


});
/**Function to open chat box**/
$(document).on('click', '#id_chatbox', function(e) {
    $('#chat_window_1').animate({ width: 'toggle' }, 500, function() {
        $('#chat_window_1').show();
    });
    $("#id_chatbox").hide();
});
/**Function to toggle mic icon**/
$(document).on('click', '#btn-chat', function(e) {
    var $this = $(this);
    if ($this.hasClass('btn-mic')) {
        $this.removeClass('btn-mic').addClass('btn-feed');
    } else {
        $this.removeClass('btn-feed').addClass('btn-mic');
    }
})