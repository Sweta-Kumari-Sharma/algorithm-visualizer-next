let order=[];
const merge=(dupBlocks,l,mid,r)=>{
    let i=l,j=mid+1;
    const array=[];
    while((i<=mid) && (j<=r)){
        order.push([i,j,null,null]);
        if(dupBlocks[i]<=dupBlocks[j]){
            array.push(dupBlocks[i++]);
        }
        else{
            array.push(dupBlocks[j++]);
        }
    }
    while(i<=mid){
        order.push([i,null,null,null]);
        array.push(dupBlocks[i++]);
    }
    while(j <= r){
        order.push([null, j, null, null])
        array.push(dupBlocks[j++])
    }
    for( i=l;i<=r;i++){
        dupBlocks[i]=array[i-l];
        order.push([i,null,dupBlocks.slice(),null]);
    }
}

const mergeSortHelper=(dupBlocks, l, r)=>{
    if(l>=r){
        return;
    }
    const mid=Math.floor((l+r)/2);
    mergeSortHelper(dupBlocks,l,mid);
    mergeSortHelper(dupBlocks,mid+1,r);
    merge(dupBlocks,l,mid,r);
}
export default function mergeSort(blocks){
    order=[];
    const dupBlocks=blocks.slice();
    mergeSortHelper(dupBlocks, 0, dupBlocks.length-1);
    for(let i=0;i<dupBlocks.length;i++){
        order.push([null,null,null,i]);
    }
    return order;
}