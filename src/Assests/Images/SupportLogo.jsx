import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
const SupportLogo = () => {
  // return <FontAwesomeIcon icon={faHeadset} style={{ color: "#3366CC" }} />;
  return (
    <svg width="13" height="16px" class="c-inherit">
      <path
        d="M6.5 0C2.889 0 0 2.91 0 6.545v5.091c0 1.237.939 2.182 2.167 2.182h2.166V8H1.444V6.545c0-2.836 2.24-5.09 5.056-5.09 2.817 0 5.056 2.254 5.056 5.09V8h-2.89v5.818h2.89v.727H6.5V16h4.333C12.061 16 13 15.055 13 13.818V6.545C13 2.91 10.111 0 6.5 0z"
        fill="darkgrey"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export default SupportLogo;
