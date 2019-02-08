const isBrowser = typeof window !== 'undefined';

const cycleVisualization = (current) =>{
    if(current === 'square'){
        window.localStorage.setItem('visualization', 'Krzywinski');
        return 'Krzywinski'
    }
    else if(current === 'Krzywinski'){
        window.localStorage.setItem('visualization', 'square');
        return 'square'
    }
    return 'square'
}
export {cycleVisualization};

const loadVisualization = () => {
    if(!isBrowser){ return 'square'}
    return window.localStorage.getItem('visualization') || 'square'
}
export default loadVisualization