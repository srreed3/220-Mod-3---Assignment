class Contact {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}

alert("Please update your contact information: name, address, and phone number")

function addContact() {
    let name = prompt("Enter contact name: ");
    let address = prompt("Enter contact address: ");
    let phone = prompt("Enter contact phone number: ");
    return new Contact(name, address, phone);
}

let contacts = [];
while (contacts.length < 10) {
    let newContact = addContact();
    contacts.push(newContact);

    if (contacts.length === 10) {
        alert("The maximum number of contacts has been reached. Thank you for updating your information!")
    } else {
        let addMore = prompt("Would you like to add another contact? (max 10)");
    if (addMore.toLowerCase() !== "yes") {
        alert("Thank you for updating your information!")
        break;
    }
    }
}

contacts.sort(compareNames);

function compareNames(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    } 
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}


let formattedContacts = "Sorted Contacts:\n\n";
contacts.forEach(contact => {
    formattedContacts += `Name: ${contact.name}, Address: ${contact.address}, Phone Number: ${contact.phone}\n`
})

alert(formattedContacts);



/* Create a class called Contact that includes properties for Name, Address, and Phone.
Prompt the user for contact information for a single contact. Store the information in a Contact object and store the object in an array.
Prompt the user to determine if they would like to add more contacts. The program will store a maximum of 10 contacts.  
    If the maximum number of contacts has been reached, skip the prompt, and inform the user the maximum number of contacts has been reached.
Sort objects in the contacts array by contact name. Use functions where appropriate.
Display the data from the sorted array. */