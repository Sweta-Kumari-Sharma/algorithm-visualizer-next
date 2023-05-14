
const swap=(array,i,j)=>{
    const temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}

export default function bubbleSort(blocks){
    const dupBlocks=blocks.slice();
    const order=[];
    for(let i=0;i<dupBlocks.length; i++){
        let j=0;
        for( j=0; j<dupBlocks.length-i-1; j++){
            order.push([j,j+1,null,null]);
            if(dupBlocks[j]>dupBlocks[j+1]){
                swap(dupBlocks,j,j+1);
                order.push([j, j+1, dupBlocks.slice(),null]);
            }
        }
        order.push([j,j+1,dupBlocks.slice(),j]);
    }
    return order;
}