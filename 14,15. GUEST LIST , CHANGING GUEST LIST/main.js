var guest_list = ["laiba", "abiha", "sobia", "zehra"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("My Dear friend " + guest_list[i] + ',\n We invite you on dinner tomorrow.\nThank you\n');
}
var not_present = "zehra";
var new_guest = "hadiya";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("My Dear Friend " + guest_list[i] + ',\n We invite you on dinner tomorrow.\nThank you\n');
}
console.log("Miss. ".concat(not_present, " will not comming tomorrow dinner."));
