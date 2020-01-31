export interface UseToggleProps {
  active: boolean;
  show(): void;
  hide(): void;
  toggle(): void;
}

declare type UseToggle = () => UseToggleProps;

export default UseToggle;
