function Node (val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinaryTree(){
	this.root = null;
}

BinaryTree.prototype.push = function(val) {
	var root = this.root;

	if (root == null) {
		this.root = new Node(val);		
		return;
	}

	var currentNode = root;
	while (true){
		if (val < currentNode.value) {
			if (currentNode.left == null){
				currentNode.left = new Node(val)
				return;
			} else{
				currentNode = currentNode.left;
			}
		}
		else{
			if (currentNode.right == null) {
				currentNode.right = new Node(val);
				return;
			}else{
				currentNode = currentNode.right;
			}

		}
	}

};

BinaryTree.prototype.inorder = function (node){	
		if (node) {			
		this.inorder(node.left);		
		console.log(node.value);		
		this.inorder(node.right);
		}
};

BinaryTree.prototype.preorder= function(node){
	if (node) {
		console.log(node.value);
		this.preorder(node.left);
		this.preorder(node.right);

	}
};

BinaryTree.prototype.postorder = function(node){
	if (node) {
		this.postorder(node.left);
		this.postorder(node.right);
		console.log(node.value);
	}
}

var arrayTree = [40, 25, 10, 32, 78, 75, 90];

function pushInTree(binaryTree, arrayTree){
	for (var i = 0; i < arrayTree.length; i++) {
			binaryTree.push(arrayTree[i]);
		}
	};

var binaryTree = new BinaryTree();
pushInTree(binaryTree, arrayTree);
binaryTree.inorder(binaryTree.root);
console.log("-------------------------");
binaryTree.preorder(binaryTree.root);
console.log("-------------------------");
binaryTree.postorder(binaryTree.root);
