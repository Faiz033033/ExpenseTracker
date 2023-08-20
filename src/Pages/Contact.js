import React,{useContext, useEffect, useState} from "react";
import ExpenseContext from "../store/expense-context";
import ContactDetails from "./ContactDetails/ContactDetails";
import SavedContact from "./SavedContact/SavedContact";
import axios from "axios";
const Contact =()=>
{
    const [contactPage,setContactPage]=useState(null)
    const expctx=useContext(ExpenseContext)
    const tokenObj = {
        idToken: expctx.ExpenseToken,
      };
    
      useEffect(() => {
        async function getData() {
          try {
            const res = await axios.post(
              "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key= AIzaSyD9IHVJXmO199ELEojC5tmtnsW91qJmN8g",
              tokenObj,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
            try {
                
              console.log(res.data.users[0]);
                const details=res.data.users[0]
                expctx.userDetails({name:details.displayName,url:details.photoUrl})
                if(details.displayName && details.photoUrl )
                {
                    setContactPage(false)
                }
        
            } catch (err) {
              console.log(err);
            }
          } catch (err) {
            console.log(err);
          }
        }
        getData();
      }, [tokenObj,expctx]);

      const editButtonhandler=()=>
      {
        setContactPage(true)
      }


    return(<React.Fragment>
      {contactPage && <ContactDetails  />}
      { !contactPage && <SavedContact editButton={editButtonhandler} />}
    </React.Fragment>)
}
export default Contact