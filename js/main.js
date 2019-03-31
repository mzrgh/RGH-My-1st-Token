//var web3 = new Web3 ();

if(typeof web3 !== 'undefined') 
{
 web3 = new Web3(web3.currentProvider);
 console.log('1');
 } 
else 
{
web3 = new Web3('https://rinkeby.infura.io/v3/dacbccd3b7da4b59b3568af1d82a8386');
 console.log('Undefined');
}


web3.eth.getBlockNumber()
	.then (blockNumber => console.log('Conectado a Red Rinkeby!. Número de Bloque: ', blockNumber))
    .catch (err => console.error('error', err));
	

function verificar(){
	var estado='';
	if (localStorage.getItem('keystore') == null) {
		alert('No hay cuenta!!');
		estado='0';
		} else {
			alert('Hay cuenta!!');
			alert('kk');
		}
	return estado;
}
//web3.eth.getBalance('0x7DeCe88bABd9C7e60031B3634Ef5eBA9D56BAC6B')
//.then(console.log);
	//createAndSaveAccount();
	//getAccount('234');

function consSaldoETH(cuenta){
	web3.eth.getBalance(cuenta, function (error, wei) {
    if (!error) {
        balance = web3.utils.fromWei(wei, 'ether');
        console.log(balance + " ETH");
        localStorage.setItem ('saldo', JSON.stringify (balance)); 
    	}
	}
		);
    balance = localStorage.getItem('saldo').replace('\"', '') + ' ETH';
	return balance;
}


//var myContract = new web3.eth.Contract([], '0xc985df7c378a11f4e56b0ea6981a58e30fa5e692');
//myContract.methods.balanceOf('0x896d842e6a9eb146ddd7f7e00b075827aa94fb48');


function setContractI(){
var ContractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_extraData",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "target",
				"type": "address"
			},
			{
				"name": "freeze",
				"type": "bool"
			}
		],
		"name": "freezeAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "target",
				"type": "address"
			},
			{
				"name": "mintedAmount",
				"type": "uint256"
			}
		],
		"name": "mintToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newSellPrice",
				"type": "uint256"
			},
			{
				"name": "newBuyPrice",
				"type": "uint256"
			}
		],
		"name": "setPrices",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"name": "tokenName",
				"type": "string"
			},
			{
				"name": "tokenSymbol",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "target",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "frozen",
				"type": "bool"
			}
		],
		"name": "FrozenFunds",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "frozenAccount",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var ContractAddress = '0xc985df7c378a11f4e56b0ea6981a58e30fa5e692';


var sampleContractInstance = setContract(ContractABI, ContractAddress);

}

/* Instanciar SMARTCONTRACT para interactuar */
function setContract(ContractABI, ContractAddress) {
	var ContractInstance  = new web3.eth.Contract(ContractABI, ContractAddress);
	ContractInstance.methods.name().call()
.then(console.log);

ContractInstance.methods.symbol().call()
.then(console.log);

ContractInstance.methods.totalSupply().call()
.then(console.log);
	return ContractInstance;
}

//var balance1=sampleContractInstance.balanceOf.call('0x896d842e6a9eb146ddd7f7e00b075827aa94fb48');
//console.log(sampleContractInstance.options.address);


/*
sampleContractInstance.methods.balanceOf('0x896d842e6a9eb146ddd7f7e00b075827aa94fb48').call()
.then(console.log);

sampleContractInstance.methods.balanceOf('0x3Cb285eF93c0c34B4984E3463e398Ac85121D717').call()
.then(console.log);
*/

	

/* Crear y Almacenar encriptada la cuenta en el navegador del usuario */
function createAndSaveAccount() {	
	//const password = prompt ('Password'); --> Por si se quiere promtear la password
	var password='';
	const account = web3.eth.accounts.create();
	console.log('Cuenta: ', account);  //---> luego eliminar

	const keystore = account.encrypt(password);
	console.log('Contraseña', password); //---> luego eliminar
	console.log('keystore', keystore); //---> luego eliminar

	localStorage.setItem ('keystore', JSON.stringify (keystore)); 
}

/* Obtener la cuenta en el Local Storage del navegador del usuario, de acuerdo a una contraseña */
function getAccount(password) {
    const keystoreStr = localStorage.getItem('keystore');
    const keystore = JSON.parse(keystoreStr);
    return web3.eth.accounts.decrypt(keystore, password);    //--> Descomentar
}

/* Obtener la cuenta y firmar un mensaje */
function signMessage(message) {
    const password = prompt('Sign a message');
    return getAccount(password).sign(message);
}


