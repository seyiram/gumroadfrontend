const ExternalLinkIcon = ({ width = 20, height = 20 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        d="m5.966 12.705 2.76-2.76-1.319-1.317-2.756 2.76 1.315 1.317Zm8.088 2.57-2.758 2.76 1.318 1.316 2.756-2.758-1.316-1.318Zm-2.758 2.76a3.77 3.77 0 0 1-5.33 0L4.649 19.35a5.629 5.629 0 0 0 7.965 0l-1.318-1.318v.001Zm-6.645-6.648A5.633 5.633 0 0 0 3 15.37a5.63 5.63 0 0 0 1.65 3.982l1.317-1.318a3.769 3.769 0 0 1 0-5.33L4.65 11.387l.002.001Zm6.808-6.75L8.873 7.226l1.318 1.316 2.584-2.586-1.316-1.319Zm5.317 10.489 2.587-2.585-1.318-1.318-2.586 2.587 1.318 1.317-.001-.001Zm2.587-2.585a5.587 5.587 0 0 0-.002-7.902l-1.316 1.316a3.725 3.725 0 0 1 0 5.268l1.318 1.318Zm-6.588-6.586a3.725 3.725 0 0 1 5.27 0l1.318-1.318a5.588 5.588 0 0 0-7.904 0l1.316 1.318Zm-2.023 8.61 4.013-4.013-1.317-1.317-4.013 4.013 1.317 1.318v-.001Z"
      />
    </svg>
  );
};

export default ExternalLinkIcon;