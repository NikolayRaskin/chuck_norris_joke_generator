export const parseParamsObject = (params) => {
    let str = '?';
    for (const key in params) {
        if (Array.isArray(params[key])) {
            str += `${key}=`;
            params[key].forEach((item) => {
                str += `${item}&`;
            });
        } else {
            str += `${key}=${params[key]}&`;
        }
    }
    return str;
};