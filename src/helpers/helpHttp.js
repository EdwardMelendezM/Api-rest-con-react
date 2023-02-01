export const helpHttp = () => {
  const customFecth = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json"
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => {
      controller.abort();
    }, 3000);


    return fetch(endpoint, options)
      .then(res => res.ok ? res.json() : Promise.reject({
        err: true,
        status: res.status || "00",
        statusText: res.status.Text || "Ocurrio el error"
      }))
      .catch(err => err)
  }
  const get = (url, options = {}) => customFecth(url, options)
  const post = (url, options = {}) => {
    options.method = "POST"
    return customFecth(url, options)
  }
  const put = (url, options = {}) => {
    options.method = "PUT"
    return customFecth(url, options)
  }
  const del = (url, options = {}) => {
    options.method = "DELETE"
    return customFecth(url, options)
  }

  return {
    get, post, put, del
  }
}