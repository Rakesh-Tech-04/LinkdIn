import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../utils/axios'
import { toast } from 'react-toastify'
import { useUser } from '../../utils/userContext'
import { useNavigate } from 'react-router-dom'

export const Authentication = () => {
  let { setUser } = useUser()
  let navigate = useNavigate()
  const [isAuth, setIsAuth] = useState('Login')
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = (data) => {
    let url = isAuth === 'Login' ? 'auth/login' : 'auth/signup'
    api.post(url, data)
      .then(({ data }) => {
        setUser(data)
        reset()
        let message = isAuth === 'Login' ? 'Welcome back' : 'Welcome to LinkdIn'
        toast.success(message)
        navigate("/profile")
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          toast.error(response.data.message)
        }
      })

  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">

      <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

        <legend className="fieldset-legend">{isAuth}</legend>
        {isAuth === 'Sign up' &&
          <>
            <label className="label">First Name</label>
            <input {...register('firstname', { required: true })} type="text" className="input" placeholder="First Name" />
            {errors.firstname && <span className='text-red-600 text-sm'>This field is required</span>}

            <label className="label">Last Name</label>
            <input {...register('lastname', { required: true })} type="text" className="input" placeholder="Last Name" />
            {errors.lastname && <span
              className='text-red-600 text-sm'>This field is required</span>}

            <label className="label">Username</label>
            <input {...register('username', { required: true })} type="text" className="input" placeholder="Username" />
            {errors.username && <span
              className='text-red-600 text-sm'>This field is required</span>}
          </>
        }

        <label className="label">Email</label>
        <input {...register('email', { required: true })} type="email" className="input" placeholder="Email" />
        {errors.email && <span
          className='text-red-600 text-sm'>This field is required</span>}

        <label className="label">Password</label>
        <input {...register('password', { required: true })} type="password" className="input" placeholder="Password" />
        {errors.password && <span
          className='text-red-600 text-sm'>This field is required</span>}

        <button className="btn btn-neutral mt-4">{isAuth}</button>
        <div className='text-end text-sm'>Go to <span className='text-blue-400 cursor-pointer' onClick={() => { setIsAuth(prev => prev === 'Login' ? 'Sign up' : 'Login') }}>{isAuth === 'Login' ? 'Sign up' : 'Login'}</span></div>
      </form>
    </div>
  )
}
