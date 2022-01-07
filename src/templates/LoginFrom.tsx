import PrimaryButton from "../components/atoms/PrimaryButton";

type LoginFormCompProps = {
  label: string;
};

const loginClick = () => {
  console.log("ログインクリック");
};

const LoginForm: React.FC<LoginFormCompProps> = (props) => {
  return (
    <div>
      <PrimaryButton onClick={loginClick} label={props.label} />
    </div>
  );
};

export default LoginForm;
