import { SignIn } from '@clerk/nextjs'


const page = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div className='m-auto'>
            <SignIn forceRedirectUrl='/'/>
        </div>
      
    </div>
  )
}

export default page