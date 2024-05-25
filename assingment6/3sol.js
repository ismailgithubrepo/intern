let n=12
if(n==0||n==1){
    console.log('factorial of',n,'is',1)
}else{
    let result=1;
    for(i=2;i<=n;i++){
        result*=i;
    }
    console.log('factorial of ',n,'is',result)
}