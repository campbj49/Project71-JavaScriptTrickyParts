function curriedAdd(total=0) {
    if(total === 0) return 0;

    function add(newNum){
        if(newNum) {
            total += newNum;
            return add;
        }
        console.log(newNum);
        return total;
    }
    
    return add;
}

module.exports = { curriedAdd };
