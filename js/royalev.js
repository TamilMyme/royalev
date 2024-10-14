
    (function($) {
        "use strict";
        const states = ["Andhra Pradesh", "Odisha", "Maharashra", "Karnataka", "Telangana", "Madya Pradesh",
            "Chattisgarh",
            "Tamilnadu"
        ]
        var stateoption = "";
        $.each(states, function(i) {
            stateoption += '<option value="' + states[i] + '">' + states[i] + '</option>';
        });
        $('#state').append(stateoption);
        const city = {
            "Andhra Pradesh": ["Rayadurgam",
                "Yemmiganur",
                "Nandikotkur",
                "Atmakur",
                "Icchapuram",
                "Pendurthi",
                "Tirupati",
                "Kurnool",
                "Allagadda",
                "Gajuwaka 2",
                "Markhapur",
                "Khammam",
                "Pileru",
                "Nandyal",
                "Vijayawada",
                "Bhadvel",
                "Kakinada"
            ],
            "Odisha": ["Berhampur", "Jharsuguda"],
            "Maharashtra": ["Mumbai", "Karad", "Ullasnagar"],
            "Karnataka": ["Tumkur"],
            "Telangana": ["Khammam"],
            "Madya Pradesh": ["Videsha"],
            "Chattisgarh": ["Raipur"],
            "Tamilnadu": ["Chennai"]
        }
        const delears = {
            "Rayadurgam": "ROYALEV SV Electric Motors",
            "Yemmiganur": "SRI BALAJI MOTORS",
            "Nandikotkur": "RoyalEV CB Motors",
            "Atmakur": "RoyalEV MIZ Motors",
            "Icchapuram": "DMK MOTORS",
            "Pendurthi": "HIMASRI ENTERPRISES",
            "Tirupati": "SRI LAXMI MOTORS",
            "Jharsuguda": "OM SAI AUTO ROYALEV",
            "Karad": "MJ E-Motors",
            "Kurnool": "YRK Motors",
            "Allagadda": "Future Star Motors",
            "Gajuwaka 2": "VTR Motors",
            "Markhapur": "Sri Uday Bhaskhara Motors",
            "Ullasnagar": "Hira E Motors",
            "Kothavalasa": "Lucky Enterprises",
            "Tumkur": "Amaragiri Enterprises",
            "Mumbai": "Rank Enterprises LLP",
            "Berhampur": "Sanket Motors",
            "Khammam": "Amaan Motors",
            "Pileru": "Lalith sai Motors",
            "Nandyal": "SR Motors",
            "Vijayawada": "Starts from Oct 21",
            "Videsha": "Starts from Oct 21",
            "Bhadvel": "Starts from Oct 21",
            "Raipur": "Starts from Oct 21",
            "Kakinada": "Starts from Oct 21",
            "Chennai": "Starts from Oct 21"
        }
        $("#state").change(function() {
            var selectedText = $(this).find("option:selected").text();
            var selectedValue = $(this).val();
            var cityoption = ''
            var cities = city[selectedValue];
            $('#city')
                .empty().append('<option selected="selected" value="">Choose City</option>')
            $.each(cities, function(i) {
                cityoption += '<option value="' + cities[i] + '">' + cities[i] + '</option>';
            });
            $('#city').append(cityoption);
        });
        $("#city").change(function() {
            var selectedText = $(this).find("option:selected").text();
            var selectedValue = $(this).val();
            $('#delear').val(delears[selectedValue]);
        })
    })(jQuery);


    jQuery(document).ready(function(){

        jQuery('.choose-style').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:5000,
            dots:false,
            responsive:{
                0:{
                    items:1
                }
            },
            URLhashListener:true,
            // startPosition: 'URLHash',
            
        });
       
        window.onhashchange = function() { 
            var hashClass = window.location.hash.substring(1);
            var ele = $(`.slider-nav a.${hashClass}`)
            $(`.slider-nav a`).removeClass('active')
            ele.addClass('active');
            // console.log(hashClass);
       }

    })


    