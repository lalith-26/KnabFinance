let x,y,a,b,i,j,area=0,n;
 
let arg =2;
n = parseInt(process.argv[arg]);
    
let arr = new Array(1000).fill(0).map(()=>new Array(1000).fill(0));


/*

2 ^
0 0 10 10 ^
11 11 12 12 

2 ^
0 0 10 10 ^
5 0 10 10


*/

function findTotalAreaOccupied(){
    while(n--)
    {
        x= parseInt(process.argv[++arg]);
        y= parseInt(process.argv[++arg]);
        a= parseInt(process.argv[++arg]);
        b= parseInt(process.argv[++arg]);
        for(i=x;i<a;i++)
            for(j=y;j<b;j++)
                if(!arr[i][j])
                    arr[i][j]=area+=1;
    }
    return area;

}

console.log(findTotalAreaOccupied());
 
