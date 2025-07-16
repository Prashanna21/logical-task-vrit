function test() {
  if (true) {
    var message = "Hi";
  }
  console.log(message);
  // The messasge will print "Hi" becasue though the vraible is decleared in if scope but it has var keyword which makes it global scope
  //To fix this you have to use "let" keyword
}
