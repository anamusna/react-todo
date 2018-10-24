export function randomArrayItem(array){
    return array[Math.floor(Math.random()*array.length)];
}
export function getRandomTagLine(){
    const taglines = ['This is my Todo List', 'This is my shopping list', 'This is my travel list'];
    return randomArrayItem(taglines);
}