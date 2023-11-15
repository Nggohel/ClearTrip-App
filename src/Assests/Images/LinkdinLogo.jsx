const LinkedinLogo = () => {
  return (
    <svg
      width={15}
      height={15}
      fill="none"
      className="mx-1 c-neutral-200"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#a)">
        <path
          fill="gray"
          fillRule="evenodd"
          d="M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8ZM5.499 12.496V6.248H3.422v6.248h2.077Zm7.488 0V8.913c0-1.919-1.025-2.811-2.39-2.811-1.103 0-1.596.605-1.872 1.031v-.885H6.648c.028.587 0 6.248 0 6.248h2.077v-3.49c0-.186.013-.373.068-.506.15-.373.492-.76 1.065-.76.752 0 1.052.574 1.052 1.413v3.343h2.077Zm-8.513-9.26c-.71 0-1.175.467-1.175 1.08 0 .599.45 1.079 1.148 1.079h.013c.724 0 1.175-.48 1.175-1.08-.013-.612-.45-1.08-1.16-1.08Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedinLogo;
