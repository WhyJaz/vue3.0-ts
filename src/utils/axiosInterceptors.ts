import axios from 'axios'

const uuid = 'crooteyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjcm9vdCIsInN1YiI6ImRldiIsImV4cCI6MTYzODM1MTk5NSwibmJmIjoxNjM3NzQ3MTk1fQ.7DU0QeEogfngX0MgXVyIc5h3KhPSer01lXJfceGiAJM'

// 添加请求拦截器
axios.interceptors.request.use(function (config: any) {
    // 在发送请求之前做些什么
    config.headers.uuid = uuid
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
