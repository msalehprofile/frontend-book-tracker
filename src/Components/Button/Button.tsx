import './Button.scss';

type ButtonProps = {
    label: String;
}

const Button = ({label}: ButtonProps) => {
  return (
    <div >
        <button >{label}</button>
    </div>
  )
}

export default Button