import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
    await signIn(data)
  }

  return (
    <div className='container'>
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className='input-container'>
            <label htmlFor="email-address">
              Email address
            </label>
            <input
              {...register('email')}
              id="email-address"
              name="email"
              type="email"
              placeholder="Email address"
              required
            />
          </div>
          <div className='input-container'>
            <label htmlFor="password">
              Password
            </label>
            <input
              {...register('password')}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className='button-container'>
            <button type="submit" className='btn'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
