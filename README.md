# Decoder-Ring

Using JavaScript, 3 well-known ciphers were created.

Caesar Cipher: Takes a string and number as parameters and offsets the characters in the string by the number given.
caesar("Zebra Magazine", 3) => "cheud pdjdclqh"

Polybius Square: Takes a string, breaks the alphabet up into rows and columns with corresponding numbers, and then returns a string concatenated with the numbers.
polybius("message") => "23513434112251"

Substitution: Takes a string of 26 numbers and a message as parameters. Returns the message with each letter corresponding to the input alphabet.
substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"
