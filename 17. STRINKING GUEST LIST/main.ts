let guest_list: string [] = [`laiba`,`abiha`,`sobia`,`zehra`];
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`My Dear friend ` + guest_list[i] + ',\n We invite you on dinner tomorrow.\nThank you\n');
// }

let not_present: string = "zehra";
let new_guest: string = "hadiya";
guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i ++){
//     console.log(`My Dear Friend ` + guest_list[i] + ',\n We invite you on dinner tomorrow.\nThank you\n');

// }
console.log(`Miss. ${not_present} will not comming tomorrow dinner.`);
guest_list.unshift('Manal','Bareera','Arbish');
// for(let i=0; i<guest_list.length; i ++){
//     console.log(`My Dear Friend ` + guest_list[i] + ',\n We invite you on dinner tomorrow.\nThank you\n');

// }
console.log('unfortunately we can not arrange big table , only two people allow.');
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry friends, ${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i ++){
    console.log(`My Dear Friend ` + guest_list[i] + ',\n yes you are still invited for tommorow dinner.\nThank you\n');

}
guest_list.splice(0,2);
console.log(guest_list);