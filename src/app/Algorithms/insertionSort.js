export default function insertionSort(blocks){
    const dupBlocks=blocks.slice();
    const order=[];
    for(let i=0;i<dupBlocks.length;i++){
        let j=i-1;
        let temp=dupBlocks[i];
        while(j>=0 && dupBlocks[j]>temp){
            dupBlocks[j+1]=dupBlocks[j];
            order.push([i,j, dupBlocks.slice(), null]) 
            j--;
        }
        dupBlocks[j+1]=temp;
        order.push([null,null,null,i]);
    }
    return order;
}