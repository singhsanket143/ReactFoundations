function useDebounce(callback, delay=1000) {
    // it takes a callback and returns a modified callback, that executes after a delay
    let timerId;
    return (...args) => {
        // console.log("var args", args);
        clearTimeout(timerId); // if there is any other old timer going on, remove it
        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

export default useDebounce;