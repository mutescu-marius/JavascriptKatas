//Check for balanced parentheses in an expression
//Given an expression string exp, write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp. For example, the program should print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”

var input = "[()]{}{[()()]()}{}()";
var stack = [];

var match = true;

function isOpenParentheses(paranthese){
	var isOpen = "({[".indexOf(paranthese) !== -1;
		console.log(paranthese + " is open: " + isOpen);
		return isOpen;
}

function matches(open, closed){
	if (open =="(" && closed == ")") {
		console.log(open + " matches " + closed );
		return true;
	}
	if (open =="[" && closed == "]") {
		console.log(open + " matches " + closed );		
		return true;
	}
	if (open =="{" && closed == "}") {
		console.log(open + " matches " + closed );
		return true;
	}
	return false;
}



for (var i = 0; i < input.length; i++) {
	if (isOpenParentheses(input[i])) {		
		stack.push(input[i]);
		console.log(stack.toString());
	}
	else{		
		if (stack.length == 0) {
			match = false;
			break;
		}
		if (!matches(stack.pop(), input[i])) {
			match = false;	
			break;	
		}
	}
}

if (stack.length !== 0) {
	match = false;
}


console.log("matches :" + match);