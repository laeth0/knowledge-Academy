let UserName=document.getElementById("UserName");
let CourseName=document.getElementById("CourseName");
let UserEmail=document.getElementById("UserEmail");
let CourseCategory=document.getElementById("CourseCategory");
let PhoneNumber=document.getElementById("PhoneNumber");
let Notes=document.getElementById("Notes");

let LableUserName=document.getElementById("LableUserName")
let LableCourseName=document.getElementById("LableCourseName")
let LableUserEmail=document.getElementById("LableUserEmail")
let LableCourseCategory=document.getElementById("LableCourseCategory")
let LablePhoneNumber=document.getElementById("LablePhoneNumber")

let ParaUserName=document.querySelector(".crud .form-group .ParaUserName")
let ParaCourseName=document.querySelector(".crud .form-group .ParaCourseName")
let ParaUserEmail=document.querySelector(".crud .form-group .ParaUserEmail")
let ParaCourseCategory=document.querySelector(".crud .form-group .ParaCourseCategory")
let ParaPhoneNumber=document.querySelector(".crud .form-group .ParaPhoneNumber")

let AddCourseBtn=document.querySelector(".crud form input#AddCourse")
let UpdateCourseBtn=document.querySelector(".crud form input#Update")
let ClearBtn=document.querySelector(".crud form button")
let DeleteAllBtn=document.querySelector(".crud button.DeleteAllBtn")
let FinishBtn=document.querySelector(".crud a.finish")

let SearchNameBtn=document.querySelector(".crud label.Search-Name")
let SearchGategoryBtn=document.querySelector(".crud label.Search-Category")
let SearchInput=document.querySelector(".crud input.Search")

let Data=document.getElementById("data")

let Courses=[];

let Current_Index_To_Updated=0;

let SearchMood="Search-Name";

let isUserNameValid=0,isCourseNameValid=0,isUserEmailValid=0,isCourseCategoryValid=0,isPhoneNumberValid=0;

if(JSON.parse(localStorage.getItem("Courses"))!=null)
Courses=JSON.parse(localStorage.getItem("Courses"));

ShowData()



function CheckInput(){
    if(isUserNameValid &&isCourseNameValid  &&isUserEmailValid  && isCourseCategoryValid &&isPhoneNumberValid){
        AddCourseBtn.removeAttribute("disabled")
        UpdateCourseBtn.removeAttribute("disabled")
    }
    else{
        AddCourseBtn.setAttribute("disabled","disabled")
        UpdateCourseBtn.setAttribute("disabled","disabled")
    }
}
CheckInput()

AddCourseBtn.onclick=function(e){
    e.preventDefault();
    AddCourse()
    ResetInput()
    ShowData()
    isUserNameValid=0,isCourseNameValid=0,isUserEmailValid=0,isCourseCategoryValid=0,isPhoneNumberValid=0;
    CheckInput()
    Swal.fire({
        title: 'Course Added Successfully',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(13,202,240,0.3)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })

}

UpdateCourseBtn.onclick=function(e){
    e.preventDefault();
    Courses[Current_Index_To_Updated].UserName=UserName.value.trim()
    Courses[Current_Index_To_Updated].CourseName=CourseName.value.trim()
    Courses[Current_Index_To_Updated].UserEmail=UserEmail.value.trim()
    Courses[Current_Index_To_Updated].CourseCategory=CourseCategory.value.trim()
    Courses[Current_Index_To_Updated].PhoneNumber=PhoneNumber.value.trim()
    Courses[Current_Index_To_Updated].Notes=Notes.value.trim()
    ResetInput()
    ShowData()
    isUserNameValid=0,isCourseNameValid=0,isUserEmailValid=0,isCourseCategoryValid=0,isPhoneNumberValid=0;
    CheckInput()

    DeleteAllBtn.removeAttribute("disabled")


    UpdateCourseBtn.style.display="none"
    AddCourseBtn.style.display="inline-block"
    localStorage.setItem("Courses",JSON.stringify(Courses))
    Swal.fire({
        title: 'Course Updated Successfully',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(0,0,123,0.3)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
}


function AddCourse(){
    let course={
        UserName:UserName.value.trim(),
        CourseName:CourseName.value.trim(),
        UserEmail:UserEmail.value.trim(),
        CourseCategory:CourseCategory.value.trim(),
        PhoneNumber:PhoneNumber.value.trim(),
        Notes:Notes.value.trim()
    }
    Courses.push(course);
    localStorage.setItem("Courses",JSON.stringify(Courses))
}

function ShowData(){
    Data.innerHTML="";
    for (let i = 0; i < Courses.length; i++) {
        Data.innerHTML+=`
        <tr>
        <td>${i+1}</td>
        <td>${Courses[i].UserName}</td>
        <td>${Courses[i].UserEmail}</td>
        <td>${Courses[i].PhoneNumber}</td>
        <td>${Courses[i].CourseName}</td>
        <td>${Courses[i].CourseCategory}</td>
        <td>${Courses[i].Notes}</td>
        <td><button id="btn-Update" class="btn btn-outline-info" onclick="GetCourse(${i})">Update</button></td>
        <td><button id="btn-Delete" class="btn btn-outline-danger" onclick="DeleteItem(${i})">Delete</button></td>
        </tr>
        `
    }
    if(Courses.length>0){
        FinishBtn.style.display="inline-block"
        DeleteAllBtn.style.display="inline-block"
        DeleteAllBtn.innerHTML=`Delete All ${Courses.length}`
    }
    else{
        FinishBtn.style.display="none"
        DeleteAllBtn.style.display="none"
    }

}

function ResetInput(){
        UserName.value=""
        CourseName.value=""
        UserEmail.value=""
        CourseCategory.value=""
        PhoneNumber.value=""
        Notes.value=""

        LableUserName.innerHTML="user name"
        LableUserEmail.innerHTML="user email"
        LablePhoneNumber.innerHTML="phone number"
        LableCourseName.innerHTML="course name"
        LableCourseCategory.innerHTML="course category"

        ParaUserName.innerHTML=""
        ParaCourseName.innerHTML=""
        ParaUserEmail.innerHTML=""
        ParaPhoneNumber.innerHTML=""
        ParaCourseCategory.innerHTML=""
        
        isUserNameValid=0,isCourseNameValid=0,isUserEmailValid=0,isCourseCategoryValid=0,isPhoneNumberValid=0;
        CheckInput()


}

function DeleteItem(index){
if(UpdateCourseBtn.style.display!="inline-block"){
    Swal.fire({
        title: 'Are You Sure',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Deleted!', '', 'success')
            Courses.splice(index,1);
            localStorage.setItem("Courses",JSON.stringify(Courses))
            ShowData()
        }
        else if (result.isDenied) {
            Swal.fire('Canceled', '', 'info')
        }
    })
}
else{
    Swal.fire({
        title: 'Please Finish the Upload',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(220,53,69,0.3)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
}

}

DeleteAllBtn.onclick= function(){
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    if (result.isConfirmed) {
    Courses=[]
    ShowData()
    localStorage.setItem("Courses",JSON.stringify(Courses))
        Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
        )
    }
    })


}

function GetCourse(index){
    Current_Index_To_Updated=index

    UserName.value=Courses[index].UserName
    CourseName.value=Courses[index].CourseName
    UserEmail.value=Courses[index].UserEmail
    CourseCategory.value=Courses[index].CourseCategory
    PhoneNumber.value=Courses[index].PhoneNumber
    Notes.value=Courses[index].Notes
    
    LableUserName.innerHTML=UserName.value
    LableUserEmail.innerHTML=UserEmail.value
    LablePhoneNumber.innerHTML=PhoneNumber.value
    LableCourseName.innerHTML=CourseName.value
    LableCourseCategory.innerHTML=CourseCategory.value

    isUserNameValid=1,isCourseNameValid=1,isUserEmailValid=1,isCourseCategoryValid=1,isPhoneNumberValid=1;
    CheckInput()

    DeleteAllBtn.setAttribute("disabled","disabled")


    UpdateCourseBtn.style.display="inline-block"
    AddCourseBtn.style.display="none"
    scroll({
        top:0,
        behavior:"smooth"
    }) 
}

function GetSearchMood(id){
if(id=="Search-Name"){
    SearchMood="Search-Name"
    SearchInput.placeholder="Search by Course Name ..."
}
if(id=="Search-Category"){
    SearchMood="Search-Category"
    SearchInput.placeholder="Search by Course Category ..."
}
Search()
}

function Search(){
    Data.innerHTML="";

    if(SearchMood=="Search-Name")
        for (let i = 0; i < Courses.length; i++) 
            if(Courses[i].CourseName.toLowerCase().includes(SearchInput.value.toLowerCase())){
                Data.innerHTML+=`
                <tr>
                <td>${i+1}</td>
                <td>${Courses[i].UserName}</td>
                <td>${Courses[i].UserEmail}</td>
                <td>${Courses[i].PhoneNumber}</td>
                <td>${Courses[i].CourseName}</td>
                <td>${Courses[i].CourseCategory}</td>
                <td>${Courses[i].Notes}</td>
                <td><button id="btn-Update" class="btn btn-outline-info" onclick="GetCourse(${i})">Update</button></td>
                <td><button id="btn-Delete" class="btn btn-outline-danger" onclick="DeleteItem(${i})">Delete</button></td>
                </tr>
                `
            }


    if(SearchMood=="Search-Category")
        for (let i = 0; i < Courses.length; i++) 
            if(Courses[i].CourseCategory.toLowerCase().includes(SearchInput.value.toLowerCase())){
                Data.innerHTML+=`
                <tr>
                <td>${i}</td>
                <td>${Courses[i].UserName}</td>
                <td>${Courses[i].UserEmail}</td>
                <td>${Courses[i].PhoneNumber}</td>
                <td>${Courses[i].CourseName}</td>
                <td>${Courses[i].CourseCategory}</td>
                <td>${Courses[i].Notes}</td>
                <td><button id="btn-Update" class="btn btn-outline-info" onclick="GetCourse(${i})">Update</button></td>
                <td><button id="btn-Delete" class="btn btn-outline-danger" onclick="DeleteItem(${i})">Delete</button></td>
                </tr>
                `
            }

}

UserName.onchange=function(){
let pattern=/^[A-Z]{1}([\s]|[a-z]){3,18}[a-z\s]$/;
if(pattern.test(UserName.value.trim())){
    if(UserName.classList.contains("is-invalid"))
        UserName.classList.replace("is-invalid","is-valid")
        UserName.classList.add("is-valid")
        isUserNameValid=1
        ParaUserName.innerHTML=""
}
else
{
    if(UserName.classList.contains("is-valid"))
        UserName.classList.replace("is-valid","is-invalid")
        UserName.classList.add("is-invalid")
        ParaUserName.innerHTML="First letter should be capital and betwwen 3 and 18 letter"
        isUserNameValid=0
}
LableUserName.innerHTML=UserName.value.trim();
if(UserName.value.trim()=="")
LableUserName.innerHTML="user name"
CheckInput()
}

CourseName.onchange=function(){
    let pattern=/^[A-Za-z#+-.*_]{2,10}$/;
    if(pattern.test(CourseName.value.trim())){
        if(CourseName.classList.contains("is-invalid"))
            CourseName.classList.replace("is-invalid","is-valid")
            CourseName.classList.add("is-valid")
            isCourseNameValid=1
            ParaCourseName.innerHTML=""

    }
    else
    {
        if(CourseName.classList.contains("is-valid"))
            CourseName.classList.replace("is-valid","is-invalid")
            CourseName.classList.add("is-invalid")
            isCourseNameValid=0
            ParaCourseName.innerHTML="letter between 2 and 10 without spaces"
    }
    LableCourseName.innerHTML=CourseName.value.trim();
if(CourseName.value.trim()=="")
LableCourseName.innerHTML="course name"
    CheckInput()
}

UserEmail.onchange=function(){
    let pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(pattern.test(UserEmail.value.trim())){
        if(UserEmail.classList.contains("is-invalid"))
            UserEmail.classList.replace("is-invalid","is-valid")
        UserEmail.classList.add("is-valid")
        isUserEmailValid=1
        ParaUserEmail.innerHTML=""
    }
    else
    {
        if(UserEmail.classList.contains("is-valid"))
            UserEmail.classList.replace("is-valid","is-invalid")
        UserEmail.classList.add("is-invalid")
        ParaUserEmail.innerHTML="Enter a right Email like example@gmail.com"
        isUserEmailValid=0
    }
    LableUserEmail.innerHTML=UserEmail.value.trim();
    if(UserEmail.value.trim()=="")
    LableUserEmail.innerHTML="user email"
    CheckInput()
}

CourseCategory.onchange=function(){
    let pattern=/^[A-Za-z\s]{5,15}$/;
    if(pattern.test(CourseCategory.value.trim())){
        if(CourseCategory.classList.contains("is-invalid"))
            CourseCategory.classList.replace("is-invalid","is-valid")
            CourseCategory.classList.add("is-valid")
            isCourseCategoryValid=1
            ParaCourseCategory.innerHTML=""
    }
    else
    {
        if(CourseCategory.classList.contains("is-valid"))
        CourseCategory.classList.replace("is-valid","is-invalid")
        CourseCategory.classList.add("is-invalid")
        ParaCourseCategory.innerHTML="Capital letter or Small letter only and between 5 and 15"
        isCourseCategoryValid=0
    }
    LableCourseCategory.innerHTML=CourseCategory.value.trim();
if(CourseCategory.value.trim()=="")
LableCourseCategory.innerHTML="course category"
    CheckInput()
}

PhoneNumber.onchange=function(){
    let pattern=/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if(pattern.test(PhoneNumber.value.trim())){
        if(PhoneNumber.classList.contains("is-invalid"))
        PhoneNumber.classList.replace("is-invalid","is-valid")
        PhoneNumber.classList.add("is-valid")
        ParaPhoneNumber.innerHTML=""
        isPhoneNumberValid=1
    }
    else
    {
        if(PhoneNumber.classList.contains("is-valid"))
        PhoneNumber.classList.replace("is-valid","is-invalid")
        PhoneNumber.classList.add("is-invalid")
        ParaPhoneNumber.innerHTML="Your Number should be between 10 and 14 (Enter just a number or +  or)"
        isPhoneNumberValid=0
    }
    LablePhoneNumber.innerHTML=PhoneNumber.value.trim();
if(PhoneNumber.value.trim()=="")
LablePhoneNumber.innerHTML="phone number"
    CheckInput()
}




















































