import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { db } from "../config/firebase";
import { getDocs,collection,addDoc,deleteDoc,doc} from "firebase/firestore";

function App() {
  const [notes, setNotes] = useState([]);
  
  const notesRef=collection(db,"notes");
  const getNotes=async ()=>
  {
  try{
      const data= await getDocs(notesRef);
       const filteredData=data.docs.map((docs)=>({
       ...docs.data(),id:docs.id
      }));
     //console.log(filteredData);
     setNotes(filteredData);
     //setMovieList(filteredData);
     }
catch(err)
{
 console.log(err);
}
};
useEffect(()=>{
getNotes() },[]
  );

  const addNote=async (note)=>
  {
    try{
      await addDoc(notesRef,{
        title:note.title,
        content:note.content,
      })
     getNotes();
    }
    catch(err)
    {
      console.log(err);
    }
  }

  function addN(note) {
    // setNotes((prevValue) => {
    //   return [...prevValue, note];
    // });
    addNote(note);
    }
    const delNote=async (id) => {
      const noteDoc=doc(db,"notes",id);
      await deleteDoc(noteDoc);
      getNotes();
     }
  function kaboom(id) {
    // setNotes((prevValue) => {
    //   return prevValue.filter((value, index) => {
    //     return index !== id;
    //   });
    // });
    delNote(id);
  }
  

  return (
    <div>
      <Header />
      <CreateArea addNote={addN} />
      {notes.map((value, index) => {
        return (
          <Note
            nuke={kaboom}
            key={index}
            id={value.id}
            title={value.title}
            content={value.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
