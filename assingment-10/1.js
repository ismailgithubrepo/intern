let user = 'player1 Turn'
let count = 0;
let count2 = 0;
document.getElementById('player').innerText = user
for (let i = 0; i < 49; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('border-2', 'border-black', 'h-[50px]')
    newDiv.id = i
    document.getElementById('container').appendChild(newDiv)
}

document.getElementById(0).classList.add('bg-black')
document.getElementById('roll').addEventListener('click', () => {
    if (checkwin()) {

        let roll = Math.ceil(Math.random() * 6)
        if (user == 'player1 Turn') {
            move1(roll)
            user = 'player2 Turn'
        } else {
            move2(roll)
            user = 'player1 Turn'
        }

        document.getElementById('disp').innerText = roll
        document.getElementById('player').innerText = user
    }
})


function move1(num) {
    if (count + num <= 48) {
        document.getElementById(count).classList.remove('bg-red-500')
        count = count + num;
        console.log('move1', count)
        if (count == count2) {
            document.getElementById(count2).classList.add('bg-black')
            document.getElementById(count2).classList.remove('bg-black')
        } else {
            document.getElementById(count).classList.add('bg-red-500');
        }

    }
}



function move2(num2) {
    if (count2 + num2 <= 48) {
        document.getElementById(count2).classList.remove('bg-blue-500')
        count2 = count2 + num2;
        console.log('move2', count2)
        if (count == count2) {
            document.getElementById(count2).classList.add('bg-black')
            document.getElementById(count2).classList.remove('bg-black')
        } else {
            document.getElementById(count2).classList.add('bg-blue-500');
        }
    }

}


function checkwin() {
    if (count >= 48) {
        alert('Player 1 wins!')
        return false
    } else if (count2 >= 48) {
        alert('Player 2 wins!')
        return false
    } else {
        return true;
    }
}
