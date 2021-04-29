//@Author Muhammad Alghifari

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
    },
    displayGroup:()=>{
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

//user1
let user1 = Whatsapp([],[]);
//add contact
user1.addContact('Asep','087654425262');
user1.addContact('Udin','087634343362');
user1.addContact('Jordi','087343882982');
user1.addContact('Roni','082167737388');

//looping get name contact
const allMember=()=>{
    let result=[];
    for(let i=0;i<user1.countContact();i++){
        result.push(user1.displayContactName(i));
    }
    return result;
}

//buat logic Whatsappmu disini dengan fungsi yang tersedia
//objek::user1
console.log(user1.displayContactAll());
