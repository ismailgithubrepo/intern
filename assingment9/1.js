
let user='x';
let a=['-','-','-','-','-','-','-','-','-']
for(let i=0;i<9;i++){
    document.getElementById(i).addEventListener('click',()=>{
        if(checkWin()&&a[i]=='-'){
        if(user=='x'){
            document.getElementById(i).innerText='x'
            user='o'
            a[i]='x'
            checkWin()
        }
        else if(user=='o'){
            document.getElementById(i).innerText='o'
            user='x'
            checkWin()
        }
        } })
}

function checkWin() {

    if (a[0] === 'x' && a[1] === 'x' && a[2] === 'x') {
        alert('player1(x) wins');
        return false;
    } else if (a[3] === 'x' && a[4] === 'x' && a[5] === 'x') {
        alert('player1(x) wins');
        return false;
    } else if (a[6] === 'x' && a[7] === 'x' && a[8] === 'x') {
        alert('player1(x) wins');
        return false;
    } else if (a[0] === 'x' && a[3] === 'x' && a[6] === 'x') {
        alert('player1(x) wins');
        return false;
    } else if (a[1] === 'x' && a[4] === 'x' && a[7] === 'x') {
        alert('player1(x) wins');
        return false;
    } else if (a[2] === 'x' && a[5] === 'x' && a[8] === 'x') {
        alert('player1(x) wins');
        return false;
    } else if (a[0] === 'x' && a[4] === 'x' && a[8] === 'x') {
        alert('player1(x) wins');
        return false;
    } else if (a[2] === 'x' && a[4] === 'x' && a[6] === 'x') {
        alert('player1(x) wins');
        return false;
    }
    else if (a[0] === 'o' && a[1] === 'o' && a[2] === 'o') {
        alert('player2(o) wins');
        return false;
    } else if (a[3] === 'o' && a[4] === 'o' && a[5] === 'o') {
        alert('player2(o) wins');
        return false;
    } else if (a[6] === 'o' && a[7] === 'o' && a[8] === 'o') {
        alert('player2(o) wins');
        return false;
    } else if (a[0] === 'o' && a[3] === 'o' && a[6] === 'o') {
        alert('player2(o) wins');
        return false;
    } else if (a[1] === 'o' && a[4] === 'o' && a[7] === 'o') {
        alert('player2(o) wins');
        return false;
    } else if (a[2] === 'o' && a[5] === 'o' && a[8] === 'o') {
        alert('player2(o) wins');
        return false;
    } else if (a[0] === 'o' && a[4] === 'o' && a[8] === 'o') {
        alert('player2(o) wins');
        return false;
    } else if (a[2] === 'o' && a[4] === 'o' && a[6] === 'o') {
        alert('player2(o) wins');
        return false;
    }
    else{
        return true
    }
}

document.getElementById('btn').addEventListener('click',()=>{

    window.location.reload();
})
