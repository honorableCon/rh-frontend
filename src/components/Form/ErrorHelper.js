const ErrorHelper = ({ error }) => {
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      <span className="font-medium">Error!</span> {error}
    </p>
  );
};

export default ErrorHelper;
