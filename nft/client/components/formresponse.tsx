import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

interface FormResponseComponentParams {
  response: string[];
  isError: boolean;
}

const FormResponseComponent = ({
  response,
  isError
}: FormResponseComponentParams) => {
  return (
    <Transition
      show={response !== null && response.length > 0}
      enter='transition ease-out duration-500'
      enterFrom='opacity-0 -translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 -translate-y-1'
    >
      <div
        className={`mb-6 rounded-md ${
          isError ? 'bg-red-50' : 'bg-indigo-50'
        } p-4`}
      >
        <div className='flex'>
          <div className='flex-shrink-0'>
            {isError ? (
              <XCircleIcon
                className='h-5 w-5 text-red-500'
                aria-hidden='true'
              />
            ) : (
              <CheckCircleIcon
                className='h-5 w-5 text-indigo-500'
                aria-hidden='true'
              />
            )}
          </div>
          <div className='ml-3'>
            <h3
              className={`text-sm font-medium ${
                isError ? 'text-red-800' : 'text-indigo-800'
              }`}
            >
              {isError
                ? 'There was an error with your submission. Please try again.'
                : 'Success!'}
            </h3>
            <div
              className={`mt-2 text-sm ${
                isError ? 'text-red-700' : 'text-indigo-700'
              }`}
            >
              <ul role='list' className='list-disc pl-5 space-y-1'>
                {response.map((message) => (
                  <li key={message}>{message}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default FormResponseComponent;
