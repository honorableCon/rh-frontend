import {useState} from 'react';

const ToastSuccess = ({idPersonnel, message}) => {
    const [close, setClose] = useState(false);

    const handleUndo = () => {
        console.log('delete ', idPersonnel);
    }

    const handleClose = () => {
        setClose(true);
    }

  return (
    <div id="toast-bottom-left" className={close ? "hidden" : "absolute flex justify-between items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white rounded-lg shadow bottom-5 right-5 dark:text-gray-400 space-x dark:bg-gray-800"} role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <div className="flex items-center ml-auto space-x-2">
            <a onClick={handleUndo} className="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="#">Undo</a>
            <button onClick={handleClose} type="button" className="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    </div>
  )
}

export default ToastSuccess