var numberOfposts = 14;
var thisPost=0;
var inputPlace;
var inputCaption;
var m1 = document.getElementById("modal-1");
var m2 = document.getElementById("modal-2");
var modal = document.getElementById('checkIn');
var span = document.getElementsByClassName("close")[0];


function createNewPostsByCheckIn() {
    
        
            inputCaption = document.getElementById("inputCaption").value;            
            var accPic = document.createElement("img");
            accPic.src = "/images/getFromDB.JPG";
            accPic.id = "acc-pic";
    
            var ownerName = document.createElement("p");
            ownerName.id = "ownerName";
            var text = "مینا";
            var theText = document.createTextNode(text);
            ownerName.appendChild(theText);
    
            var postTime = document.createElement("p");
            postTime.id = "postTime";
            var text0 = "همین الآن"
            var theText0 = document.createTextNode(text0);        
            postTime.appendChild(theText0);
    
            var section1 = document.createElement("div");
            section1.appendChild(accPic); 
            section1.appendChild(ownerName);
            section1.appendChild(postTime);
           
            
            section1.className = "ownerNameAndTimeAndPic";
    
    
            var locationPic = document.createElement("img");
            locationPic.src = "/images/location.png";
            locationPic.id = "locationPic";
    
            var locationAdd = document.createElement("div");
            locationAdd.id = "locationAdd";
            var theText1 = document.createTextNode(inputPlace);        
            locationAdd.appendChild(theText1);
    
            var picOfPlace = document.createElement("img");
            picOfPlace.src = "/images/noPic.png";
            picOfPlace.id = "picOfPlace";
    
            var caption = document.createElement("div");
            caption.id = "caption";
            var theText3 = document.createTextNode(inputCaption);        
            caption.appendChild(theText3);
    
    
            var section2 = document.createElement("div")
            section2.appendChild(locationPic);
            section2.appendChild(locationAdd);
            section2.appendChild(picOfPlace);
            
            section2.appendChild(caption);
            section2.className = "pic-location-caption";
    
    
    
            var likePic = document.createElement("img");
            likePic.src = "/images/like.png";
            likePic.id = "likePic";
    
            var numOfLikes = document.createElement("p");
            numOfLikes.id = "numOfLikes";
            var text4 = "۰ نظر";
            var theText4 = document.createTextNode(text4); 
            numOfLikes.appendChild(theText4);
    
            var commentPic = document.createElement("img");
            commentPic.src = "/images/comment.png";
            commentPic.id = "commentPic";
    
            var numOfComments = document.createElement("p");
            numOfComments.id = "numOfComments";
            var text5 = "۰ کامنت";
            var theText5 = document.createTextNode(text5);  
            numOfComments.appendChild(theText5);
    
    
            var section3 = document.createElement("div")
            section3.appendChild(numOfComments);
            section3.appendChild(numOfLikes);
            section3.appendChild(commentPic);
            section3.appendChild(likePic);
            section3.className = "numOfLikes-Comments";
    
    
            var mainDiv = document.createElement("div")
            mainDiv.className="post";
            mainDiv.appendChild(section1);
            mainDiv.appendChild(section2);
            mainDiv.appendChild(section3);
    
            document.getElementById("myPostTabContentPost").insertBefore(mainDiv,document.getElementById("myPostTabContentPost").childNodes[0]);
            
            numberOfposts=numberOfposts+1;
            thisPost=thisPost+1;
        
        
    }

    // function nextPage() {
    //     inputPlace=document.getElementById("inputPlace").value;
    //     document.getElementById("inputPlace").value="";
    // }

    