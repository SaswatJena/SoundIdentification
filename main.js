function StartClassiFication(){

navigator.mediaDevices.getUserMedia({audio:true});
classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/te4T6PDsI/model.json',modelLoaded);
    
}

function modelLoaded(){

console.log("model is Loaded")
classifier.classify(gotResults);
        
}

function gotResults(error,results)
{

if(error)
{

console.error(error);

}

else
{

console.log(results);

document.getElementById("result_label").innerHTML='I CAN HEAR-'+results[0].label;
document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

if(results[0].label == "Lion")
{

img.src="lion.webp";

}else if(results[0].label == "Cat")
{

img.src="cat.webp";

}else if(results[0].label == "Dog")
{

img.src="dog.webp";
    
}else
{

img.src="giraffe.webp";

}

}


}