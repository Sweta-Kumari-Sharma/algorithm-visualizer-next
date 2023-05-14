const swap=(array,i,j)=>{
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}
export default function selectionSort(blocks){
   
    const dupBlocks=blocks.slice();
    const order=[];
    for(let i=0;i<dupBlocks.length;i++){
        for(let j=i+1;j<dupBlocks.length;j++){
            order.push([i,j,null,null]);
            if(dupBlocks[i]>dupBlocks[j]){
                swap(dupBlocks,i,j);
                order.push([i,j,dupBlocks.slice(),null]);
            }
        }
        order.push([null,null,null,i]);
    }
    console.log(order);
    return order;
}