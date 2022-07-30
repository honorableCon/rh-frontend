import React from 'react';

const UserDropdown = () => {
  const items = ['Dashboard', 'Settings'];

  const handleSignout = () => {
    document.cookie =
      'JWTtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  };

  return (
    <div
      id="userDropdown"
      className="z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>Dame Leye</div>
        <div className="font-medium truncate">dame@gmd.sn</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="avatarButton"
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="py-1">
        <a
          onClick={handleSignout}
          href="/"
          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default UserDropdown;
