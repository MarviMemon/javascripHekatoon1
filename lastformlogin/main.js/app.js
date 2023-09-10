

const firebaseApp = firebase.initializeApp({  

    apiKey: "AIzaSyAsIDyCl_xx1nbgcD7rRnWYLHOPnjvecKM",
    authDomain: "form1loginsignup-e95ee.firebaseapp.com",
    projectId: "form1loginsignup-e95ee",
    storageBucket: "form1loginsignup-e95ee.appspot.com",
    messagingSenderId: "364983909543",
    appId: "1:364983909543:web:c30b60c5c86c6136596f82"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const app = initializeApp(firebaseConfig);
const gdb = getDatabase(app)
// export {gdb}

const signUp =()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);


    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    alert("you are signed up");
    // console.log(result)
    // document.write(" you are signed up")
    // ...
  })
  .catch((error) => {
  alert("sothing is worng");
  //  console.log(error.code);
  //  console.log(error.message)
  });
}

//sign in function

const signIn = ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password);

    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    // console.log(result)
    // document.write(" you are signed In");
    // alert(result)
   
  //  location.href = '././dashbord.html';
    alert(" you are signed In");
    // ...
  })
  .catch((error) => {
    // console.log(error.code);
    // console.log(error.message)

    alert(error.code);
    // alert(error.message)
  });
}


function logout(){
  window.location.href = './signin.html';
} 
document.getElementById('Btnlogout').addEventListener('click', logout);


const sendMessage = () => {
  const name = localStorage.getItem("name");
  const message = messageInput.value.trim();

  if (name && message) {
      const messagesRef = ref(db, "messages")
      push(messagesRef, {
          name: name,
          message: message,
          timestamp: new Date().getTime(),
      })
      messageInput.value = ""
  }

}

 
 
 const courseName = document.getElementById("Class Timing");
 const teacherName = document.getElementById("Teacher's Name");
 const sectionName = document.getElementById("Section Name");
 const form_selct = document.getElementById("form_selct");
 const studenId = document.getElementById("studenId")
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  // Reference to your Firebase Realtime Database
var database = firebase.database();

// Data to be saved
var dataToSave = {
  courseName,
  teacherName,
  sectionName,
  form_selct,
  studenId,
};

// Path to where you want to save the data
var databaseRef = database.ref("classes"); // "users" is the node name in this example

// Push the data to the database
databaseRef.push(dataToSave, function(error) {
  if (error) {
    console.error("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully.");
  }
});

