function addnewwe() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","e.g.:- march 2021 - may 2021 google")

    let weOb = document.getElementById("we");
    let weaddbuttonob = document.getElementById("weaddbutton");
    weOb.insertBefore(newNode, weaddbuttonob);
}
function addacad() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","e.g.:- holy cross school(2006-18) grade:8.9")

    let acadOb = document.getElementById("acad");
    let acadaddbuttonob = document.getElementById("acadaddbutton");
    acadOb.insertBefore(newNode,acadaddbuttonob)
}
function generate()
{
    // generating cv
    //name
    let nameField = document.getElementById("nameField").value;
    let nmeT1 = document.getElementById("NameT1");
    let nmeT2 = document.getElementById("NameT2");
    nmeT1.innerHTML= nameField;
    nmeT2.innerHTML= nameField;
    //contact
    let conField = document.getElementById("contactField").value;
    document.getElementById("ContactT").innerHTML= "+91"+conField
    //adddress
    let addField = document.getElementById("addressField").value;
    document.getElementById("AddT").innerHTML=addField
    //objective
    let objField = document.getElementById("obField").value;
    document.getElementById("ObjT").innerHTML=objField
    //links
    let instaf = document.getElementById("InstaField").value;
    document.getElementById("InstaT").innerHTML="Instagram: "+instaf
    let linkField = document.getElementById("LinkedField").value;
    document.getElementById("LinkT").innerHTML="LinkDin: " +linkField
    let gitField = document.getElementById("GitField").value;
    document.getElementById("GitT").innerHTML="GitHub: "+gitField
    //work experience
    let wex = document.getElementsByClassName("weField")
    let str = ""
    for(let e of wex)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("WorkT").innerHTML = str;
    //eduqualifiation
    let aex = document.getElementsByClassName("aqField")
    let strm = ""
    for(let e of aex)
    {
        strm = strm + `<li> ${e.value} </li>`;
    }
    //set image
    let file = document.getElementById("img").files[0];


    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(){
        document.getElementById("imgT").src = reader.result;
    }





    document.getElementById("aqT").innerHTML = strm;
    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-temlates").style.display = 'block'

    

}
function Print(){
    window.print()
}