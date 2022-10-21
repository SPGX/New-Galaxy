import axios from 'axios'
// import api from './index'
import config from '../config/env'

// const Bearer =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiMDgwMzg5IiwidXNlcm5hbWUiOiIxX2FybXNyaWNoYW4yQGdtYWlsLmNvbSIsImFjdGlvbiI6ImxvZ2luU3RlcDEiLCJpYXQiOjE2NjQ3ODA3MzIsImV4cCI6MTY2NDc4MTYzMn0.II76XgLadxCympGZNvPJ1FfqSoHnwbvBq_gxAsQElVE'

export default {
  getFaq: async () => {
    return await axios
      .get(`${config.api}/api/faqs/?populate=*`)
      .then(async (res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  popular: async () => {
    return await axios
      .get(`${config.api}/api/products/?populate=*`)
      .then(async (res) => {
        // console.log("popular", res)
        return res
      })
      .catch((err) => {
        return err
      })
  },

  banner: async () => {
    return await axios
      .get(`${config.api}/api/banners/?populate=*`)
      .then(async (res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  collection: async () => {
    return await axios
      .get(`${config.api}/api/product-collections/?populate=*`)
      .then(async (res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  product_detail: async (productId: string) => {
    return await axios
      .get(`${config.api2}/api/products/${productId}`)
      .then(async (res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  login: async (email: string, password: string) => {
    const data = {
      email: `${email}`,
      password: `${password}`,
    }

    return await axios
      .post(`${config.api2}/api/users/login/step1/`, data)
      .then(async (res: any) => {
        return res
      })
      .catch((err: any) => {
        console.log('err, ', JSON.stringify(err))
        return err
      })
  },

  login2: async (code: string, token: string) => {
    const data = {
      code: `${code}`,
      token: `${token}`,
    }

    return await axios
      .post(`${config.api2}/api/users/login/step2/`, data)
      .then(async (res: any) => {
        return res
      })
      .catch((err: any) => {
        console.log('err, ', JSON.stringify(err))
        return err
      })
  },

  register1: async (email: string) => {
    const data = {
      email: `${email}`,
    }
    return await axios
      .post(`${config.api2}/api/users/registration/step1/`, data)
      .then(async (res: any) => {
        return res
      })
      .catch((err: any) => {
        console.log('err, ', JSON.stringify(err))
        alert(JSON.stringify(err))
        return err
      })
  },

  // login: async (email: string, password: string) => {
  //   console.log('email', email)
  //   console.log('password', password)
  //   console.log('API', API)
  //   return API.post(`/api/users/login/step1/`, { email: email, password: password })
  //     .then(async (_res: any) => {
  //       console.log('login res >>>>>>', _res)
  //       return _res
  //     })
  //     .catch((err: any) => {
  //       console.log('err, ', JSON.stringify(err))
  //       alert(JSON.stringify(err))
  //       return err
  //     })
  // },

  // getPost: async (limit: any, page: any) => {
  //   return await api.BACKEND_ENDPOINT.get(`${config.api}/post/list?limit=${limit}&page=${page}`)
  //     .then(async (res) => {
  //       return res
  //     })
  //     .catch((err) => {
  //       console.log('err, ', err)
  //       return err
  //     })
  // },
  // deletePost: async (id: any) => {
  //   const data = {
  //     id: id,
  //   }
  //   return await api.BACKEND_ENDPOINT.post(`${config.api}/post/delete`, data)
  //     .then(async (res) => {
  //       return res
  //     })
  //     .catch((err) => {
  //       console.log('err, ', err)
  //       return err
  //     })
  // },
}
