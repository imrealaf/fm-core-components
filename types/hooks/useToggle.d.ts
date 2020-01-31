export interface UseToggleAPI {
  active: boolean;
  show(): void;
  hide(): void;
  toggle(): void;
}

declare type useToggle = () => UseToggleAPI;

export default useToggle;
