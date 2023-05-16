import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  email: string;
  password: string;
}

export async function signInRequest(data: SignInRequestData) {
  // Connection to the backend
  // making login request here..

  return {
    token: uuid(),
    user: {
      name: 'Ken Nagamine',
      email: 'kennagamine1@gmail.com',
      avatar_url: 'https://github.com/ken-nagamine-dev.png'
    }
  }
}

export async function recoverUserInformation() {
  // Connection to the backend
  // define how it will be here...

  return {
    user: {
      name: 'Ken Nagamine',
      email: 'kennagamine1@gmail.com',
      avatar_url: 'https://github.com/ken-nagamine-dev.png'
    }
  }
}