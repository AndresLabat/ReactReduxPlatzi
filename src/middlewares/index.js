export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
} 

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [
        { name: 'eddie' }, 
        ...actionInfo.action.payload
    ];
    const updatedActionInfo = {
        ...actionInfo, 
        action:{...actionInfo.action, payload: featured}
    };
    next(updatedActionInfo);
}

export const addBytaPokemon = (store) => (next) => (actionInfo) => {
    const newPokemon = [
        ...actionInfo.action.payload, 
        { name: 'byta', image:'https://blog.frikibunker.es/wp-content/uploads/2025/01/c996a7ad-30d1-4194-a3f9-2a4fb99ca916-1.jpg' }
    ];
    const updatedActionWithByta = {
        ...actionInfo, 
        action: {...actionInfo.action, payload: newPokemon}
    };
    next(updatedActionWithByta);
}