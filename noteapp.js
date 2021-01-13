console.log(1300)
display();

// function for addbtn button
let addbtn = document.getElementById('addNoteBtn');
let addtitle = document.getElementById('addtitle');
addbtn.addEventListener('click', function () {
  let addtxt = document.getElementById('addTextArea');
  let returnednotes = localStorage.getItem('notes')
  if (returnednotes == null) {
     notesArr = [];

  }
  else {

    notesArr = JSON.parse(returnednotes)
  }
  if (addtxt.value != ""||addtitle.value!="") {
      let myObj={
          title:addtitle.value,
          text: addtxt.value
      }
    notesArr.push(myObj);
    addtxt.value = "";
    addtitle.value = "";
    localStorage.setItem("notes", JSON.stringify(notesArr));
  }
  else {
    alert("add notes or title first")
  }
  display();

})

// display all the notes
function display() {
    let returnednotes = localStorage.getItem('notes')
  if (returnednotes == null) {
    returnednotesarr =[];

  }
  else {

    returnednotesarr = JSON.parse(returnednotes)
  }
  let displaycard = document.getElementById('displaynotes');
//   let returnednotesarr = JSON.parse(localStorage.getItem('notes'))
  let html = ""
    returnednotesarr.forEach(function (elem, index) {

      html = html + `<div class="notescard card mx-2 my-2" style="width: 15.8rem;">
    <div class="card-body">
        <h5 class="card-title">${elem.title}</h5>
        
        <p class="card-text"><bold>${elem.text}</bold></p>
        <button id="${index + 1}" onclick="deleteNoteMeth(this.id)" class=" btn btn-primary">Delete Note</button>
        <button  id="e${index}" onclick="editNoteMeth(this.id)" class=" btn btn-primary">Edit Note</button>
      </div>
    </div>`
    });
    let displaynotes = document.getElementById('displaynotes')
    if (returnednotesarr.length != 0) 
    {
      displaynotes.innerHTML = html
    }
    else 
    {
      displaynotes.innerHTML = `NO NOTES TO DISPLAY`
    }
  }


  // deletion of notes from the section
  let deleteNote = document.getElementById('deleteNote');
  function deleteNoteMeth(id) {
    let did = id;
    let returnednotesArr = JSON.parse(localStorage.getItem('notes'))
    returnednotesArr.splice(did - 1, 1);
    localStorage.setItem("notes", JSON.stringify(returnednotesArr))
    display();
    let addtitle2=document.getElementById('addtitle')
    let addtextarea2=document.getElementById('addTextArea')
    addtitle2.value='';
    addtextarea2.value=''

  }


  // search box function
    let serach=document.getElementById("search")
    serach.addEventListener('input',function(){
      // let returnednotes=JSON.parse(localStorage.getItem('notes'))
      var searchtxt =(serach.value).toLowerCase()
      console.log(searchtxt)
      let notescard=document.getElementsByClassName('notescard')
      console.log(notescard)
        // console.log(searchtxt)
        Array.from(notescard).forEach(function(e){
          let txt=e.querySelector('p').innerText
          console.log(txt)
          let title=e.querySelector('h5').innerText
          if(txt.includes(searchtxt)||title.includes(searchtxt))
          {
            e.style.display="block"
          }
          else{
            e.style.display="none"
          }

        })
  
        

    })


    // home button

    let home=document.getElementById('home')
    // console.log(home)
    home.addEventListener('click',function(){

        location.reload();

    })
    


    //edit button

function editNoteMeth(id){
    let notes=localStorage.getItem('notes')
    let notesArr=JSON.parse(notes);
      console.log(notesArr)
    let eid=id
    var n=eid.substr(1);
    console.log(n)
    // console.log(notesArr[n].title)
    let addtitle1=document.getElementById('addtitle')
    // console.log(addtitle1)
    addtitle1.value=notesArr[n].title
    let addTextArea1=document.getElementById('addTextArea')
    addTextArea1.value=notesArr[n].text
    let addNoteBtn=document.getElementById('addNoteBtn')
    let saveNoteBtn=document.getElementById('saveNoteBtn')
    addNoteBtn.style.display="none"
    saveNoteBtn.style.display="inline"
    // console.log(saveNoteBtn)
    saveNoteBtn.addEventListener('click',function(){
        console.log(addTextArea1.value)
        notesArr[n].title=addtitle1.value
        notesArr[n].text=addTextArea1.value
        console.log(notesArr[n].text);
        
        addNoteBtn.style.display="inline"
        saveNoteBtn.style.display="none"
       
        
        localStorage.setItem("notes",JSON.stringify(notesArr))
        
    })

    

    saveNoteBtn.addEventListener('blur',function(){
        addTextArea1.value="";
        addtitle1.value="";
        display();
        
    })
}



//delete all
    let deleteBtn=document.getElementById('deleteBtn')
    deleteBtn.addEventListener('click',function(){
        localStorage.clear();
        display();
        let addtitle2=document.getElementById('addtitle')
    let addtextarea2=document.getElementById('addTextArea')
    addtitle2.value='';
    addtextarea2.value=''
    let addNoteBtn=document.getElementById('addNoteBtn')
        let saveNoteBtn=document.getElementById('saveNoteBtn')
        addNoteBtn.style.display="inline"
        saveNoteBtn.style.display="none"


    })
