const loadData = (key) => {
    try {
        let data = localStorage.getItem(key)
        data = JSON.parse(data);
        return data;
    } catch (err) {
        return undefined;
    }
};

const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const clearData = () => {
    localStorage.clear();
};

const waitFor = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export { loadData, saveData, clearData, waitFor };