calorie_count={
    //0
    "Burger":{
        base:200,
        extra:[60,40],
        desc:"a sandwich consisting of a cooked patty of ground meat (usually beef), typically with cheese, lettuce, tomato, onion, and condiments served on a bun.",
        button1:"Extra Cheese",
        button2:"Extra Patty",
    },
    //1
    "Butter Naan":{
        base:291,
        extra:[40,50],
        desc:" A type of leavened bread made from refined flour, yeast, butter, and milk, traditionally cooked in a tandoor (clay oven) and served hot with curry or other dishes.",
        button1:"Extra Cheese",
        button2:"Extra Butter"
    },
    //2
    "Chai":{
        base:40,
         extra:[20,40],
         desc:"A popular beverage made from black tea, milk, and a blend of spices such as cardamom, cinnamon, and ginger, commonly consumed in India and other parts of South Asia.",
         button1:"Extra Sugar",
         button2:"Extra Milk"
    },
    //3
    "Chapati":{
        base:244,
        extra:[60,10],
        desc:"A type of flatbread made from whole wheat flour, water, and salt, commonly eaten in India, Pakistan, and other parts of South Asia.",
        button1:"Extra Ghee",
        button2:"Extra Butter"
    },
    //4
    "Chole Bhature":{
        base:178,
        extra:[70,80],
        desc:"A popular North Indian dish consisting of spicy chickpeas (chole) served with a deep-fried bread (bhatura).",
        button1:"Extra Bhature",
        button2:"Extra Chole"
    },
    //5
    "Dal Makhani":{
        base:110,
        extra:[19,10],
        desc:"A Punjabi dish made from black lentils (urad dal) and kidney beans (rajma), cooked with butter and cream for a rich and creamy texture.",
        button1:"Extra Ghee",
        button2:"Extra Butter"
    },
    //6
    "Dhokla":{
        base:155,
        extra:[20,40],
        desc:"A savory steamed cake made from fermented batter of gram flour (besan) and yogurt, commonly eaten as a snack or breakfast in Gujarat and other parts of Western India.",
        button1:"Extra Chutney",
        button2:"Extra Sev"
    },
    //7
    "Fried Rice":{
        base:110,
        extra:[50,60],
        desc:"A dish made from cooked rice that has been stir-fried with vegetables, eggs, and often meat or seafood, seasoned with soy sauce and other spices.",
        button1:"Extra Chicken",
        button2:"Extra Veggies"
    },
    //8
    "Idli":{
        base:146,
        extra:[45,10],
        desc:" A popular South Indian dish consisting of steamed rice and lentil batter, often served with coconut chutney and sambar (a spicy lentil soup).",
        button1:"Extra Chutney",
        button2:"Extra Sambhar"
    },
    //9
    "Jalebi":{
        base:263,
        extra:[54,55],
        desc:"A sweet Indian dessert made by deep-frying a wheat flour batter into a pretzel or spiral shape, then soaking it in sugar syrup.",
        button1:"Rabdi",
        button2:"Ice Cream"
    },
    //10
    "Kaathi Rolls":{
        base:158,
        extra:[60,70],
        desc:"A type of street food originating in Kolkata, consisting of a skewer-roasted kebab wrapped in a paratha (flatbread) with vegetables and chutney.",
        button1:"Extra Chicken",
        button2:"Extra Egg"
    },
    //11
    "Kadai Paneer":{
        base:180,
        extra:[40,50],
        desc:"A North Indian dish made from paneer (Indian cottage cheese) and a blend of spices, cooked in a traditional Indian wok (kadai) for a rich and spicy flavor.",
        button1:"Extra Paneer",
        button2:"Extra Ghee"
    },
    //12
    "Kulfi":{
        base:181,
        extra:[100,20],
        desc:"A traditional Indian frozen dessert made from sweetened and flavored milk that has been cooked down to a thick consistency, often served on a stick like a popsicle.",
        button1:"Rabdi",
        button2:"Syrup"
    },
    //13
    "Masala Dosa":{
        base:156,
        extra:[50,60],
        desc:"A South Indian dish consisting of a thin, crispy rice and lentil crepe (dosa) filled with a spicy potato and onion mixture (masala), often served with coconut chutney and sambar.",
        button1:"Extra Sambhar",
        button2:"Extra Chutney"
    },
    //14
    "Momos":{
        base:135,
        extra:[50,60],
        desc:"A type of dumpling originating in Tibet and commonly found in Nepal, Bhutan, and parts of India, filled with meat or vegetables and often served with spicy sauce.",
        button1:"Extra Chutney",
        button2:"Extra Chicken"
    },
    //15
    "Paani Puri":{
        base:105,
        extra:[50,60],
        desc:"A popular street food in India consisting of a small, hollow, crispy puri (fried bread) filled with spiced mashed potatoes, chickpeas, and tamarind chutney, then dunked in a tangy mint and coriander water (paani) before being eaten whole.",
        button1:"Extra Sev",
        button2:"Extra Ragda"
    },
    //16
    "Pakode":{
        base:291,
        extra:[50,60],
        desc:"A type of Indian fritter made from gram flour (besan) batter mixed with various vegetables or spices and deep-fried until crispy.",
        button1:"Extra Chutney",
        button2:"Extra Chilli"
    },
    //17
    "Pav Bhaji":{
        base:159,
        extra:[50,60],
        desc:"A popular street food originating in Mumbai, consisting of a thick vegetable curry (bhaji) served with soft bread rolls (pav) that have been toasted with butter.",
        button1:"Extra Pav",
        button2:"Extra Cheese"
    },
    //18
    "Pizza":{
        base:238,
        extra:[50,60],
        desc:" A popular Italian dish consisting of a round, flat bread base topped with tomato sauce, cheese, and various toppings such as vegetables, meats, and herbs.",
        button1:"Extra Cheese",
        button2:"Extra Toppings"
    },
    //19
    "Samosa":{
        base:276,
        extra:[50,60],
        desc:"A triangular-shaped, deep-fried or baked snack with a savory filling typically made of spiced potatoes, peas, and onions, popular in the Indian subcontinent and Southeast Asia.",
        button1:"Extra Chutney",
        button2:"Extra Chilli"
    },

}
// import calorie_count from './CaloriesObj'
$(document).ready(function () {

    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        // $('#card').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);
        document.querySelector("#card").removeAttribute("hidden");
        totalCalorie = 0;
        // document.querySelector("#imageUpload").addEventListener('click', ()=>{
        //     document.querySelector("#card").setAttribute("hidden");
        // });
        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                // $('#card').fadeIn(600);
                console.log(data)
                // $('#result').text(' Result:  ' + data);
                
            
                calories=document.querySelector("#calories")
                b1Add=document.querySelector("#button1Add")
                b1Rm=document.querySelector("#button1Rm")
                b2Add=document.querySelector("#button2Add")
                b2Rm=document.querySelector("#button2Rm")
                totalCalorie = 0;
                
                
                // adding calories
                let counter1=0;
                let counter2=0;
                b1Add.addEventListener('click', ()=>{
                    counter1++;
                    totalCalorie += calorie_count[data].extra[0]
                    console.log(totalCalorie);
                    console.log(calorie_count[data].extra[0])
                    console.log(calorie_count[data].extra[0]);
                    calories.innerText = totalCalorie
                });
                b1Rm.addEventListener('click', ()=>{
                    if(counter1>0){
                        counter1--;
                    totalCalorie -= calorie_count[data].extra[0]
                    if(totalCalorie<calorie_count[data].base) totalCalorie=calorie_count[data].base
                    calories.innerText = totalCalorie
                    }  
                });
                b2Add.addEventListener('click', ()=>{
                    counter2++;
                    totalCalorie += calorie_count[data].extra[1]
                    calories.innerText = totalCalorie
                });
                b2Rm.addEventListener('click', ()=>{
                    if(counter2>0){
                        counter2--;
                        totalCalorie -= calorie_count[data].extra[1];
                        if(totalCalorie<calorie_count[data].base) totalCalorie=calorie_count[data].base
                        calories.innerText = totalCalorie
                    }  
                });
                calories.innerText=0
                totalCalorie=calorie_count[data].base;
                calories.innerText = totalCalorie;
                document.querySelector("#button1").innerText=`${calorie_count[data].button1} - ${calorie_count[data].extra[0]} cal: `
                document.querySelector("#button2").innerText=`${calorie_count[data].button2} - ${calorie_count[data].extra[1]} cal: `
                let desc = document.querySelector("#desc")
                res=document.querySelector('#result')
                res.innerText=` Result: ${data}`
                desc.innerText = `Description: ${calorie_count[data].desc}`
        },
        
    });
});

});
