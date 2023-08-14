// $( document ).ready(function() {
//     $( ".btn" ).on( "click", function() {
//         $(".showcase").addClass("hide")
//         $(".showcase-2").removeClass("hide")


    //     function onPageLoad(){
    //         var url = "http://127.0.0.1:5500/get_location_names"
    //     // var url = "/get_location_names"
    //     console.log("before stating")
    //     $.get(url, function(data, status){
    //         console.log("started")
    //         if(data){
    //             var locations = data.locations;
    //             var uiLocations = document.getElementById("uiLocations");
    //             $('#uiLocations').empty();
    //             for(var i in locations){
    //                 var opt = new Option(locations[i]);
    //                 $("#uiLocations").append(opt);
    //             }
    //         }
    //     } )
    //   }
        // })
    //     var url = "http://127.0.0.1:5500/get_location_names"
    //     // var url = "/get_location_names"
    //     console.log("before stating")
    //     $.get(url, function(data, status){
    //         console.log("started")
    //         if(data){
    //             var locations = data.locations;
    //             var uiLocations = document.getElementById("uiLocations");
    //             $('#uiLocations').empty();
    //             for(var i in locations){
    //                 var opt = new Option(locations[i]);
    //                 $("#uiLocations").append(opt);
    //             }
    //         }
    //     } )
    //   });


    //   var url = "http://127.0.0.1:5500/get_location_names"
    //     $.get(url, function(data, status){
    //         console.log(data)
    //         if(data){
    //             var locations = data.locations;
    //             var uiLocations = document.getElementById("uiLocations");
    //             $('#uiLocations').empty();
    //             for(i in locations){
    //                 var opt = new Option(locations[i]);
    //                 $("#uiLocations").append(opt);
    //             }
    //         }
    //     } )
//   });

function onPageLoad(){
    var url = "http://127.0.0.1:5500/get_location_names"
    // var url = "/get_location_names"
    console.log("before stating")
    $.get(url, function(data, status){
    console.log("started")
    if(data){
        var locations = data.locations;
        var uiLocations = document.getElementById("uiLocations");
        $('#uiLocations').empty();
        for(var i in locations){
            var opt = new Option(locations[i]);
            $("#uiLocations").append(opt);
        }
    }
})
}
  window.onload = onPageLoad;