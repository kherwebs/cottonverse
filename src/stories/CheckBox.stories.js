import { CheckBox } from "components";
export default {
  title: "cottonverse/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  variant: "OutlineBluegray100",
  size: "sm",
  inputClassName: "mr-1",
};
