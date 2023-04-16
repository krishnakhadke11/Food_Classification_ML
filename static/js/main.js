calorie_count={
    //0
    "Burger":{
        base:200,
        extra:[60,40],
        button1:"Extra Cheese",
        button2:"Extra Patty",
    },
    //1
    "Butter Naan":{
        base:291,
         extra:[40,50],
         button1:"Extra Cheese",
         button2:"Extra Butter"
    },
    //2
    "Chai":{
        base:40,
         extra:[20,40],
         button1:"Extra Sugar",
         button2:"Extra Milk"
    },
    //3
    "Chapati":{
        base:244,
        extra:[60,10],
        button1:"Extra Ghee",
        button2:"Extra Butter"
    },
    //4
    "Chole Bhature":{
        base:178,
        extra:[70,80],
        button1:"Extra Bhature",
        button2:"Extra Chole"
    },
    //5
    "Dal Makhani":{
        base:110,
        extra:[19,10],
        button1:"Extra Ghee",
        button2:"Extra Butter"
    },
    //6
    "Dhokla":{
        base:155,
        extra:[20,40],
        button1:"Extra Chutney",
        button2:"Extra Sev"
    },
    //7
    "Fried Rice":{
        base:110,
        extra:[50,60],
        button1:"Extra Chicken",
        button2:"Extra Veggies"
    },
    //8
    "Idli":{
        base:146,
        extra:[45,10],
        button1:"Extra Chutney",
        button2:"Extra Sambhar"
    },
    //9
    "Jalebi":{
        base:263,
        extra:[54,55],
        button1:"Rabdi",
        button2:"Ice Cream"
    },
    //10
    "Kaathi Rolls":{
        base:158,
        extra:[60,70],
        button1:"Extra Chicken",
        button2:"Extra Egg"
    },
    //11
    "Kadai Paneer":{
        base:180,
        extra:[40,50],
        button1:"Extra Paneer",
        button2:"Extra Ghee"
    },
    //12
    "Kulfi":{
        base:181,
        extra:[100,20],
        button1:"Rabdi",
        button2:"Syrup"
    },
    //13
    "Masala Dosa":{
        base:156,
        extra:[50,60],
        button1:"Extra Sambhar",
        button2:"Extra Chutney"
    },
    //14
    "Momos":{
        base:135,
        extra:[50,60],
        button1:"Extra Chutney",
        button2:"Extra Chicken"
    },
    //15
    "Paani Puri":{
        base:105,
        extra:[50,60],
        button1:"Extra Sev",
        button2:"Extra Ragda"
    },
    //16
    "Pakode":{
        base:291,
        extra:[50,60],
        button1:"Extra Chutney",
        button2:"Extra Chilli"
    },
    //17
    "Pav Bhaji":{
        base:159,
        extra:[50,60],
        button1:"Extra Pav",
        button2:"Extra Cheese"
    },
    //18
    "Pizza":{
        base:238,
        extra:[50,60],
        button1:"Extra Cheese",
        button2:"Extra Toppings"
    },
    //19
    "Samosa":{
        base:276,
        extra:[50,60],
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
                b1Add.addEventListener('click', ()=>{
                    totalCalorie += calorie_count[data].extra[0]
                    console.log(totalCalorie);
                    console.log(calorie_count[data].extra[0])
                    console.log(calorie_count[data].extra[0]);
                    calories.innerText = totalCalorie
                });
                b1Rm.addEventListener('click', ()=>{
                    totalCalorie -= calorie_count[data].extra[0]
                    if(totalCalorie<calorie_count[data].base) totalCalorie=calorie_count[data].base
                    calories.innerText = totalCalorie
                });
                b2Add.addEventListener('click', ()=>{
                    totalCalorie += calorie_count[data].extra[1]
                    calories.innerText = totalCalorie
                });
                b2Rm.addEventListener('click', ()=>{
                    totalCalorie -= calorie_count[data].extra[1];
                    if(totalCalorie<calorie_count[data].base) totalCalorie=calorie_count[data].base
                    calories.innerText = totalCalorie
                });
                calories.innerText=0
                totalCalorie=calorie_count[data].base;
                calories.innerText = totalCalorie;
                document.querySelector("#button1").innerText=`${calorie_count[data].button1} - ${calorie_count[data].extra[0]} cal: `
                document.querySelector("#button2").innerText=`${calorie_count[data].button2} - ${calorie_count[data].extra[1]} cal: `
                res=document.querySelector('#result')
                res.innerText=` Result: ${data}`

        },
        
    });
});

});
