let guest_list: string [] = [`laiba`,`abiha`,`sobia`,`zehra`];
for(let i=0; i<guest_list.length; i++) {
    console.log(`My Dear friend ` + guest_list[i] + ',\n We invite you on dinner tomorrow.\nThank you\n');
}

let not_present: string = "zehra";
let new_guest: string = "hadiya";
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i ++){
    console.log(`My Dear Friend ` + guest_list[i] + ',\n We invite you on dinner tomorrow.\nThank you\n');

}
console.log(`Miss. ${not_present} will not comming tomorrow dinner.`);