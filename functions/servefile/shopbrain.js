var blogspage = document.getElementById("blogsPage");
let i = 1;


while (i < 10) // yeha utna baar loop karenge jitna key/pair data base me data hoga 
{
    var img = document.createElement("img");

    img.src = "b3.jpg";  // yeha pe image dalenge owner se jo blog ke sath suit karega
    img.loading="lazy";

    var blogsuploaded = document.createElement("div");

    var newblogbox = document.createElement("div");
    var headblog = document.createElement("h2");
    var headnode = document.createTextNode("TITLE"); // yeha pe hum owner section se blog writing lekar aayenge 
    var summaryblog = document.createElement("div");
    headblog.appendChild(headnode);
    newblogbox.appendChild(headblog);
    var para = document.createElement("p");
    var node = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, cum quod? Quam earum explicabo corporis quod quisquam sint suscipit magni enim aliquam tempore iure reiciendis quia, labore delectus doloribus similique. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, cum quod? Quam earum explicabo corporis quod quisquam sint suscipit magni enim aliquam tempore iure reiciendis quia, labore delectus doloribus similique.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, cum quod? Quam earum explicabo corporis quod quisquam sint suscipit magni enim aliquam tempore iure reiciendis quia, labore delectus doloribus similique.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, cum quod? Quam earum explicabo corporis quod quisquam sint suscipit magni enim aliquam tempore iure reiciendis quia, labore delectus doloribus similique.");  // yeha pe hum owner section se blog writing lekar aayenge and isme ek particular words tak aane dunga and then read more show karega.
    var readmorelink = document.createElement("a");
    var readmorea=document.createElement("button");
    readmorelink.href="/buy";
    var readmorenode = document.createTextNode("Buy");
    readmorea.appendChild(readmorenode);
    readmorelink.appendChild(readmorea);
    
    summaryblog.appendChild(para);
    summaryblog.appendChild(readmorelink);
    para.appendChild(node);
    newblogbox.appendChild(summaryblog);

    blogsuploaded.appendChild(img);
    blogsuploaded.appendChild(newblogbox);

    //  blogsuploaded.style.display="flex";
    //  blogsuploaded.style.flexDirection="row";
    //  blogsuploaded.style.alignItems="center";
    //  blogsuploaded.style.justifyContent="center";

    newblogbox.className = "newblogbox";
    blogsuploaded.className = "blogsuploadeddescription";
    summaryblog.className = "summaryblog";
    readmorelink.className="buynow";
    readmorelink.id="buynow";
    readmorea.id="buynowlink";
    img.id="imageblogs";


    img.style.height = "350px";
    img.style.width = "350px";

    blogspage.appendChild(blogsuploaded);
    i++;
}

var rml=document.getElementById("buynow");

// rml.addEventListener("click",()=>{
//      var xhttp = new XMLHttpRequest();
//      xhttp.open("GET", "/buy", false);
//      xhttp.send();

//      xhttp.onreadystatechange = (e) => {
//      console.log(xhttp.responseText)
//     }
// });


