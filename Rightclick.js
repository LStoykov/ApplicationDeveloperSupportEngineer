 <script type="text/javascript">
$(function() {
    var itemsDisabled = {};  /
    $.contextMenu({
        selector: ".context-menu-one",
        items: {
        
            cut: {
                name: "Cut",
                icon: "cut",
                callback: $.noop,
                accesskey: "c u t",
                disabled: function(key, opt) {
                    return !!itemsDisabled[key];
                }
            }
       
        }
    });

 
    itemsDisabled["cut"] = true;
});
shareimprove this answerfollow
</script> 