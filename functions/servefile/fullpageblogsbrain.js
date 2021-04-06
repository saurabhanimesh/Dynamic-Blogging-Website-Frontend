var blogspage = document.getElementById("blogsPage");
var likeandcomment = document.getElementById("likeandcomment");
var blogsuploadeddescription = document.getElementById("blogsuploadeddescription");
var likebutton = document.getElementById("like");
var commentbutton = document.getElementById("comment");
var clicklikecomment=document.getElementById("clicklikecomment");
let i = 1;
let checkcommentbutton = 1;


commentbutton.addEventListener("click", () => {
    if (checkcommentbutton == 1) {
        var username = document.createElement("input");
        username.type = "name";
        //  var usernamenode=document.createTextNode("sds"); // abb yeha input user se aayega
        //  username.appendChild(usernamenode);
        var newcomments = document.createElement("textarea");
        //  var newcommentsnode=document.createTextNode("sdssfsdf");
        //  newcomments.appendChild(newcommentsnode);
        likeandcomment.appendChild(username);
        likeandcomment.appendChild(newcomments);


        username.placeholder = "Type Your Name";
        newcomments.placeholder = "Write Your Comment";

        newcomments.className = "newcomments";
        newcomments.id="newcomments";
        username.className = "username";
        username.id="username";
        checkcommentbutton = 0;
    }
    else {
        var username= document.getElementById("username");
        var newcomments = document.getElementById("newcomments");
        likeandcomment.removeChild(username);
        likeandcomment.removeChild(newcomments);
    //    username.style.display="none";
    //    newcomments.style.display="none";
        checkcommentbutton = 1;
    }
});

likebutton.addEventListener("click",()=>{
//   isme bass itna karna hai ki jo ip aayega uss useer ka wo ip firebase me store kardenge and jab same ip wwala ayega to usko liked hi dhikayega
  var liked=document.createElement("p");
  var likednode=document.createTextNode("Liked");
  liked.appendChild(likednode);
   
  liked.id="liked"; 

  clicklikecomment.replaceChild(liked,likebutton);

});

// yeha pe hum comment and like ko data base se show and write karwayenge
 while( i < 10)  
 {
    var commentedsection=document.createElement("div");
    var commentedname=document.createElement("h3");
    var commentednamenode=document.createTextNode("ffvffdffd");  
    // database se yeha pe comment ka name aayega
    commentedname.appendChild(commentednamenode);
    var commentedtext=document.createElement("p");
    var commentedtextnode=document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, iste. Minima accusantium consectetur provident cumque dignissimos nostrum neque nemo omnis, sint et. Fuga pariatur odit quidem temporibus quaerat quis error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis debitis ipsa vitae! Quaerat labore voluptatum voluptas, accusantium omnis recusandae ea ratione dolore, autem perspiciatis qui debitis nam reprehenderit a molestiae!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad expedita tempore ab tempora aliquam nihil minima consequatur cumque aliquid numquam quia in animi, dolorum magni obcaecati beatae dolore tenetur? . Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quisquam atque, et libero nostrum asperiores accusamus, cum praesentium molestias nesciunt earum fugit officia in nam doloremque natus dicta corporis ratione?");  
    // database se yeha pe comment ka text ayega
    commentedtext.appendChild(commentedtextnode);
    commentedsection.id="commentedsection";

    commentedname.id="commentedname";
    commentedtext.id="commentedtext";

    commentedsection.appendChild(commentedname);
    commentedsection.appendChild(commentedtext);

    blogspage.appendChild(commentedsection);

    i++;
 }   