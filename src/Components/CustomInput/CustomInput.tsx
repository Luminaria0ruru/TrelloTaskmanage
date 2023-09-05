import "./CustomInput.css";
interface CustomInputProps {
  text: string;
  onSubmit: (value: string) => void;
  displayClass?: string;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string;
  buttonText?: string;
}
function CustomInput(props: CustomInputProps) {
  const {
    text,
    displayClass,
  } = props;

  return (
    <div className="custom-input">
        <p
          className={`custom-input-display ${displayClass ? displayClass : ""}`}
        >
          {text}
        </p>
    </div>
  );
}

export default CustomInput;
