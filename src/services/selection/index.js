import { displayFloatingConditionsMenu } from './floating-conditions-menu'

export const onSelectionChanged = () => {
    document.addEventListener("mouseup", () => displayFloatingConditionsMenu(), false);
}