$(".btn-send-message")
    .on("click", function (e) {
        e.preventDefault();
        //console.log("submit button clicked");

        var contactData = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };
        console.log(contactData);

        $.post("contactData", contactData, function () {
            
            
           

           
            // $("#name").val(" ");
            // $("#email").val(" ");
            // $("#subject").val(" ");
            // $("#message").val(" ");
            //console.log("data sent to back end success");

           
        });

    });
