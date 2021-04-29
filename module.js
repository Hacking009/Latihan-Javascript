//@Authors Muhammad Alghifari

//list abstraction
const canSendMessage=()=>({
    sendMessage:(to,message)=>{
        console.log("To: "+to);
        console.log("Message: "+message);
    } 
});

const Contact=(state)=>({
    //add contact to end array asosiative
    addContact:(username,number)=>{
        state.contact.push({nama:username,noTelp:number});
    },
    //display both contact name and number
    displayContactAll:()=>{
        return state.contact;
    },
    //display contact name
    displayContactName:(index)=>{
        return state.contact[index]['nama'];

    },
    //display contact number
    displayContactNumber:(index)=>{
        return state.contact[index]['noTelp'];

    },
    //delete contact
    deleteContact:(index)=>{
        state.contact.splice(index,1);
    },
    //count Contact
    countContact:()=>{
        return state.contact.length;
    }
});

const canCreateGroup=(state)=>({
    createGroup:(groupName,member)=>{
        state.group.push({groupName:groupName,members:member});
        return state.group;
    }
});



//objek
const Whatsapp=(contact,group)=>{
    //atribut
    const state={
        contact,
        group
    }

    //create object composition
    return Object.assign({},Contact(state),canSendMessage(),canCreateGroup(state));
}

export{Whatsapp};