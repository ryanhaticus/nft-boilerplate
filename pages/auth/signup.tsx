import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FormResponseComponent from '../../nft/client/components/formresponse';
import LogoComponent from '../../nft/client/components/logo';
import NFTPage from '../../nft/client/components/nftpage';
import { useUserProvider } from '../../nft/client/providers/user';

const AuthSignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formResponse, setFormResponse] = useState<string[]>(['asdsad']);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { signUp } = useUserProvider();
  const _signUp = async () => {
    if (password !== confirmPassword) {
      setIsError(true);
      setFormResponse(['Passwords do not match.']);
      return;
    }
    try {
      await signUp(email, password);
      setIsError(false);
      setFormResponse(['Successfully signed up. Redirecting...']);
      router.push('/app');
    } catch (e) {
      setIsError(true);
      setFormResponse([
        'Ensure your email is valid and not already in use.',
        'Your password must be at least 6 characters long.'
      ]);
    }
  };
  return (
    <NFTPage title='Sign Up'>
      <div className='min-h-screen flex'>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <LogoComponent />
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                Sign up for an account
              </h2>
            </div>

            <div className='mt-8'>
              <div className='mt-6'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    _signUp();
                  }}
                  method='POST'
                  className='space-y-6'
                >
                  <FormResponseComponent
                    response={formResponse}
                    isError={isError}
                  />
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email address
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email'
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Confirm Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='confirm-password'
                        name='confirm-password'
                        type='password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <div className='text-sm'>
                      <Link href='/auth/signin'>
                        <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                          Already have an account?
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block relative w-0 flex-1'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt='Skyline background'
          />
        </div>
      </div>
    </NFTPage>
  );
};

export default AuthSignupPage;
