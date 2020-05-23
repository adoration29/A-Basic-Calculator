//select all the buttons of the calculator which we have using the li and add buttons eventlistener to them
const $lis = document.querySelectorAll("ul li")
$lis.forEach((node) => {
    node.addEventListener('mousedown', function(event){
        const value = node.innerText.trim()
        const $display = document.querySelector(".display")
        // $display.innerText = value
        const displayText = $display.innerText.trim()

        if (displayText =='0' || displayText =='undefined' || displayText=='Infinity'){
            $display.innerText =''
        } 
        //this will get rid of the zero that appears infront of the nunmber.


        if(value == '='){
            // let solution = eval($display.innerText.trim())
            let solution = eval(displayText)
            $display.innerText = solution
            return true
        }

        if(value.toLowerCase() =='c') {
            // $display.innerText ='iam cleared' // just for learning
            $display.innerText=''
            return true
        }

$display.append(value)

    })
})