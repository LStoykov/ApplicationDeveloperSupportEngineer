 <script type="text/javascript">
$(function() {
    var itemsDisabled = {};  // Enable everything initially.
    $.contextMenu({
        selector: ".context-menu-one",
        items: {
            // [...]
            cut: {
                name: "Cut",
                icon: "cut",
                callback: $.noop,
                accesskey: "c u t",
                disabled: function(key, opt) {
                    return !!itemsDisabled[key];
                }
            }
            // [...]
        }
    });

    // Disable the "Cut" menu item.
    itemsDisabled["cut"] = true;
});
shareimprove this answerfollow
</script> 