export default {
    validateInput(validateObject) {
        for (let key in validateObject) {
            if (!validateObject[key]) {
                return false;
            } else if (validateObject[key] instanceof Array) {
                const array = validateObject[key];
                for (let i = 0; i < array.length; i++) {
                    if (array[i] instanceof Object) {
                        for (let key in array[i]) {
                            const object = array[i];
                            if (!object[key]) {
                                return false;
                            }
                        }
                    } else {
                        if (!array[i]) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    },
    hideTooltip(object, delay) {
        setTimeout(() => {
            this.setState(object);
        }, delay);
    },
    getComputedStyle(target, property) {
        const value = window.getComputedStyle(target, null).getPropertyValue(property);
        return parseInt(value);
    }
};
