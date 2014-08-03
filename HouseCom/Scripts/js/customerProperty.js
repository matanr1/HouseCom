$(document).ready(function () {
    $('tr#customer-row').click(function (e) {
        var id = $(this).data('customer-id');
        getCustomerById(id);
    });


    var getCustomerById = function (id) {
        var options = {
            url: "/CustomerProperty/View/" + id,
            type:"post"
        };
        $.ajax(options).done(function (data) {
            alert(data);
        });

        return false;
    }
});
